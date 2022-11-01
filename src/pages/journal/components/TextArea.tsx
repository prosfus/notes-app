import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	setDoc,
} from 'firebase/firestore'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { appDb, appAuth } from '../../../firebase'
import { useAppSelector } from '../../../redux/hooks'
import { selectJournal } from '../../../redux/slices/JournalSlice'
import { getJournalData } from '../util/journal.firebase'

export const TextArea = () => {
	const day = useAppSelector(selectJournal).daySelected
	const [daySelected, setDaySelected] = useState(moment())
	const [data, setData] = useState(daySelected.format('LL'))
	const uid = appAuth.currentUser?.uid || ''

	useEffect(() => {
		setDaySelected(moment(day))
	}, [day])

	useEffect(() => {
		//setData(getJournalData(uid, daySelected))
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
						setData(doc.data().data)
					})
				} else {
					setDoc(
						doc(
							appDb,
							uid,
							'journal',
							daySelected.format('YYYY-MM-DD'),
							'text'
						),
						{
							data: daySelected.format('LL'),
						}
					)
					setData(daySelected.format('LL'))
				}
			})
		} catch (e) {
			console.error('Error adding document: ', e)
		}
	}, [daySelected])

	const handleChange = (change: any) => {
		try {
			setData(change.target.value)

			setDoc(
				doc(appDb, uid, 'journal', daySelected.format('YYYY-MM-DD'), 'text'),
				{
					data: change.target.value,
				}
			)
		} catch (a: any) {
			console.log('error ', a)
		}
	}

	return (
		<div className='flex flex-col items-center h-full pb-14 w-full'>
			<textarea
				className='h-full text-3xl font-bold w-1/2 outline-none bg-transparent text-white rounded-md p-3'
				value={data}
				onChange={handleChange}
				style={{ resize: 'none' }}
			></textarea>
		</div>
	)
}
