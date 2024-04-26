import {collection, query, limit, getDocs} from 'firebase/firestore'
import {projectFireStore} from '../config.js'

const db = projectFireStore
const getRef = (colName) => collection(db, colName)

// Initialize Firestore (Make sure your Firebase config is set up)
export async function getFirstImage(tag) {
  const colName = `images/categories/${tag}`
  const firstImageQuery = query(getRef(colName), limit(1))
  try {
    const querySnapshot = await getDocs(firstImageQuery)
    if (!querySnapshot.empty) {
      const firstDoc = querySnapshot.docs[0]
      console.log('First image data:', firstDoc.data())
    } else {
      console.log('No images found in collection.')
    }
  } catch (error) {
    console.error('Error fetching first image:', error)
  }
}

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
