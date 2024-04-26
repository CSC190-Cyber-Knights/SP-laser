import {useParams} from 'react-router-dom'
import Title from '../../components/layout/Title.jsx'
import ImageGrid from '../../components/layout/ImageGrid.jsx'
import Modal from '../../components/ui/Modal.jsx'
import {useState} from 'react'

const LoadPhotos = () => {
  const {itemId} = useParams()
  console.log('LoadPhotos id:', itemId)
  const [image, setImage] = useState(null)
  return (
    <div className={'flex min-h-screen w-full flex-col p-0'}>
      <Title hero={itemId} />
      <ImageGrid setSelectedImg={setImage} id={itemId} />
      {image && <Modal selectedImg={image} setSelectedImg={setImage} />}
    </div>
  )
}

export default LoadPhotos
