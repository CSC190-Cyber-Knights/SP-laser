import {useRef, useEffect} from 'react'

export const BgVideo = ({src, freezeTime}) => {
  const videoRef = useRef(null)
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    // freeze time with an event listener
    video.addEventListener('timeupdate', () => {
      if (video.currentTime >= freezeTime) {
        video.pause()
      }
    })
    // cleanup
    return () => {
      video.removeEventListener('timeupdate', this)
    }
  }, [freezeTime])

  return (
    <video
      ref={videoRef}
      className={' absolute z-10 min-h-full w-auto min-w-full object-cover opacity-30'}
      autoPlay={true}
      onAnimationStart={true}
    >
      <source src={src} type={'video/mp4'} />
    </video>
  )
}

export default BgVideo
