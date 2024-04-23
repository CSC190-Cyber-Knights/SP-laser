import {useState, useEffect, useCallback} from 'react'
import {projectFireStore, projectStorage} from '../firebase/config'
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage'
import {addDoc, collection} from 'firebase/firestore'

// make a type definition for project FireStore and project storage

export const useStorage = (file, category) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  const saveToFireStore = useCallback(
    async (referenceCol, url) => {
      const createdAt = Date.now()
      try {
        await addDoc(referenceCol, {
          url,
          createdAt,
          category: category,
        })
        console.log(category)
      } catch (e) {
        alert('There was an error uploading your file')
        console.log(e)
      }
    },
    [category]
  )

  useEffect(() => {
    // references
    const storageRef = ref(projectStorage, `${category}/${file.name}`)
    // firebase will create a collection called images if it doesn't exist already
    const collectionRef = collection(projectFireStore, 'images')

    // whenever the progress of the upload changes, update the progress state
    uploadBytesResumable(storageRef, file).on(
      'state_changed',
      (snap) => {
        let percent = (snap.bytesTransferred / snap.totalBytes) * 100
        setProgress(percent)
      },
      (err) => {
        // if there is an error, set the error state it will be returned to the component
        setError(err)
      },
      async () => {
        // get the url of the image that  has just been uploaded
        const url = await getDownloadURL(storageRef)
        // add the url and the date the image was uploaded to the collection
        try {
          await saveToFireStore(collectionRef, url)
        } catch (e) {
          console.log(e)
          setError('Error handling image upload')
        }
        setUrl(url)
      }
    )
  }, [category, file, saveToFireStore])

  return {progress, url, error}
}

export default useStorage
