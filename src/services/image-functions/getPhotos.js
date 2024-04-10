// eslint-disable-next-line no-unused-vars
import {getStorage, ref, getDownloadURL, list, listAll, uploadBytesResumable, deleteObject} from 'firebase/storage'

const IMAGE_LIMIT = 8
const storage = getStorage()
const storageReference = ref(storage, 'images/')

export const getSubDir = async (itemId, nextPageToken = null) => {
  // control how many items per page
  const options = {maxResults: IMAGE_LIMIT}
  try {
    if (nextPageToken) {
      options.pageToken = nextPageToken
    }
    const imgDirs = await list(storageReference, options)
    // return a Storage reference that matches our ItemId we want to list
    const itemDirRef = imgDirs.prefixes.find((subFolderReference) => subFolderReference.name === itemId) || null

    if (itemDirRef) {
      const lsImages = await list(itemDirRef, options)
      const urlPromises = lsImages.items.map((imgRef) => getDownloadURL(ref(storage, imgRef.fullPath)))
      const imgUrls = (await Promise.allSettled(urlPromises))
        .filter((res) => res.status === 'fulfilled')
        .map((result) => result.value)
      console.log(imgUrls)
      return {
        items: imgUrls,
        nextPageToken: lsImages.nextPageToken,
      }
    } else {
      return null
    }
  } catch (e) {
    console.error(e)
    return null
  }
}

// using the limittolast method from the firestore sdk
