import {useState, useEffect} from 'react'
import {projectStorage} from '../firebase/config'

const useStorage = (file) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name)

    // whenever the progress of the upload changes, update the progress state
    storageRef.put(file).on(
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
        const url = await storageRef.getDownloadURL()
        setUrl(url)
      }
    )
  }, [file])

  return {progress, url, error}
}
