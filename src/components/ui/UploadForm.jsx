import {motion} from 'framer-motion'
import ProgressBar from './ProgressBar.jsx'
import {FaCloud} from 'react-icons/fa'
import {useState} from 'react'

export const UploadForm = () => {
  const [category, setCategory] = useState('/images/')
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  // acceptable types for file input
  const types = ['image/png', 'image/jpeg', 'image/jpg']

  const handleChange = (e) => {
    if (e.target.checked) {
      setCategory(e.target.value)
    }
  }
  const submitHandler = (e) => {
    e.preventDefault()
    let selected = e.target.files[0]
    if (selected && types.includes(selected.type)) {
      setFile(selected)
      setError('')
    } else {
      setFile(null)
      setError('Please select the following file types [*.png, *.jpeg]')
    }
  }

  return (
    <div className={'m-auto flex h-fit flex-col items-center justify-center'}>
      <form className={'flex flex-col items-start gap-4 sm:flex-row'}>
        <form className="flex-col items-start space-y-3 text-white">
          <div className={'gap-2'}>
            <input
              type="radio"
              name="category"
              value="/images/"
              id="images"
              checked={category === '/images/'}
              onChange={handleChange}
            />
            <label className="text-md mr-3 text-white">Misc</label>
            <input
              type="radio"
              name="category"
              value="/images/firearm_accessories/"
              id="firearm_accessories"
              checked={category === '/images/firearm_accessories/'}
              onChange={handleChange}
            />
            <label className="text-md mr-3 text-white">Firearm Accessories</label>
            <input
              type="radio"
              name="category"
              value="/images/firearms/"
              id="firearms"
              checked={category === '/images/firearms/'}
              onChange={handleChange}
            />
            <label className="text-md mr-3 text-white">Firearms</label>
            <input
              type="radio"
              name="category"
              value="/images/thermos/"
              id="thermos"
              checked={category === '/images/thermos/'}
              onChange={handleChange}
            />
            <label className="text-md text-white">Thermos</label>
          </div>
        </form>
      </form>

      <div className="flex w-full items-center justify-center">
        <label
          htmlFor="dropzone-file"
          className="rounded-lg dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <svg
              className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" onChange={(e) => submitHandler(e)} />
        </label>
      </div>
      <button className={'w-fit self-center bg-blue-400 p-2'} onClick={(e) => submitHandler(e)}>
        Upload Photo
      </button>
      <div className="flex h-16 w-full flex-col text-[0.8rem]">
        {error && <div className="text-imposter_red">{error}</div>}
        {file && category && <div>{file.name}</div>}
        {file && category && <ProgressBar file={file} setFile={setFile} category={category} />}
      </div>
    </div>
  )
}
