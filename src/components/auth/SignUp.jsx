import {GoogleButton} from 'react-google-button'
import {userSignIn, userSignOut} from '../../services/firebase.js'
import {useEffect, useState} from 'react'
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification} from 'firebase/auth'
import emailjs from '@emailjs/browser'

{
  /*SignUp features a google click login if already logged into google, and a signout*/
}

//EmailJS credentials
const EmailServiceID = 'service_zadrexa'
const EmailTemplateID = 'template_wi09qe3'
const EmailPublicKey = 'Io04H3uOQN5v-GZbf'

export const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const auth = getAuth()
  const signUp = async (e) => {
    e.preventDefault()
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user
        console.log(userCredential)
        await sendEmailVerification(user)
        console.log('Success')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(error)
      })
  }

  useEffect(() => {
    auth.onAuthStateChanged((userCredential) => {
      const {email, emailVerified} = userCredential
      setUser({email, emailVerified})
    })
  })

  return (
    <div className="flex min-h-screen flex-col items-center" style={{backgroundColor: '#003153'}}>
      <div>
        <h1 className="py-8 text-center text-3xl font-bold" style={{color: '#FFFFFF'}}>
          Admin Sign Up
        </h1>
        <form onSubmit={signUp}>
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
              Sign Up
            </button>
          </div>
        </form>
      </div>

      <div>
        {/*allow google account log in*/}
        <GoogleButton
          onClick={() => {
            userSignIn()
          }}
        />
      </div>

      <div>
        <button
          className=""
          style={{color: '#FFFFFF'}}
          onClick={() => {
            userSignOut()
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}
/* used to check email verifcation
{user && (
      <div>
      <p>{user?.email}
      </p>
      <p>{user?.emailVerified ? "True" : "False"}
      </p>
      </div>
    )}
/*/

/*
//const signInButton = document.getElementById("signInButton")
//const signOutButton = document.getElementById("signOutButton")


signInButton.addEventListener('click', userSignIn)
signOutButton.addEventListener('click',userSignOut)
/*/
export default SignUp
