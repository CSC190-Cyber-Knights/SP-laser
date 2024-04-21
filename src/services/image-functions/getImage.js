import {getDownloadURL, getStorage, list, listAll, ref} from 'firebase/storage'

const db = getStorage()
const rootImageFolder = ref(db, 'images/')

export default async function RetrieveThumbnails() {
  try {
    const imageFolderList = await listAll(rootImageFolder)
    const thumbnailImages = []

    for (let i = 0; i < imageFolderList.prefixes.length; i++) {
      const subFolderRef = imageFolderList.prefixes[i]
      const category = subFolderRef.name.replace(/_/g, ' ')
      const result = await list(subFolderRef, {maxResults: 1})
      const image = result.items[0]
      const url = await getDownloadURL(image)
      thumbnailImages.push({title: category, url: url, alt: category})
    }
    return thumbnailImages
  } catch (error) {
    console.error('Error fetching image reference(s): ', error)
    throw error
  }
}

// make a function to retrieve all photos from a subfolder in firebase storage

export {RetrieveThumbnails, rootImageFolder}
