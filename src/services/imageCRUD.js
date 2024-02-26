/*
import {useState} from "react";
import {storage} from "./firebase.js";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"

// function to import elsewhere to handle uploading images to firebase
function imageUpload() {
    const [file, setFile] = useState("");

// Handle file upload event and update state
    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    const handleUpload = () => {
        if (!file) {
            alert("Please choose an image");
        }

        const storageRef = ref(storage, `/files/${file.name}`);

        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) =>

            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                });
            }
        );
    };
}*/
