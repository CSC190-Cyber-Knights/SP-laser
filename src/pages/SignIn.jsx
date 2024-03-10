import { useState } from 'react';
import { GoogleButton } from 'react-google-button';
import { userSignIn, userSignOut } from '../services/firebase'; // Assuming firebase.js is in the services folder

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === 'email') setEmail(value);
        else if (id === 'password') setPassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Implement email/password sign in using Firebase if needed
        } catch (error) {
            console.error('Error signing in:', error.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await userSignIn(); // Call userSignIn function from firebase.js
            console.log('Admin logged in with Google');
            // Redirect to admin dashboard or perform other actions
        } catch (error) {
            console.error('Error signing in with Google:', error.message);
        }
    };

    const handleSignOut = async () => {
        try {
            await userSignOut(); // Call userSignOut function from firebase.js
            console.log('Admin signed out');
            // Redirect to sign-in page or perform other actions
        } catch (error) {
            console.error('Error signing out:', error.message);
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="flex flex-col items-center p-8">
                <h1 className="text-5xl font-bold tracking-tight text-neutral-600">
                    Admin Login
                </h1>
            </div>
            <form
                className="flex flex-col w-full max-w-md p-4 items-start gap-3"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col w-full">
                    <label htmlFor="username" className="text-neutral-600">Username</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        className="shadow rounded-lg border-slate-300 h-12 p-2 bg-neutral-100"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="password" className="text-neutral-600">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="shadow rounded-lg border-slate-300 h-12 p-2 bg-neutral-100"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="w-full rounded-lg bg-neutral-800 py-1 text-lg font-light text-neutral-300">
                    Sign In
                </button>
            </form>
            <div className="mt-4">
                <GoogleButton onClick={handleGoogleLogin} />
            </div>
            <button onClick={handleSignOut} className="mt-2 rounded-lg bg-red-600 py-1 px-4 text-lg font-light text-white">
                Sign Out
            </button>
        </div>
    );
};

export default SignIn;