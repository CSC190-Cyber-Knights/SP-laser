import {useState, useEffect} from 'react'
import {saveStorage} from '../../firebase/libs/upload.js'
import {getTags} from '../../firebase/libs/fetch.js'
import {saveTag} from '../../firebase/libs/upload.js'
import TagInput from './tags/TagInput.jsx'
import {Photo} from './media/Photo.jsx'
import ListTags from './tags/ListTags.jsx'
import {auth} from "../../services/firebase.js";
import {useNavigate} from "react-router-dom";
import {signOut} from "firebase/auth";

export const UploadForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [selectedTag, setSelectedTag] = useState('')
  const [tags, setTags] = useState([])
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)
  const [preview, setPreview] = useState('')
  const navigate = useNavigate()

  const userSignOutWithNavigate = async () => {

    signOut(auth)
        .then(() => {
          navigate('/signin')
          alert('You have been signed out')
        })
        .catch((e) => {
          console.error(e)
        })
  }
  useEffect(() => {
    getTags().then((fetchedTags) => {
      setTags(fetchedTags)
    })
  }, [])

  const handleFileChange = (e) => {
    const f = e.target.files[0]
    setFile(f)
    setSuccess(false)
    if (f) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(f)
    } else {
      setPreview('')
    }
  }

  const handleAddTag = async (tag) => {
    try {
      const newTag = await saveTag(tag)
      setTags([...tags, newTag])
    } catch (e) {
      console.error(e)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file || !selectedTag) {
      setError('Please select a file')
      return
    }
    setError(null)
    setIsLoading(true)
    try {
      await saveStorage(file, selectedTag)
      setIsLoading(false)
      setSuccess(true)
      setFile(null)
      setSelectedTag('')
      setError(null)
    } catch (e) {
      console.error(e)
      setIsLoading(false)
      setError('Error uploading file')
    }
  }

  return (
      <div className="flex w-full flex-col items-center gap-4">
        <h2 className="text-2xl font-bold dark:text-egg">Upload Photo</h2>
        {preview && (
            <div className={'w-52'}>
              <Photo src={preview}/>
            </div>
        )}
        {tags.length > 0 && <ListTags tags={tags} selectedTag={selectedTag} onSelectTag={setSelectedTag}/>}
        <div className="mb-3 w-96">
          <input
              className="focus:shadow-te-primary relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
              disabled={isLoading}
              onChange={handleFileChange}
              type="file"
              id="formFile"
          />
        </div>

        <TagInput onAddTag={handleAddTag}/>
        <button
            id = "submitbtn"
            onClick={handleSubmit}
            className={`rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={isLoading}
        >
          {isLoading ? 'Uploading...' : 'Upload Photo'}
        </button>
        {success && <p className="text-green-500">✅ Upload successful!</p>}
        {error && <p className="text-red-500">{error}</p>}
        <button
            id = "signout"
            onClick={() => {
              userSignOutWithNavigate()
            }}
        >
          Sign Out
        </button>
      </div>
  )
}
