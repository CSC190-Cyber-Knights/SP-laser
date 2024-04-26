import {useEffect, useState} from 'react'
import {projectFireStore, projectStorage} from '../firebase/config'
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage'
import {addDoc, collection} from 'firebase/firestore'
import Compressor from 'compressorjs'
import {saveFirestore} from '../firebase/libs/upload.js'

/**
 * function to handle the storage of images in the firebase storage
 *
 * @param file
 * @param id
 * @returns {{progress: number, error: string, url: string}}
 */
export const useStorage = (file, id) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    const storageRef = ref(projectStorage, `${id}/${file.name}`)
    // whenever the progress of the upload changes, update the progress state
    uploadBytesResumable(storageRef, file).on(
      'state_changed',
      (snap) => {
        let percent = (snap.bytesTransferred / snap.totalBytes) * 100
        setProgress(percent)
      },
      (err) => {
        setError(err)
      },
      async () => {
        console.log(url, id)
        try {
          const src = await getDownloadURL(storageRef)
          await saveFirestore({data: {id, src, file}})
        } catch (e) {
          console.error(e)
          setError('Error handling image upload')
        }
        setUrl(url)
      }
    )
  }, [id, file, url])

  return {progress, url, error}
}

export default useStorage
