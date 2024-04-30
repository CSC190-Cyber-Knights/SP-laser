import {fireStorage} from '../config.js'
import {ref, deleteObject, getDownloadURL} from 'firebase/storage'
import {db} from '../config.js'
import {doc, deleteDoc, getDocs, getDoc} from 'firebase/firestore'

export const deleteDocument = async (tag, image) => {
  // db reference, directory path, object id
  if (!tag || !image) {
    console.error('tag or id is not defined')
    throw new Error('tag or id is not defined')
  }
  try {
    const docRef = doc(db, 'images', 'categories', tag, image.id)
    console.log(`document reference :  ${docRef}`)
    console.log(`tags/categories/${tag}`, id)
    try {
      await deleteDoc(docRef)
    } catch (e) {
      console.error('Error deleting document deleteDoc function:', e)
    }
  } catch (error) {
    console.error('Error deleting document:', error)
  }
}

export const deleteFirestore = async (tag, id) => {
  // deleting the image from firestore database
  const docRef = doc(db, `images/categories/${tag}`, id)
  try {
    const docSnapshot = await getDoc(docRef)
    console.log(docSnapshot)
    if (docSnapshot.exists()) {
      console.error('Document not found')
      const imageData = docSnapshot.data()
      console.log('image data ', imageData)
      console.log('photos/' + tag + '/' + id)
      const imgURL = await getDownloadURL(ref(fireStorage, 'photos/' + tag + '/' + id.name))
      console.log(imgURL)
      const imageRef = ref(fireStorage, imgURL)
      await deleteObject(imageRef).then(() => {
        console.log('Image deleted successfully')
      })
      await deleteDoc(docRef).then(() => {
        console.log('Document successfully deleted')
      })
    }
  } catch (error) {
    console.error('Error deleting document:', error)
  }
}

let id = 'PbrqebXvFJ38DoTMKDbR'
await deleteFirestore('miscellaneous', 'PbrqebXvFJ38DoTMKDbR')
