import {useRef, useEffect} from 'react'

export const BgVideo = ({src}) => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.loop = true // Add loop attribute to make the video loop continuously

    return () => {
      video.removeEventListener('timeupdate', this)
    }
  }, [])

  return (
    <div className={'max-h-full max-w-full '} style={{maxWidth: '100%', maxHeight: '100%'}}>
      <video
        ref={videoRef}
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover"
        autoPlay={true}
        disablePictureInPicture={true}
        controls={false}
        muted={true}
      >
        <source src={src} type={'video/mp4'} />
      </video>
    </div>
  )
}

export default BgVideo
