import {useState} from 'react'
import {imageUpload} from '../services/imageCRUD'
export const Admin = () => {
  const [imagePath, setImagePath] = useState(null)
  const handleUpload = () => {
    // if there is nothing in the image variable, a file path, then return and do nothing
    if (imagePath == null) return
    imageUpload(imagePath)
  }
  return (
    <div>
      <h1>this is the admin page, please upload something to test</h1>
      <div>
        <div className="mb-3 w-96">
          <label htmlFor="formFile" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">
            Upload Files
          </label>
          <input
            className="focus:border-primary focus:shadow-te-primary dark:focus:border-primary relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:text-neutral-700 focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
            onChange={(event) => {
              setImagePath(event.target.files)
            }}
            type="file"
            multiple="multiple"
            id="formFile"
          />
          <button onClick={handleUpload}>Upload Image</button>
        </div>
      </div>
    </div>
  )
}
