import useFireStore from '../../hooks/useFireStore.js'
import {motion} from 'framer-motion'
import {useEffect, useState} from 'react'
import Title from './Title.jsx'
import {useParams} from 'react-router-dom'

export const ImageGrid = ({setSelectedImg, categoryCollection}) => {
  const {category} = useParams()
  const {docs} = useFireStore(categoryCollection)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (docs.length > 0) {
      setLoading(false)
    }
  }, [docs])
  //set loading animation if docs is empty
  if (loading) {
    return (
      <div className="min-w-screen flex min-h-screen items-center justify-center bg-gray-100 p-5">
        <div className="flex animate-pulse space-x-2">
          <div className="h-3 w-3 rounded-full bg-gray-500"></div>
          <div className="h-3 w-3 rounded-full bg-gray-500"></div>
          <div className="h-3 w-3 rounded-full bg-gray-500"></div>
        </div>
      </div>
    )
  }
  return (
    <div className={'flex h-fit min-h-screen w-screen flex-col'}>
      <Title hero={category} />
      <div className={'m-auto mx-5 h-fit w-max grid-cols-2 gap-10 sm:grid-cols-3  '}>
        {docs.map((doc) => (
          <motion.div
            layout
            whileHover={{opacity: 1}}
            key={doc.id}
            className={'px-1/2 grid overflow-hidden  py-0 opacity-80'}
          >
            <motion.img
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 1}}
              src={doc.url}
              alt={doc.id}
              className={'max-w-md object-cover'}
              onLoad={() => console.log('image loaded', doc.url)}
              onError={() => console.log('image failed', doc.url)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ImageGrid
