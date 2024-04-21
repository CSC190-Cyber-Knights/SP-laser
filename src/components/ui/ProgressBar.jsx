import useStorage from '../../hooks/useStorage'
import {useEffect} from 'react'

export const ProgressBar = ({file, setFile}) => {
  const {progress, url} = useStorage(file)
  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url, setFile])

  return <div className="" style={{width: progress + '%'}}></div>
}

export default ProgressBar
