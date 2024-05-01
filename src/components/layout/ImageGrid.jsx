import {useEffect, useState} from 'react'
import Loading from '../ui/Loading.jsx'
import {getImages} from '../../firebase/libs/fetch.js'
import {Photo} from '../ui/media/Photo.jsx'

export const ImageGrid = ({onImageClick, id}) => {
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
    return (
      <>
        <div className={'flex min-h-screen w-screen items-center'}>
          <Loading />
        </div>
      </>
    )
  }
  return (
    <div className={'flex min-h-fit w-full items-start justify-center px-2 py-3'}>
      <div className={'grid h-fit grid-flow-dense grid-cols-2 grid-rows-2 gap-2 py-6 md:grid-cols-3 lg:grid-cols-5'}>
        <div className={'min-h-fit max-w-screen-lg'}>
          {images.map((doc, index) => (
            <div key={index} onClick={() => onImageClick(doc.url)}>
              <Photo src={doc.url} alt={`${doc.name}_${id}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageGrid
