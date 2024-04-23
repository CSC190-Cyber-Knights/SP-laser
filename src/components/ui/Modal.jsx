import {motion} from 'framer-motion'

const Modal = ({setSelectedImg, selectedImg}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null)
    }
  }

  return (
    <motion.div
      className="backdrop fixed left-0 top-0 h-full w-full bg-mat_grey opacity-50"
      onClick={handleClick}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        initial={{y: '-100vh'}}
        animate={{y: 0}}
        className={'backdrop mx-14 my-auto block max-h-[80%] max-w-[60%] border-white shadow-lg'}
      />
    </motion.div>
  )
}

export default Modal
