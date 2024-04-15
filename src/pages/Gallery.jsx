import {getStorage, ref, getDownloadURL, list, listAll, uploadBytesResumable, deleteObject} from 'firebase/storage'
import {db} from './ContactForm.jsx'
import * as url from 'url'
import PhotoObj from '../components/ui/Photo.jsx'
import {useState} from 'react'

const databaseReference = getStorage() //connect to firebase storage
const rootImagesFolderReference = ref(databaseReference, 'images/') //reference to images folder in firebase databaseReference

window.onload = RetrievePhotos()

//used for API bundling - cached photos are not called again
async function getCachedUrl(imageReference) {
  const fullPath = imageReference.fullPath
  const cachedUrl = localStorage.getItem(fullPath)
  if (cachedUrl) {
    //console.log("Using cached URL for: ", fullPath);
    return cachedUrl
  } else {
    const newUrl = await getDownloadURL(ref(databaseReference, fullPath))
    localStorage.setItem(fullPath, newUrl)
    //console.log("Caching new URL for: ", fullPath);
    return newUrl
  }
}

async function RetrievePhotos() {
  //console.log("Generating Photos")
  const imagesFolderList = await list(rootImagesFolderReference, {maxResults: 7}) //

  for (const subFolderReference of imagesFolderList.prefixes) {
    const category = subFolderReference.name
    CreateInput(subFolderReference.name)
    //console.log(category);
    const imagesList = await list(subFolderReference, {maxResults: 100 /*Number of images to display per subfolder*/})

    for (const imageReference of imagesList.items) {
      getCachedUrl(imageReference)
        .then((myUrl) => {
          //console.log(category + ', ' + imageReference.fullPath)
          CreateNewPhoto(category, myUrl, imageReference.fullPath)
        })
        .catch((error) => {})
    }
  }
}

function CreateNewPhoto(category, url, fullPath) {
  let photoContainer = document.createElement('div')
  photoContainer.className = 'photo-container'
  photoContainer.style.position = 'relative' //position child elements absolutely with respect to the photoContainer's bounds
  photoContainer.style.width = 'calc(100% / 6)'
  photoContainer.style.height = 'calc(100% / 6)'
  photoContainer.style.overflow = 'hidden' //for good measure

  let newImg = new Image()
  newImg.src = url
  newImg.alt = 'Image not found'
  newImg.className = category
  newImg.style.width = '100%' //image covers container width
  newImg.style.height = '100%' //image covers container height
  newImg.style.objectFit = 'fill' //maintaining aspect ratio
  photoContainer.appendChild(newImg)

  //onclick event listener
  newImg.onclick = function () {
    //checks if image is full-size. if YES, clear styles and reapply initial styles so that it returns to original state
    if (this.style.position === 'fixed') {
      //clear all inline styles
      this.style = ''
      //initial styles for the gallery view
      this.style.width = '100%'
      this.style.height = '100%'
      this.style.objectFit = 'cover'
    } else {
      //if image not in full-size, applies following styles to expand it
      this.style.position = 'fixed'
      this.style.top = '50%'
      this.style.left = '50%'
      this.style.transform = 'translate(-50%, -50%)'
      this.style.width = '80%' //may be adjusted
      this.style.height = '80%'
      this.style.objectFit = 'contain' //show full-size image
      this.style.zIndex = '1000' //put it above other content
    }
  }

  // Create a container for the remove button
  let removeContainer = document.createElement('div')
  removeContainer.className = 'remove-container'

  // Create a remove button
  let removeBtn = document.createElement('button')
  removeBtn.innerText = 'Remove'
  removeBtn.onclick = function () {
    removePhoto(fullPath)
    photoContainer.remove() // Remove the entire photo container when removed
  }

  // Apply inline styles to the remove button
  removeBtn.style.backgroundColor = '#FFFFFF'
  removeBtn.style.color = '#000000'
  removeBtn.style.border = '2px solid #FFFFFF'
  removeBtn.style.borderRadius = '8px'
  removeBtn.style.padding = '6px 12px' // Adjusted padding
  removeBtn.style.fontSize = '0.8em' // Smaller font size

  removeContainer.appendChild(removeBtn)
  photoContainer.appendChild(removeContainer)

  // Initially hide the remove button
  removeContainer.style.display = 'none'

  // Show the remove button when an image is added
  photoContainer.onmouseover = function () {
    removeContainer.style.display = 'block'
  }

  // Hide the remove button when mouse leaves the image
  photoContainer.onmouseleave = function () {
    removeContainer.style.display = 'none'
  }

  document.getElementById('galleryID').appendChild(photoContainer)
}

