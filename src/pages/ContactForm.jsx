
import {GiLaserPrecision} from 'react-icons/gi';
import {useState} from 'react';
import emailjs from '@emailjs/browser';
//Import the functions you need from the SDKs you need
// eslint-disable-next-line no-unused-vars
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth";
import {doc, setDoc, addDoc, collection, getFirestore} from "firebase/firestore";

//ContactForm features centered text and boxes, a header and footer, and
//these text boxes should only allow certain characters, the requirement different for each

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
        file:'',
    });

    const [ file,setFile] = useState(null);
    let validForm = false;

    const handleChange = (e) => { //on a change in textbox, change default or previous values to values in textbox
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

        // update the firestore database. File will not be loaded to the data base
        const docRef=await addDoc(collection(db, "orders"), formData);


        // Send the email with file attachment
        var sForm = document.getElementById("orderForm");

        // check if valid form to send
        if (validForm === true){
        // the ID used are based anishrajah personal paid emailjs account
        emailjs.sendForm('service_ywhri5k', 'template_i2wvm7j',sForm, 'wme-Hao43E-l4SCEG' )//send to email result of success and text or error

            .then ((result) => {
                console.log("Success", result.status, result.text);

            }, (error) => {
                console.log("FAILED", error);
            });
        }

        function resetForm($form) {
            $form.find('input:file').val('');
        }
        //resetForm($('#orderForm'));
        document.getElementById('file').value = null;

//document.getElementById('ContactForm').addEventListener(onsubmit().button, validateForm);

        setFormData({
            firstName: '',
            lastName: '',
            userEmail: '',
            userPhone: '',
            orderDescription: '',
            file:'',
        });
        console.log('Order submitted successfully!');
    };
    const validateEmails = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    function validateEmail(emailString) {
        const regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;//regex holds what is allowed or not for emails
        const result = emailString.replace(/\s/g, "").split(/,|;/);//puts emailstring into a readable format to test
        //   alert("val email")
        for(let i = 0; i < result.length; i++) {//run through each letter
            if(!regex.test(result[i])) {//if email doesnt follow what set in regex, sends alert and return false email
                alert("Invalid email");
                validForm = false;
                return false;
            }
        }
        return true;
    }
    function validateName(nameString) {
        //       alert("val name")
        if (!/^[a-zA-Z]*$/g.test(nameString)) {//test if name doesn't follow upper or lower case letters, alerts and returns false
            alert("Invalid character in name");
            validForm = false;
            return false;
        } else{
            return true;
        }
    }
    function validatePhoneNumber(input_str)
    {
        //          alert("val pn")
        const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;//regex holds numbers and certain special characters that one would use in emails; (, ), and -
        if (regex.test(input_str)){
            return true;
        } else{
            alert("Invalid phone number");
            validForm = false;
            return false;
        }
    }
    const validateForm = (e) => { //run through each entered value into functions above
        //      alert("val event")
        const phone = document.getElementById('userPhone').value;
        const fName = document.getElementById('firstName').value;
        const lName = document.getElementById('lastName').value;
        const email = document.getElementById('userEmail').value;
        validForm = true;
        validateName(fName);
        validateName(lName);
        validateEmail(email);
        validatePhoneNumber(phone);
    }

    return ( //put into sendable form these elements below, as well as displaying them onto the site
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
                id="orderForm"
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
                            name="firstName"
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
                            name="lastName"
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
                        name="userEmail"
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
                        name="userPhone"
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
                        name="orderDescription"
                        className="shadow rounded-lg border-slate-300 bg-neutral-100 p-1.5"
                        rows="5" // Adjusted for better default size
                        placeholder="Provide a detailed description..."
                        value={formData.orderDescription}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        accept="/image/*" />
                </div>

                <div>
                    <input
                        type ="hidden"
                        id="to_name"
                        name="to_name"
                        value = "cyberknightslaser@outlook.com"
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
