import {collection, doc, setDoc, serverTimestamp} from 'firebase/firestore'
import {getDownloadURL, uploadBytesResumable} from 'firebase/storage'
import {projectFireStore, projectStorage} from '../config.js'
import {ref} from 'firebase/storage'
import Compressor from 'compressorjs'

const db = projectFireStore

export const saveTag = async (tag) => {
  const tagRef = doc(db, 'tags', tag)
  try {
    await setDoc(tagRef, {
      name: tag,
      reference: `images/categories/${tag}`,
    })
    console.log(' ✅ Tag Saved', tagRef.id)
  } catch (e) {
    console.error(`There was an error saving the tag`, e)
  }
}

const writeFirestore = async (id, name, src) => {
  const colRef = doc(collection(db, 'images', 'categories', id))
  try {
    await setDoc(colRef, {
      name: `${name}`,
      url: src,
      createdAt: serverTimestamp(),
    })
  } catch (e) {
    console.error(`Error writing to firestore`, e)
  }
}

export const saveFirestore = async ({data}) => {
  const {id, url, fileName} = data
  try {
    await Promise.all([writeFirestore(id, fileName, url), saveTag(id)])
    console.log('Data saved to firestore')
  } catch (error) {
    console.error('Error occurred uploading your file', error)
  }
}

/**
 * compressImage takes in a file and compresses it
 *
 * @param {File} file - the file to compress
 */
const compressImage = async (file) => {
  if (!file) {
    throw new Error('No file provided')
  }
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: 0.6,
      maxWidth: 1920,
      maxHeight: 1080,
      success: (result) => {
        const reader = new FileReader()
        reader.onloadend = () => {
          const blob = new Blob([reader.result], {type: file.type})
          resolve(blob)
        }
        reader.onerror = reject
        reader.readAsArrayBuffer(result)
      },
      error: reject,
    })
  })
}
/**
 * Takes in a file and an id, compresses the file and
 * uploads it to the firebase storage compressed
 *
 * @param {File} file
 * @param {string} id
 **/
export const saveStorage = async (file, id) => {
  try {
    const storageRef = ref(projectStorage, `photos/${id}/${file.name}`)
    const compressedFile = await compressImage(file).then((blob) => new File([blob], file.name, {type: file.type}))
    await uploadBytesResumable(storageRef, compressedFile, {contentType: file.type})
    const url = await getDownloadURL(storageRef)
    await saveFirestore({data: {id: id, url: url, fileName: file.name}})
  } catch (error) {
    console.error('Error occurred uploading file', error)
  }
}
