import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
import {initializeApp} from 'firebase/app'

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDRGD42qYfcoahaW-THL9ZrkDP1GV9kbsQ',
  authDomain: 'laserengraving-9a35a.firebaseapp.com',
  projectId: 'laserengraving-9a35a',
  storageBucket: 'laserengraving-9a35a.appspot.com',
  messagingSenderId: '846011134281',
  appId: '1:846011134281:web:9c108178f7f7ad45fcea98',
  measurementId: 'G-6LSR5R581F',
}

const app = initializeApp(firebaseConfig)
// Firebase Storage & Database references functionality
const projectStorage = getStorage(app)
const projectFireStore = getFirestore(app)

export {projectStorage, projectFireStore}
