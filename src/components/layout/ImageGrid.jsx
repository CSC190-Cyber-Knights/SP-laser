import {useEffect, useState} from 'react'
import Loading from '../ui/Loading.jsx'
import {getImages} from '../../firebase/libs/fetch.js'
import {Photo} from '../ui/media/Photo.jsx'

export const ImageGrid = ({setSelectedImg, id}) => {
  console.log('ImageGrid id:', id)
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getImages(id).then((images) => {
      setImages(images)
      setLoading(false)
      console.log('ImageGrid images:', images)
    })
  }, [id])
  //set loading animation if docs is empty
  if (loading) {
    return <Loading />
  }
  return (
    <div className={'flex h-screen min-h-fit w-full items-start justify-center px-2 py-3'}>
      <div className={'min-h-fit max-w-screen-lg'}>
        <div className={'grid grid-flow-dense grid-cols-2 grid-rows-2 gap-2 md:grid-cols-3 lg:grid-cols-5'}>
          {images.map((doc, index) => (
            <div key={index}>
              <Photo src={doc.url} alt={`${doc.name}_${id}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageGrid
