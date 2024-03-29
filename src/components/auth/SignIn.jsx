import {GoogleButton} from 'react-google-button'
import {userSignIn, userSignOut} from '../../services/firebase.js'
import {useState} from 'react'
import {signInWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail} from 'firebase/auth'

{
  /*Signin features a google click login if already logged into google, and a signout*/
}

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = getAuth()

  const SignIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        console.log(error)
        console.log(error.message)
      })
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties

      const uid = user.uid
      // ...
    } else {
      // User is signed out
    }
  })

  function userStatus() {}

  function handlePasswordReset() {
    const email = prompt('Please enter your email')
    sendPasswordResetEmail(auth, email)
    alert('Email Sent! Check you Inbox.')
  }

  return (
    <div className="flex min-h-screen flex-col items-center">
      <div>
        <h1 className="py-8 text-center text-3xl font-bold">Admin Sign In</h1>
        <form onSubmit={SignIn}>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <div>
            <button type="submit">Sign In</button>
          </div>
        </form>
      </div>

      <p onClick={handlePasswordReset} className="forgot-password">
        Forgot Password?
      </p>

      {/*allow google account log in*/}
      <GoogleButton
        onClick={() => {
          userSignIn()
        }}
      />
      <button
        onClick={() => {
          userSignOut()
        }}
      >
        Sign Out
      </button>
    </div>
  )
}
/*
//const signInButton = document.getElementById("signInButton")
//const signOutButton = document.getElementById("signOutButton")


signInButton.addEventListener('click', userSignIn)
signOutButton.addEventListener('click',userSignOut)
/*/
export default SignIn
