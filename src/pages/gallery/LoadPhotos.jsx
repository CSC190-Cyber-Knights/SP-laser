import PhotoAlbum from 'react-photo-album'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {getSubDirImages} from '../../services/image-functions/getSubDirImages.js'

const LoadPhotos = () => {
  const {itemId} = useParams()
  const [selected, setSelected] = useState('')
  const [images, setImages] = useState([])
  const [lightBox, setLightBox] = useState(false)

  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await getSubDirImages({dir: itemId})
      setImages(res)
    }
    fetchPhotos().finally(() => console.log('Images fetched'))
  }, [itemId])

  //show image in lightbox
  const showImage = (img) => {
    setSelected(img)
    setLightBox(true)
  }

  //hide lightbox
  const hideLightBox = () => {
    setLightBox(false)
  }

  const showNext = (e) => {
    e.stopPropagation()
    let cur = images.indexOf(selected)
    if (cur < images.length - 1) {
      setSelected(images[cur + 1])
    } else {
      let next = images[cur + 1]
      setLightBox(next)
    }
  }

  const showPrev = (e) => {
    e.stopPropagation()
    let cur = images.indexOf(selected)
    if (cur > 0) {
      setSelected(images[cur - 1])
    } else {
      let prev = images[cur - 1]
      setLightBox(prev)
    }
  }

  return <div>{}</div>
}

export default LoadPhotos