// Function to remove photo
async function removePhoto(fullPath) {
  try {
    await deleteObject(ref(databaseReference, fullPath))
    console.log('File deleted successfully')
    // Remove the photo from the UI
    const photoToRemove = document.querySelector(`img[src="${fullPath}"]`)
    if (photoToRemove) {
      photoToRemove.parentNode.remove() // Remove the parent container of the image
    } else {
      console.error('Corresponding DOM element not found for deleted photo.')
    }
  } catch (error) {
    console.error('Error removing file: ', error)
    // Handle errors here
  }
}

function CreateInput(category) {
  let input = document.createElement('input')
  input.type = 'checkbox'
  input.id = category
  input.name = category
  input.className = 'input'
  input.onclick = function () {
    checkAll()
  }

  let label = document.createElement('label')
  label.htmlFor = category
  label.appendChild(document.createTextNode(' ' + category + ' | '))
  document.getElementById('inputs').appendChild(input)
  document.getElementById('inputs').appendChild(label)
}
function checkAll() {
  let container = document.getElementsByClassName('input')
  let images = document.getElementsByClassName('photo')
  let showAll = true
  for (let i = 0; i < container.length; i++) {
    if (container[i].checked) {
      showAll = false
    }
  }
  if (showAll) {
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = 'flex'
    }
  } else {
    for (let i = 0; i < container.length; i++) {
      let pics = document.getElementsByClassName(container[i].name)
      if (container[i].checked) {
        for (let j = 0; j < pics.length; j++) {
          pics[j].style.display = 'flex'
        }
      } else {
        for (let j = 0; j < pics.length; j++) {
          pics[j].style.display = 'none'
        }
      }
    }
  }
}

const GalleryPage = () => {
  const [category, setCategory] = useState('/images/')
  const [file, setFile] = useState(null)
  //RetrievePhotos()
  //console.log("Test")
  function handleChange(event) {
    setCategory(event.target.value)
  }
  const handleUpload = () => {
    if (!file) {
      alert('Please choose an image')
    }

    const storageRef = ref(databaseReference, `${category}${file.name}`)

    //metadata for cache control
    const metadata = {
      cacheControl: 'public, max-age=31536000', //cached for max-age time
    }

    const uploadTask = uploadBytesResumable(storageRef, file, metadata)

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
        minHeight: '100vh',
        backgroundColor: '#003153',
      }}
    >
      {' '}
      {/* Solid color background */}
      <h1
        className="py-8 text-center text-3xl font-bold"
        style={{
          color: '#FFFFFF',
          fontSize: '40px', // font larger
          fontWeight: 'bold', // font bold
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // shadow for depth
        }}
      >
        Gallery
      </h1>{' '}
      {/*Start of body of Gallery, center text, text size, bold text */}
      <div className={'grid-rows-4'}>
        <div className={'grid-rows-4'}>
          <h1 id={'inputs'} className="py-8 text-left text-3xl font-bold" style={{color: '#FFFFFF'}}>
            <span style={{marginRight: '16px'}}></span>
          </h1>
          <ul id={'galleryID'} className={'flex-container gap-4'}></ul>
        </div>
      </div>
      <div className="rounded-lg w-fit flex-col space-y-4 border-4 border-white">
        <h1 className="items-center text-center text-lg font-bold text-white">Add Photo to Gallery</h1>

        <form className="flex-col items-start space-y-1 text-white" onSubmit>
          <div>
            <h1 className="text-md items-center text-left text-white">Choose Category</h1>

            <input
              type="radio"
              name="category"
              value="/images/"
              id="images"
              checked={category === '/images/'}
              onChange={handleChange}
            />
            <label className="text-md text-white">None</label>
            <input
              type="radio"
              name="category"
              value="/images/firearm_accessories/"
              id="firearm_accessories"
              checked={category === '/images/firearm_accessories/'}
              onChange={handleChange}
            />
            <label className="text-md text-white">Firearm Accessories</label>
            <input
              type="radio"
              name="category"
              value="/images/firearms/"
              id="firearms"
              checked={category === '/images/firearms/'}
              onChange={handleChange}
            />
            <label className="text-md text-white">Firearms</label>
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

export default GalleryPage
