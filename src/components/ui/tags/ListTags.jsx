import {motion} from 'framer-motion'
export function ListTags({tags, selectedTag, onSelectTag}) {
  return (
    <div className="wrap grid grid-flow-dense grid-cols-3 items-center justify-center gap-4 align-middle">
      {tags.map((tag, index) => (
        <motion.button
          whileFocus={{scale: 1.1}}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          key={index}
          onClick={() => onSelectTag(tag.name)}
          className={`h-fit w-full rounded px-2 py-1 ${selectedTag === tag.name ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
        >
          {tag.name}
        </motion.button>
      ))}
    </div>
  )
}
export default ListTags
