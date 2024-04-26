import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
import {initializeApp} from 'firebase/app'
import * as test from 'node:test'

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

const firebaseCollectionTestConfig = {
  apiKey: 'AIzaSyALBGVo5hk7EIX_PyZYjrdh9U2PZ9WQqiY',
  authDomain: 'collections-25e36.firebaseapp.com',
  projectId: 'collections-25e36',
  storageBucket: 'collections-25e36.appspot.com',
  messagingSenderId: '944657863955',
  appId: '1:944657863955:web:9acacd50ed17336a9df6e6',
  measurementId: 'G-JB6NS8P4NY',
}

// change when deploying to production
const app = initializeApp(firebaseConfig)
const testApp = initializeApp(firebaseCollectionTestConfig, 'other')
// Firebase Storage & Database references functionality
const projectStorage = getStorage(app)
const projectFireStore = getFirestore(app)

export {projectStorage, projectFireStore}
