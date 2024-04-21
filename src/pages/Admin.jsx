import {useState} from 'react'
import {ref, getDownloadURL, uploadBytesResumable, getStorage} from 'firebase/storage'
export const Admin = () => {
  const [category, setCategory] = useState('/images/')
  const [file, setFile] = useState(null)
  const databaseReference = getStorage()
  function handleChange(event) {
    setCategory(event.target.value)
  }
  const handleUpload = () => {
    if (!file) {
      alert('Please choose an image')
    }

    const storageRef = ref(databaseReference, `${category}${file.name}`)

    // Receives the databaseReference reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url)
        })
      }
    )
    document.getElementById('file').value = null
    setCategory('/images/')
  }
  return (
    <div
      style={{
        backgroundColor: '#003153',
      }}
    >
      <div className="rounded-lg w-fit flex-col space-y-4">
        <h1 className="items-center text-center text-lg font-bold text-white">Add Photo to Gallery</h1>
        <form className="flex-col items-start space-y-3 text-white" onSubmit>
          <div>
            <h1 className="text-md items-center text-left font-bold text-white">Choose Category</h1>

            <input
              type="radio"
              name="category"
              value="/images/"
              id="images"
              checked={category === '/images/'}
              onChange={handleChange}
            />
            <label className="text-md mr-3 text-white">None</label>
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
          <div className="flex w-full ">
            <input
              className=""
              type="file"
              name="file"
              id="file"
              onChange={(event) => setFile(event.target.files[0])}
              accept="/image/*"
            />
          </div>
          <div>
            <button
              type="button"
              className="rounded-lg bg-black px-2.5 py-1.5 text-center text-sm
                  font-semibold text-white"
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
