import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

// Firebase configuration

/**
 * Firebase configuration object
 * @type {{storageBucket: string, apiKey: string, messagingSenderId: string, appId: string, projectId: string, measurementId: string, authDomain: string}}
 */
const firebaseConfig = {
  apiKey: 'AIzaSyDRGD42qYfcoahaW-THL9ZrkDP1GV9kbsQ',
  authDomain: 'laserengraving-9a35a.firebaseapp.com',
  projectId: 'laserengraving-9a35a',
  storageBucket: 'laserengraving-9a35a.appspot.com',
  messagingSenderId: '846011134281',
  appId: '1:846011134281:web:9c108178f7f7ad45fcea98',
  measurementId: 'G-6LSR5R581F',
}

// change when deploying to production
const app = initializeApp(firebaseConfig)
// const testApp = initializeApp(firebaseCollectionTestConfig, 'other')
// Firebase Storage & Database references functionality
const fireStorage = getStorage(app)
// Firestore database reference for documents
const db = getFirestore(app)
// Firebase Authenticaion reference
const auth = getAuth(app)
// Set the language for the auth
auth.useDeviceLanguage()

export {fireStorage, db, auth}
