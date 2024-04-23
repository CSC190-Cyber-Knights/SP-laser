import useFireStore from '../../hooks/useFireStore.js'
import {motion} from 'framer-motion'

export const ImageGrid = ({setSelectedImg, categoryCollection}) => {
  const {docs} = useFireStore(categoryCollection)
  return (
    <div className={'m-auto mx-5 grid grid-cols-3 gap-10  '}>
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{opacity: 1}}
            onClick={() => setSelectedImg(doc.url)}
            key={doc.id}
            className={'px-1/2 relative grid h-0 overflow-hidden  py-0 opacity-80'}
          >
            <motion.img
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 1}}
              src={doc.url}
              alt={doc.id}
              className={'m-w-full absolute left-0 top-0 min-h-full max-w-[150%]'}
            />
          </motion.div>
        ))}
    </div>
  )
}

export default ImageGrid
