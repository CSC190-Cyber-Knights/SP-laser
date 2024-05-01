import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {Photo} from '../components/ui/media/Photo.jsx'
import Title from '../components/layout/Title.jsx'
import {getThumbnails} from '../firebase/libs/fetch.js'
import Loading from '../components/ui/Loading.jsx'
import {motion} from 'framer-motion'
import {FaImage} from 'react-icons/fa'

const TagContainer = ({thumbnails, tag}) => {
  // The number of thumbnails
  const thumbnailCount = thumbnails.length

  return (
    <motion.div
      layout={true}
      initial={{opacity: 1}}
      whileHover={{opacity: 0.8}}
      whileTap={{opacity: 1}}
      spring={{stiffness: 100}}
      transition={{duration: 0.5}}
      className={'relative max-w-screen-lg'}
    >
      <h2 className={`mb-2 w-full text-2xl font-semibold sm:hidden dark:text-neutral-200`}>{tag}</h2>
      <div className={`grid w-full grid-cols-2 grid-rows-2 gap-1`}>
        {thumbnails.map((thumbnail, index) => (
          <div
            key={index}
            className={`
              ${thumbnailCount === 1 ? 'col-span-2 row-span-2' : ''}
              ${thumbnailCount === 2 ? 'col-start- row-span-2' + (index + 1) : ''}
            `}
          >
            <Photo src={thumbnail.url} alt={'test'} />
          </div>
        ))}
      </div>
      <div
        className={
          'absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 transition duration-300 ease-in-out hover:opacity-100'
        }
      >
        <span className={' rounded bg-blue-600 px-2 py-1 text-lg font-bold capitalize text-white'}>{tag}</span>
      </div>
    </motion.div>
  )
}

const GalleryPage = () => {
  const [thumbnails, setThumbnails] = useState([])
  const [tags, setTags] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getThumbnails().then(({lsDocs, tags}) => {
      setThumbnails(lsDocs)
      setTags(tags.map((tag) => tag.name)) // Assuming tags is an array of objects with a 'name' property
      setLoading(false)
    })
  }, [])

  return (
    <div className={'flex min-h-screen w-full flex-col items-center gap-2 dark:bg-slate-800'}>
      <Title hero={'Gallery'} subHero={'See some of my work'} Icon={FaImage} />
      <section className={'flex min-h-screen w-5/6 flex-col items-center pb-8 font-sans'}>
        {loading && (
          <div className={'h-screen w-screen p-4'}>
            <Loading />
          </div>
        )}
        <div
          layout
          animate={{opacity: 1}}
          transition={{duration: 0.5}}
          className={`grid 
            grid-cols-1
             grid-rows-4 
             justify-center
             gap-0.5
             sm:grid-cols-2 
             sm:p-4 
             md:grid-rows-3
             md:pt-8
             lg:grid-cols-3
             lg:grid-rows-3 xl:grid-cols-4  
             `}
        >
          {tags.map((tag, index) => (
            <Link
              className={'flex items-center justify-center p-2  sm:gap-8 sm:p-8'}
              to={`/gallery/${tag}`}
              key={index}
            >
              {thumbnails[tag] && thumbnails[tag].length > 0 && <TagContainer tag={tag} thumbnails={thumbnails[tag]} />}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default GalleryPage
