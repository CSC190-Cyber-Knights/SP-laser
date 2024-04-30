import {useState, useEffect} from 'react'
import {getImages} from '../firebase/libs/fetch.js'
import {motion} from 'framer-motion'
import {Photo} from './ui/media/Photo.jsx'
import {deleteDocument} from '../firebase/libs/delete.js'

export const DocumentList = ({tag = ''}) => {
  const [images, setImages] = useState([])
  const [selectedImages, setSelectedImages] = useState([])
  const [imageCache, setImageCache] = useState({})
  const [deletionStatus, setDeletionStatus] = useState({})
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const fetchImages = async () => {
      if (imageCache[tag]) {
        setImages(imageCache[tag])
        console.log(`images from cache ${tag} loaded`)
        return
      } else {
        // fetch images from firestore
        const fetchedImages = await getImages(tag)
        // set the images in the state
        setImages(fetchedImages)
        // update the cache
        setImageCache((prevCache) => ({...prevCache, [tag]: fetchedImages}))
      }
    }
    fetchImages().then((r) => console.log('images loaded'))
  }, [tag, imageCache])

  const confirmDelete = async () => {
    setDeletionStatus({})
    const deletionPromises = selectedImages.map(async (selectedImage) => {
      try {
        await deleteDocument(tag, selectedImage)
        setDeletionStatus((prevStatus) => ({
          ...prevStatus,
          [selectedImage.id]: 'success',
        }))
      } catch (error) {
        setDeletionStatus((prevStatus) => ({
          ...prevStatus,
          [selectedImage.id]: 'error',
        }))
      }
    })

    await Promise.all(deletionPromises)
    setImages((prevImages) =>
      prevImages.filter((img) => !selectedImages.some((selectedImage) => selectedImage.id === img.id))
    )
    setImageCache((prevCache) => ({
      ...prevCache,
      [tag]: prevCache[tag].filter((img) => !selectedImages.some((selectedImage) => selectedImage.id === img.id)),
    }))
    setSelectedImages([])
    setShowModal(false)
  }

  const handleImageClick = (image) => {
    setSelectedImages((prevSelectedImages) => {
      if (prevSelectedImages.some((selectedImage) => selectedImage.id === image.id)) {
        return prevSelectedImages.filter((selectedImage) => selectedImage.id !== image.id)
      } else {
        return [...prevSelectedImages, image]
      }
    })
  }
  const cancelDelete = () => {
    setShowModal(false)
  }

  const handleDelete = () => {
    if (selectedImages.length > 0) {
      setShowModal(true)
    }
  }

  const renderImages = () => {
    return images.map((image) => (
      <div key={image.id}>
        <div onClick={() => handleImageClick(image)}>
          <div
            className={`relative cursor-pointer rounded-md p-2
        ${selectedImages.some((selectedImage) => selectedImage.id === image.id) ? 'border-4 border-red-500' : 'border-none'}
        `}
          >
            <Photo src={image.url} alt={image.name} />
          </div>
          <h2 className="overflow-hidden text-nowrap text-sm text-neutral-500">{image.name}</h2>
        </div>
      </div>
    ))
  }

  return (
    <div className="w-100 flex h-fit flex-col gap-2">
      {showModal && (
        <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded bg-white p-4">
            <h2 className="mb-4 text-xl">Confirm Deletion</h2>
            <p>Are you sure you want to delete the selected images?</p>
            <ul className="mb-4">
              {selectedImages.map((selectedImage) => (
                <li key={selectedImage.id}>
                  {selectedImage.name} - Status: {deletionStatus[selectedImage.id] || 'pending'}
                </li>
              ))}
            </ul>
            <div>
              <button className="mr-2 rounded bg-red-500 px-4 py-2 text-white" onClick={confirmDelete}>
                Confirm
              </button>
              <button className="rounded bg-gray-300 px-4 py-2 text-black" onClick={cancelDelete}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <h1 className={'p-2 text-xl capitalize'}>
        Images in <span className={'text font-semibold text-blue-600'}>{tag}</span> Collection
      </h1>
      {selectedImages.length > 0 && (
        <motion.button
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          className={'rounded-lg bg-red-500 px-2 py-1 font-semibold text-white hover:bg-red-700'}
          onClick={async () => {
            await handleDelete()
          }}
        >
          confirm
        </motion.button>
      )}

      <div
        className="
    grid
    grid-cols-2
    grid-rows-3
    gap-0
    sm:grid-cols-3
    sm:grid-rows-4
    md:grid-cols-5

    md:grid-rows-5 "
      >
        {renderImages()}
      </div>
    </div>
  )
}
