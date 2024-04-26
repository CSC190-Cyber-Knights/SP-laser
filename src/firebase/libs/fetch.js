import {collection, query, limit, getDocs} from 'firebase/firestore'
import {projectFireStore} from '../config.js'

const db = projectFireStore
const getRef = (colName) => collection(db, colName)

/**
 * Retrieves an array of tags from the Firestore 'tags' collection.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of tags.
 * @throws {Error} If an error occurs while fetching the tags.
 */
export const getTags = async () => {
  let tags = []
  try {
    const tagsSnapshot = await getDocs(getRef('tags'))
    tagsSnapshot.forEach((document) => {
      tags.push(document.data())
    })
    return tags.flat()
  } catch (error) {
    console.error('Error fetching tags:', error)
  }
}

/**
 * Retrieves thumbnails for each tag from Firestore collections.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing the thumbnails and tags.
 * @throws {Error} If an error occurs while fetching the thumbnails.
 */
export const getThumbnails = async () => {
  const tags = await getTags()
  let lsDocs = []
  for (const tag of tags) {
    const colName = `images/categories/${tag.name}`
    const q = await query(getRef(colName), limit(4))
    const imagesSnapshot = await getDocs(q)
    lsDocs[tag.name] = []
    imagesSnapshot.forEach((document) => {
      lsDocs[tag.name].push(document.data())
    })
  }
  console.log(lsDocs)
  return {lsDocs, tags}
}

/**
 * Retrieves all images from a Firestore collection based on the provided tag.
 *
 * @param {string} tag - The tag used to identify the collection.
 * @returns {Promise<Array>} A promise that resolves to an array of image documents.
 * @throws {Error} If an error occurs while fetching the images.
 */
export const getImages = async (tag) => {
  const docs = []
  const colName = `images/categories/${tag}`
  const collectionRef = collection(db, colName)
  try {
    const imagesSnapshot = await getDocs(collectionRef)
    imagesSnapshot.forEach((document) => {
      console.log(document.data())
      docs.push(document.data())
    })
    return docs
  } catch (error) {
    console.error('Error fetching images:', error)
  }
}
