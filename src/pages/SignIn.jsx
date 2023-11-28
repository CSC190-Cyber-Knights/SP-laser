import {GoogleButton} from 'react-google-button';
import {userSignIn, userSignOut} from "../firebase"

export const SignIn = () => {
  return (<div>
        <h1 className='text-center text-3xl font-bold py-8'>This is going to be the Sign In Page</h1>
        <GoogleButton onClick={() => {
          userSignIn()
        }}/>
        <button onClick={() => {
          userSignOut()
        }}>
          This is a button to sign out
        </button>
      </div>
  );
};
/*
//const signInButton = document.getElementById("signInButton")
//const signOutButton = document.getElementById("signOutButton")


signInButton.addEventListener('click', userSignIn)
signOutButton.addEventListener('click',userSignOut)
/*/
export default SignIn;