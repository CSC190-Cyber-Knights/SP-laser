import {useState} from 'react'

export default function TagInput({onAddTag}) {
  const [tag, setTag] = useState('')

  return (
    <div className="mb-4">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onAddTag(tag)
          setTag('')
        }}
        className="flex"
      >
        <div className="max-w-sm space-y-3">
          <input
            id="tagtext"
            type="text"
            className="block w-full rounded-l-full border-2 border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50  dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            placeholder="Enter a Tag"
          />
        </div>
        <button
          id="submittags"
          type="submit"
          className="rounded-r bg-blue-500 px-6 py-3 text-sm font-bold text-white hover:bg-green-300"
        >
          Enter
        </button>
      </form>
    </div>
  )
}
