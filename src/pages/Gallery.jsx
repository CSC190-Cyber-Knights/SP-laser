import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {Photo} from '../components/ui/media/Photo.jsx'
import Title from '../components/layout/Title.jsx'
import {getThumbnails} from '../firebase/libs/fetch.js'
import Loading from '../components/ui/Loading.jsx'
import {motion} from 'framer-motion'
import {FaImage} from 'react-icons/fa'

const TagContainer = ({thumbnails, tag}) => {
  return (
    <>
      <motion.div
        layout
        initial={{opacity: 1}}
        whileHover={{opacity: 0.8}}
        whileTap={{opacity: 1}}
        transition={{duration: 0.3}}
        className={'relative w-4/5'}
      >
        <div className={'grid w-full grid-cols-2 grid-rows-2 gap-2'}>
          {thumbnails.map((thumbnail, index) => (
            <div key={index} className={''}>
              <Photo src={thumbnail.url} alt={'test'} />
            </div>
          ))}
        </div>
        <div
          className={
            'absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 transition duration-300 ease-in-out hover:opacity-100 sm:visible'
          }
        >
          <span className={'rounded bg-blue-600 p-2 text-xl font-bold capitalize text-white'}>{tag}</span>
        </div>
      </motion.div>
    </>
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

  if (loading) {
    return <Loading />
  }

  return (
    <div className={'flex max-h-fit min-h-screen w-full flex-col items-center gap-2'}>
      <Title hero={'Gallery'} subHero={'See some of my work'} Icon={FaImage} />
      <section className={'flex min-h-screen w-5/6 flex-col items-center pb-8 font-sans'}>
        {loading && <Loading />}
        <div className={'grid grid-rows-4 justify-center gap-0.5 p-4 sm:grid-cols-2 md:grid-rows-2 md:pt-8'}>
          {tags.map((tag, index) => (
            <Link className={'flex items-center justify-center'} to={`/gallery/${tag}`} key={index}>
              <TagContainer tag={tag} thumbnails={thumbnails[tag]} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default GalleryPage
