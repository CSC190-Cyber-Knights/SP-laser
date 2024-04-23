import {useEffect} from 'react'
import useStorage from '../../hooks/useStorage'
import {motion} from 'framer-motion'

const ProgressBar = ({file, setFile, category}) => {
  const {progress, url} = useStorage(file, category)

  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url, setFile])

  return (
    <motion.div
      className="mt-4 h-8 w-full rounded-[12px] bg-blue-400 "
      initial={{width: 0}}
      animate={{width: progress + '%'}}
    ></motion.div>
  )
}

export default ProgressBar
