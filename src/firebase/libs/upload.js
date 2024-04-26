import {collection, doc, setDoc, serverTimestamp} from 'firebase/firestore'
import {getDownloadURL, uploadBytesResumable} from 'firebase/storage'
import {projectFireStore, projectStorage} from '../config.js'
import {ref} from 'firebase/storage'
import imageCompression from 'browser-image-compression'
import Compressor from 'compressorjs'

const db = projectFireStore

/**
 * Saves a tag to Firestore.
 *
 * @async
 * @param {string} tag - The tag to be saved.
 * @returns {Promise<void>}
 * @throws {Error} If an error occurs while saving the tag.
 *
 * @example
 * await saveTag('nature');
 * // Logs: ✅ Tag Saved nature
 *
 * @example
 * await saveTag('');
 * // Throws an error: There was an error saving the tag
 *
 * @description
 * This function saves a tag to the Firestore database. It creates a document reference
 * in the 'tags' collection using the provided tag as the document ID.
 */
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

/**
 * Writes image data to Firestore.
 *
 * @param {string} id - The ID of the image.
 * @param {string} name - The name of the image.
 * @param {string} src - The URL of the image.
 */
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

/**
 * Saves image data to Firestore.
 *
 * @param {Object} data - The image data to be saved.
 * @param {string} data.id - The ID of the image.
 * @param {string} data.url - The URL of the image.
 * @param {string} data.fileName - The name of the image file.
 */
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
 * Compresses an image file.
 *
 * @param {File} file - The image file to be compressed.
 * @returns {Promise<File>} A promise that resolves to the compressed image file.
 */
const compressImage = async (file) => {
  if (!file) {
    throw new Error('No file provided')
  }
  const options = {
    maxSizeMB: 1, // Adjust the maximum size as needed
    maxWidthOrHeight: 1920, // Adjust the maximum width or height as needed
    useWebWorker: true, // Use a web worker for better performance
  }

  try {
    const compressedFile = await imageCompression(file, options)
    console.log('Image compressed successfully')
    return compressedFile
  } catch (error) {
    console.error('Error compressing image:', error)
    throw error
  }
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
