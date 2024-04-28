import {motion} from 'framer-motion'

const Modal = ({onClose, selectedImg}) => {
  const handleBackgroundClick = () => {
    onClose()
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      onClick={() => handleBackgroundClick()}
    >
      <motion.div className="relative" initial={{y: '-100vh'}} animate={{y: 0}}>
        <motion.img src={selectedImg} alt="enlarged pic" className="max-h-[80vh] max-w-[90vw] rounded shadow-lg" />
      </motion.div>
    </motion.div>
  )
}

export default Modal
