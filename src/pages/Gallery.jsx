import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {useEffect, useState} from 'react'
import RetrieveThumbnails from '../services/image-functions/getImage.js'
import {Photo} from '../components/ui/Photo.jsx'

const GalleryPage = () => {
  const [thumbnails, setThumbnails] = useState([])

  useEffect(() => {
    RetrieveThumbnails().then((data) => {
      setThumbnails(data)
      console.log(data)
    })
  }, [])

  return (
    <div>
      <motion.div
        initial={{opacity: 0, scale: 0.9}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.3}}
        className={'m-auto flex h-full w-full pt-10 text-center'}
      >
        <h2 className={'h-full w-full content-center self-center font-sans text-7xl text-imposter_red'}>Gallery</h2>
      </motion.div>

      <section className={'flex min-h-screen w-full flex-col items-center pb-8 font-sans'}>
        <div className={'grid grid-rows-4 gap-4 p-4 sm:grid-cols-2 md:grid-rows-2 md:pt-8'}>
          {thumbnails.map((thumbnail, index) => (
            <Link to={`/gallery/${thumbnail.title}`} key={index} className={'relative block h-80 w-80 overflow-hidden'}>
              <Photo src={thumbnail.url} alt={thumbnail.alt} />
              <div
                className={`absolute inset-0 flex items-center justify-center rounded-[12px]
               bg-black bg-opacity-50 opacity-0 transition duration-300 ease-in-out hover:opacity-100
               `}
              >
                <span className={'text-xl font-bold capitalize text-white'}>{thumbnail.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default GalleryPage
