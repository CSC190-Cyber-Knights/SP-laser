//Import the functions you need from the SDKs you need
// eslint-disable-next-line no-unused-vars
import {initializeApp} from 'firebase/app'
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth'
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
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
const provider = new GoogleAuthProvider()

//function that prompts the user with a popup to sign in via google
export const userSignIn = async () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      //results from google
      const user = result.user.displayName
      const email = result.user.email
      console.log(user, email)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMsg = error.message
      console.error(errorCode, errorMsg)
    })
}

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
    alert('You signed In')
  } else {
    //not signed in
  }
})
