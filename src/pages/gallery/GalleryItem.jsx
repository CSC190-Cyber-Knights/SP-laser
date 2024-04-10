import {useParams} from 'react-router-dom'
import {getSubDir} from '../../services/image-functions/getPhotos.js'
import {useEffect, useState} from 'react'
import LoadPhotos from './LoadPhotos.jsx'
// the type of product shown will be a result of the passed prop itemID
// this is where the pagination will happen
export const GalleryItem = () => {
  const {itemId} = useParams()
  const [images, setImages] = useState([])
  const [nextPageToken, setNextPageToken] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchImages(itemId)
  }, [itemId])

  const fetchNextPage = () => {
    if (nextPageToken && !loading) {
      fetchImages(itemId, nextPageToken)
    }
  }

  const fetchImages = async (itemId, token = null) => {
    // if loading or there is no item id, return the function
    if (!itemId || loading) return
    setLoading(true)
    const res = await getSubDir(itemId, token)
    if (res) {
      setImages((prevImages) => [...prevImages, ...res.items])
      setNextPageToken(res.nextPageToken)
      console.log('Fetched images:', res.items, 'Next page token:', res.nextPageToken)
    } else {
      console.log('no images were found, there was an error')
    }
    setLoading(false)
  }

  return (
    <div>
      <LoadPhotos photos={images} nextPageToken={nextPageToken} fetchNextPage={fetchNextPage} />
      {loading && <p>loading...</p>}
    </div>
  )
}
export default GalleryItem
