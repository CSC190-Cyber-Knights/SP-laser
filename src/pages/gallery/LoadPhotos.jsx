import {Title} from '../../components/layout/Title.jsx'
import {useParams} from 'react-router-dom'
import ImageGrid from '../../components/layout/ImageGrid.jsx'
import Modal from '../../components/ui/Modal.jsx'
import {useState} from 'react'

const LoadPhotos = () => {
  const {category} = useParams()
  console.log(category)
  const [image, setImage] = useState(null)
  return (
    <div>
      <Title hero={category} />
      <ImageGrid setSelectedImg={setImage} categoryCollection={'images'} />
      {image && <Modal selectedImg={image} setSelectedImg={setImage} />}
    </div>
  )
}

export default LoadPhotos
