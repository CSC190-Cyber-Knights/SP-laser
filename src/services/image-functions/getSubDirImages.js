// add error handling to the getSubDir function
import {getDownloadURL, getStorage, list, listAll, ref} from 'firebase/storage'
import {rootImageFolder} from './getImage.js'
import {useParams} from 'react-router-dom'

async function getSubDirImages({dir}) {
  try {
    const imageFolderList = await list(rootImageFolder)
    const images = []

    for (let i = 0; i < imageFolderList.prefixes.length; i++) {
      const subFolderRef = imageFolderList.prefixes[i]
      const category = subFolderRef.name.replace(/_/g, ' ')
      const result = await list(subFolderRef)
      const image = result.items[0]
      const url = await getDownloadURL(image)
      images.push({title: category, url: url, alt: category})
    }
    return images
  } catch (error) {
    console.error('Error fetching image reference(s): ', error)
    throw error
  }
}

export {getSubDirImages}
