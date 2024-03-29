import {GoogleButton} from 'react-google-button'
import {userSignIn, userSignOut} from '../../services/firebase.js'
import {useState} from 'react'
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'

{
  /*SignUp features a google click login if already logged into google, and a signout*/
}

export const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = getAuth()
  const signUp = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(userCredential)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(error)
      })
  }
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div>
        <h1 className="py-8 text-center text-3xl font-bold">Admin Sign Up</h1>
        <form onSubmit={signUp}>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>

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
export default SignUp
