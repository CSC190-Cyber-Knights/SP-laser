import {getStorage, ref, getDownloadURL, list, listAll, uploadBytesResumable} from 'firebase/storage'
import {db} from './ContactForm.jsx'
import * as url from 'url'
import PhotoObj from "../components/ui/Photo.jsx";

//const docRef = doc(db, "gs://laserengraving-9a35a.appspot.com/images", "/IMG_0950.jpeg");
//const docSnap = await getDoc(docRef);
const storage = getStorage() //connect to firebase storage
const imagesRef = ref(storage, 'images/') //reference to image in firebase storage
const testImage = ref(storage, 'images/IMG_0950.jpeg') //test image

window.onload = function GeneratePhotos(){
  console.log("GeneratePhotos Called")
  listAll(imagesRef)
      .then((imagesListResult) => {
        imagesListResult.prefixes.forEach((folderRef) => {
          const category = folderRef.name + " w-1/6 h-1/6 photo"
          CreateInput(folderRef.name)

          listAll(folderRef)
              .then((itemListResult) => {
                itemListResult.items.forEach((itemRef) => {
                  getDownloadURL(ref(storage, itemRef.fullPath))
                      .then((myUrl) => {
                        console.log(category + ", " + itemRef.fullPath)
                        CreateNewPhoto(category, myUrl)
                      })
                      .catch((error) => {})
                });
              })
        });
      }).catch((error) => {
    // Uh-oh, an error occurred!
  });
}

//function to update the file variable with user input
function handleChange(event) {
  file = event.target.files[0]
}
const handleUpload = () => {

  if (!file) {
    alert("Please choose an image");


  }

  const storageRef = ref(storage, `/images/${file.name}`);

  // Receives the storage reference and the file to upload.
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
      "state_changed",
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      });
};

function CreateNewPhoto(category, url)
{
  let newImg = new Image();
  newImg.src = url;
  newImg.alt = "Image not found";
  newImg.className = category;
  document.getElementById('galleryID').appendChild(newImg);
}

//Might need the commented code below in the future, ask Paul before deleting please
/*
async function pageToken(){

  const firstPage = await list(imagesRef, { maxResults: 100 });
  //Do stuff here

  console.log(firstPage.toString())
  for (let i = 0; i < firstPage.items.length; i++)
  {
    getDownloadURL(ref(storage, firstPage.items[i].name))
        .then((myUrl) => {
          console.log(firstPage.items[i].name)
          CreateNewPhoto(category, myUrl)
        })
        .catch((error) => {})
  }

  if (firstPage.nextPageToken){
    const secondPage = await list(imagesRef, {
      maxResults: 100,
      pageToken: firstPage.nextPageToken,
    });
    //Do stuff here
  }
}
*/

function CreateInput(category){
  let input = document.createElement("input");
  input.type = "checkbox";
  input.id = category;
  input.name = category;
  input.className = "input";
  input.onclick = function(){
    checkAll();
  }

  let label = document.createElement("label");
  label.htmlFor = category;
  label.appendChild(document.createTextNode(" " + category + " | "));
  document.getElementById("inputs").appendChild(input);
  document.getElementById("inputs").appendChild(label);
}
function checkAll(){
  let container = document.getElementsByClassName('input');
  let images = document.getElementsByClassName('photo');
  let showAll = true;
  for (let i=0; i<container.length; i++){
    if (container[i].checked){
      showAll = false;
    }

  }
  if (showAll){
    for (let i=0; i<images.length; i++){
      images[i].style.display = "flex";
    }
  }
  else{
    for (let i=0; i<container.length; i++){
      let pics = document.getElementsByClassName(container[i].name);
      if (container[i].checked){
        for (let j=0; j<pics.length; j++){
          pics[j].style.display = "flex";
        }
      }
      else{
        for (let j=0; j<pics.length; j++){
          pics[j].style.display = "none";
        }
      }
    }
  }
}

const GalleryPage = () => {
  return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#333366' }}> {/* Solid color background */}
        <h1 className='text-center text-3xl font-bold py-8' style={{
          color: '#FFFFFF',
          fontSize: '40px', // font larger
          fontWeight: 'bold', // font bold
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // shadow for depth
        }}>Gallery</h1> {/*Start of body of Gallery, center text, text size, bold text */}
        <div className={"grid-rows-4"}>
          <div className={"grid-rows-4"}>
            <h1 id={"inputs"} className='text-left text-3xl font-bold py-8' style={{color: '#FFFFFF'}}><span style={{marginRight: '16px'}}></span></h1>
            <ul id={'galleryID'} className={"flex-container"}></ul>
          </div>
          <input type="file" onChange={handleChange} accept="/image/*"/>
          <button onClick={handleUpload}>Upload</button>
        </div>
    </div>
  )
}

export default GalleryPage
