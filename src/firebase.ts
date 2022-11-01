import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDgOp7_yKWEVs7CCQpP1eKpByGNUqiAMvw',
	authDomain: 'hepta-672c8.firebaseapp.com',
	projectId: 'hepta-672c8',
	storageBucket: 'hepta-672c8.appspot.com',
	messagingSenderId: '256773608845',
	appId: '1:256773608845:web:8086d4e067e3ddb8e959c4',
	measurementId: 'G-P2PE4QV5MP',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
export const appAuth = getAuth(firebaseApp)
export const appDb = getFirestore(firebaseApp)
const analytics = getAnalytics(firebaseApp)
