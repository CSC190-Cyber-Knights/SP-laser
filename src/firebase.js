import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRGD42qYfcoahaW-THL9ZrkDP1GV9kbsQ",
    authDomain: "laserengraving-9a35a.firebaseapp.com",
    projectId: "laserengraving-9a35a",
    storageBucket: "laserengraving-9a35a.appspot.com",
    messagingSenderId: "846011134281",
    appId: "1:846011134281:web:9c108178f7f7ad45fcea98",
    measurementId: "G-6LSR5R581F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);