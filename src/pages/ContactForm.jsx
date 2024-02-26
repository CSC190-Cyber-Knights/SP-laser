
import {GiLaserPrecision} from 'react-icons/gi';
import {useState} from 'react';
import emailjs from '@emailjs/browser';
//Import the functions you need from the SDKs you need
// eslint-disable-next-line no-unused-vars
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth";
import {doc, setDoc, addDoc, collection, getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
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
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export const db = getFirestore(app);
export const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userEmail: '',
        userPhone: '',
        orderDescription: '',
    });

    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // log the submitted form data
        console.log('Submitted Form Data:', formData);
//    onchange = {validateForm};
        const docRef=await addDoc(collection(db, "orders"), formData);

        var fromwhom = formData.firstName + ' ' +formData.lastName+ '    phone: ' + formData.userPhone + '   email: '+ formData.userEmail;
        var templateParams= {
            //from_name:formData.firstName + ' ' +formData.lastName+ '  phone:' + formData.userPhone + 'email:'+ formData.userEmail,
            from_name: fromwhom,
            to_name:'cyberknightslaser@outlook.com',
            message:formData.orderDescription,
        }
        emailjs.send('service_zadrexa', 'template_a0upujx', templateParams, 'Io04H3uOQN5v-GZbf' )
            .then ((result) => {
                console.log("Success", result.status, result.text);

            }, (error) => {
                console.log("FAILED", error);
            });






//document.getElementById('ContactForm').addEventListener(onsubmit().button, validateForm);

        setFormData({
            firstName: '',
            lastName: '',
            userEmail: '',
            userPhone: '',
            orderDescription: '',
        });
        console.log('Order submitted successfully!');
    };
    const validateEmails = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    function validateEmail(emailString) {
        const regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        const result = emailString.replace(/\s/g, "").split(/,|;/);
        //   alert("val email")
        for(let i = 0; i < result.length; i++) {
            if(!regex.test(result[i])) {
                alert("Invalid email");
                return false;
            }
        }
        return true;
    }
    function validateName(nameString) {
        //       alert("val name")
        if (!/^[a-zA-Z]*$/g.test(nameString)) {
            alert("Invalid characters");
            return false;
        } else{
            return true;
        }
    }
    function validatePhoneNumber(input_str)
    {
        //          alert("val pn")
        const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (regex.test(input_str)){
            return true;
        } else{
            alert("Invalid phone number");
            return false;
        }
    }
    const validateForm = (e) => {
        //      alert("val event")
        const phone = document.getElementById('userPhone').value;
        const fName = document.getElementById('firstName').value;
        const lName = document.getElementById('lastName').value;
        const email = document.getElementById('userEmail').value;
        validateName(fName);
        validateName(lName);
        validateEmail(email);
        validatePhoneNumber(phone);
    }

    return (
        <div className="flex flex-col items-center min-h-screen">
            {/* Title Section */}
            <div className="flex flex-col items-center p-8">
                <h1 className="text-5xl font-bold tracking-tight text-neutral-600 flex items-center gap-2">
                    <GiLaserPrecision className="text-red-400"/>
                    Order Form
                </h1>
                <h2 className="text-lg font-light">Let me know what you want to create</h2>
            </div>

            {/* Form Section */}
            <form
                className="flex flex-col w-full max-w-lg p-4 items-start gap-3"
                onSubmit={handleSubmit}
                noValidate
            >
                {/* Name Input Fields */}
                <div className="flex w-full gap-2">
                    <div className="flex flex-col w-full">
                        <label htmlFor="fname" className="text-neutral-600">First Name</label>
                        <input
                            id="firstName"
                            className="shadow rounded-lg border-slate-300 h-12 p-2 bg-neutral-100"
                            type="text"
                            placeholder="John"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="lname" className="text-neutral-600">Last Name</label>
                        <input
                            id="lastName"
                            className="shadow rounded-lg border-slate-300 h-12 p-2 bg-neutral-100"
                            type="text"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Email Input Field */}
                <div className="flex flex-col w-full">
                    <label htmlFor="user-email" className="text-neutral-600">Email</label>
                    <input
                        id="userEmail"
                        className="shadow rounded-lg border-slate-300 h-12 p-2 bg-neutral-100"
                        type="email" // Changed to 'email' type for proper validation
                        placeholder="johndoe2022@gmail.com"
                        value={formData.userEmail}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Phone Number Input Field */}
                <div className="flex flex-col w-full">
                    <label htmlFor="user-phone" className="text-neutral-600">Phone Number</label>
                    <input
                        id="userPhone"
                        className="shadow rounded-lg border-slate-300 h-12 p-2 bg-neutral-100 placeholder:italic"
                        type="tel" // Changed to 'tel' type for proper validation
                        placeholder="(###) ###-####"
                        value={formData.userPhone}
                        onChange={handleChange}
                        required

                    />
                </div>

                {/* Description Textarea */}
                <div className="flex flex-col w-full">
                    <label htmlFor="order-description" className="text-neutral-600">Describe It</label>
                    <textarea
                        id="orderDescription"
                        className="shadow rounded-lg border-slate-300 bg-neutral-100 p-1.5"
                        rows="5" // Adjusted for better default size
                        placeholder="Provide a detailed description..."
                        value={formData.orderDescription}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full rounded-lg bg-neutral-800 py-1 text-lg font-light text-neutral-300" onClick={validateForm}>
                    Submit
                </button>
            </form>

        </div>
    );
};
