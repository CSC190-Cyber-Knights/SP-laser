import {GoogleButton} from 'react-google-button';
import {userSignIn, userSignOut} from '../services/firebase.js';

{
  /*Signin features a google click login if already logged into google, and a signout*/
}

export const SignIn = () => {
  return (
    <div>
      <h1 className="py-8 text-center text-3xl font-bold">This is going to be the Sign In Page</h1>
      {/*allow google account log in*/}
      <GoogleButton
        onClick={() => {
          userSignIn();
        }}
      />
      <button
        onClick={() => {
          userSignOut();
        }}
      >
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
