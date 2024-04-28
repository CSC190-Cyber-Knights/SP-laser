//signs out the user
import {onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {auth} from '../config.js'

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
