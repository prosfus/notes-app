import { collection, getDocs, setDoc, doc } from 'firebase/firestore'
import { appDb } from '../../../firebase'

export const getJournalData: Function = (
	uid: string,
	daySelected: moment.Moment
) => {
	try {
		const docRef = collection(
			appDb,
			uid,
			'journal',
			daySelected.format('YYYY-MM-DD')
		)
		getDocs(docRef).then((docSnap) => {
			if (docSnap.docs.length > 0) {
				docSnap.forEach((doc) => {
					console.log(doc.data())
					return doc.data().data
				})
			} else {
				setDoc(
					doc(appDb, uid, 'journal', daySelected.format('YYYY-MM-DD'), 'text'),
					{
						data: daySelected.format('LL'),
					}
				)
				return daySelected.format('LL')
			}
		})
	} catch (e) {
		console.error('Error adding document: ', e)
	}
}
