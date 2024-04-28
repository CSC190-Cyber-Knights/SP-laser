//Import the functions you need from the SDKs you need
// eslint-disable-next-line no-unused-vars
import {initializeApp} from 'firebase/app'
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth'
import {getStorage} from 'firebase/storage'

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

// Initialize Firebase
const app = initializeApp(firebaseConfig)

//Firebase storage reference for uploading to Firebase
const storage = getStorage(app)
export default storage
export const auth = getAuth(app)

//signs out the user
export const userSignOut = async () => {
  signOut(auth)
    .then(() => {
      alert('You have been signed out')
    })
    .catch((e) => {
      console.error(e)
    })
}

//always checks to see if user is still signed in
onAuthStateChanged(auth, (user) => {
  //if user is signed in
  if (user) {
    //alert('You signed In')
  } else {
    //not signed in
  }
})
