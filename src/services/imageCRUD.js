/*

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
import {getStorage, ref, uploadBytes, uploadBytesResumable} from 'firebase/storage'
import {v4} from 'uuid'

import Compressor from 'compressorjs'
/**
 * image upload function, designed to be used in any function, takes in n files & compresses the files
 */
const imageUpload = async (files, catagory) => {
  const storage = getStorage()
  // files are asynchronously uploaded to the firebase server, but they are compressed upon upload
  for (const file of files) {
    // filename has a 'cmp' tag to notify user the file is compressed
    const imageRef = ref(storage, `images/${file.name + v4()}`)
    await new Promise((resolve, reject) => {
      // compressor information settings, this is how we reduce the file size
      new Compressor(file, {
        quality: 0.8,
        retainExif: false,
        maxWidth: 1920,
        maxHeight: 1080,
        resize: 'none',
        convertSize: 5000000,
        convertTypes: ['image/png', 'image/webp'],
        mimeType: 'image/webp',
        checkOrientation: true,
        success: async (result) => {
          try {
            const uploadTask = await uploadBytesResumable(imageRef, result)
            // comparing the new and old file sizing
            console.log(`Original size: ${file.size}`)
            console.log(`Compressed size: ${result.size}`)
            resolve()
          } catch (e) {
            // important to show the error if there is one, we should probably add alerts to this
            console.error(`Upload failed for ${file.name}:`, e)
            reject(e)
          }
        },
        error: (error) => {
          // if the compression fails, let the user know
          console.error(`Compression failed for ${file.name}`, error)
          reject(error)
        },
      })
    })
  }
}

export {imageUpload}
