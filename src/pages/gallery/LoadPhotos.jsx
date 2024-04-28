import {useParams} from 'react-router-dom'
import Title from '../../components/layout/Title.jsx'
import ImageGrid from '../../components/layout/ImageGrid.jsx'
import Modal from '../../components/ui/Modal.jsx'
import {useState} from 'react'

const LoadPhotos = () => {
  const {itemId} = useParams()
  console.log('LoadPhotos id:', itemId)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageEvent = (imageUrl) => {
    setSelectedImage(imageUrl)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className={'flex min-h-screen w-full flex-col p-0'}>
      <Title hero={itemId} />
      {selectedImage && <Modal selectedImg={selectedImage} onClose={handleCloseModal} />}
      <ImageGrid onImageClick={handleImageEvent} id={itemId} />
    </div>
  )
}

export default LoadPhotos
