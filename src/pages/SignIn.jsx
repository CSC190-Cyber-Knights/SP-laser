import {GoogleButton} from 'react-google-button'
import {useState} from 'react'
import {signInWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail} from 'firebase/auth'
import {userSignOut} from '../services/firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

{
  /*Signin features a google click login if already logged into google, and a signout*/
}


export const SignIn = ({user}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = getAuth()
  const navigate= useNavigate()
  const provider = new GoogleAuthProvider()

  const userSignIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        navigate('/admin')
      })
      .catch((error) => {
        console.log(error)
        console.log(error.message)
      })
  }
  //function that prompts the user with a popup to sign in via Google
const userSignInGoogle = async () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user.displayName
      const email = result.user.email
      console.log(user, email)
      navigate('/admin')
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMsg = error.message
      console.error(errorCode, errorMsg)
    })
}
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      const uid = user.uid
     console.log("signed in")

      // ...
    } else {
      console.log("signed out")
      // User is signed out
    }
  })

  function handlePasswordReset() {
    const email = prompt('Please enter your email')
    sendPasswordResetEmail(auth, email)
    alert('Email Sent! Check you Inbox.')
  }

  return (
    <div className="flex min-h-screen flex-col items-center" style={{backgroundColor: '#003153'}}>
      <div>
        <h1 className="py-8 text-center text-3xl font-bold" style={{color: '#FFFFFF'}}>
          Admin Sign In
        </h1>
        <form onSubmit={userSignIn}>
          <div>
            <div className="flex w-full flex-col">
              <label
                htmlFor="email"
                className="text-neutral-600"
                style={{
                  fontWeight: 'bold',
                  color: '#FFFFFF',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                }}
              >
                Email Address
              </label>
              <input
                className="rounded-lg h-12 border-slate-200 bg-neutral-100 p-2 shadow"
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="flex w-full flex-col">
              <label
                htmlFor="email"
                className="text-neutral-600"
                style={{
                  fontWeight: 'bold',
                  color: '#FFFFFF',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                }}
              >
                Password
              </label>
              <input
                className="rounded-lg h-12 border-slate-300 bg-neutral-100 p-2 shadow"
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="flex w-full flex-col">
            <button className="rounded-lg w-full bg-neutral-800 py-1 text-lg font-light text-neutral-300" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>

      <p
        onClick={handlePasswordReset}
        className="forgot-password"
        style={{
          fontWeight: 'bold',
          color: '#FFFFFF',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        Forgot Password?
      </p>

      {/*allow google account log in*/}
      <GoogleButton
        onClick={() => {
          userSignInGoogle()
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
