export function ListTags({tags, selectedTag, onSelectTag}) {
  return (
    <div className="wrap flex w-full items-center justify-center gap-4">
      {tags.map((tag, index) => (
        <button
          key={index}
          onClick={() => onSelectTag(tag.name)}
          className={`h-fit rounded px-2 py-1 ${selectedTag === tag.name ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
        >
          {tag.name}
        </button>
      ))}
    </div>
  )
}
export default ListTags
