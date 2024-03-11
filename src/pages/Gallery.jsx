import {getStorage, ref, getDownloadURL, list, listAll, uploadBytesResumable} from 'firebase/storage'
import {db} from './ContactForm.jsx'
import * as url from 'url'
import PhotoObj from "../components/ui/Photo.jsx";

const storage = getStorage() //connect to firebase storage
const imagesRef = ref(storage, 'images/') //reference to image in firebase storage
let file

window.onload = function GeneratePhotos(){
    console.log("GeneratePhotos Called")
    listAll(imagesRef)
        .then((imagesListResult) => {
            imagesListResult.prefixes.forEach((folderRef) => {
                const category = folderRef.name + " w-1/6 h-1/6"

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

function checkAll(){
    let checkbox = document.getElementById('checkA');
    if (checkbox.checked){
        document.getElementById('checkF').checked = true;
        document.getElementById('checkFA').checked = true;
        document.getElementById('checkT').checked = true;
        document.getElementById('checkFL').checked = true;
    }
    checkF();
    checkFA();
    checkT();
    checkFL();
}
function checkF(){
    let checkbox = document.getElementById('checkF');
    let container = document.getElementsByClassName('firearms');
    if (checkbox.checked){
        for (let i = 0; i < container.length; i++){
            container[i].style.display = "flex";
        }
    }
    else {
        for (let i = 0; i < container.length; i++){
            container[i].style.display = "none";
        }
        document.getElementById('checkA').checked = false;
    }
}
function checkFA(){
    let checkbox = document.getElementById('checkFA');
    let container = document.getElementsByClassName('firearm_accessories');
    if (checkbox.checked){
        for (let i = 0; i < container.length; i++){
            container[i].style.display = "flex";
        }
    }
    else {
        for (let i = 0; i < container.length; i++){
            container[i].style.display = "none";
        }
        document.getElementById('checkA').checked = false;
    }
}
function checkT(){
    let checkbox = document.getElementById('checkT');
    let container = document.getElementsByClassName('thermos');
    if (checkbox.checked){
        for (let i = 0; i < container.length; i++){
            container[i].style.display = "flex";
        }
    }
    else {
        for (let i = 0; i < container.length; i++){
            container[i].style.display = "none";
        }
        document.getElementById('checkA').checked = false;
    }
}
function checkFL(){
    let checkbox = document.getElementById('checkFL');
    let container = document.getElementsByClassName('fishing_lures');
    if (checkbox.checked){
        for (let i = 0; i < container.length; i++){
            container[i].style.display = "flex";
        }
    }
    else {
        for (let i = 0; i < container.length; i++){
            container[i].style.display = "none";
        }
        document.getElementById('checkA').checked = false;
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
                  <h1 className='text-left text-3xl font-bold py-8' style={{color: '#FFFFFF'}}>
                    <span style={{marginRight: '16px'}}>
                        <span>
                            <input type={"checkbox"} id={"checkA"} onChange={checkAll} checked></input>
                        </span> All Photos |
                    </span>
                      <span style={{marginRight: '16px'}}>
                        <span>
                            <input type={"checkbox"} id={"checkF"} onChange={checkF}></input>
                        </span> Firearms |
                    </span>
                      <span style={{marginRight: '16px'}}>
                        <span>
                            <input type={"checkbox"} id={"checkFA"} onChange={checkFA}></input>
                        </span> Firearm Accessories |
                    </span>
                      <span style={{marginRight: '16px'}}>
                        <span>
                            <input type={"checkbox"} id={"checkT"} onChange={checkT}></input>
                        </span> Thermos |
                    </span>
                      <span style={{marginRight: '16px'}}>
                        <span>
                            <input type={"checkbox"} id={"checkFL"} onChange={checkFL}></input>
                        </span> Fishing Lures
                    </span>
                  </h1>
                  <ul id={'galleryID'} className={"flex-container"}>
                      <img
                          src={"https://firebasestorage.googleapis.com/v0/b/laserengraving-9a35a.appspot.com/o/images%2FIMG_0950.jpeg?alt=media&token=73537dd8-12d3-4d4a-b9f8-9c1a138fac38"}
                          alt="Image Not Found"
                          className={"w-1/6 firearms"}/>{/*grab reference to image from firebase storage*/}
                      <img
                          src={"https://firebasestorage.googleapis.com/v0/b/laserengraving-9a35a.appspot.com/o/images%2FIMG_7414.jpeg?alt=media&token=cd1d82da-01e1-46eb-be03-9a320040ba43"}
                          alt="Image Not Found" className={"w-1/6 thermos"}/>
                      <img
                          src={"https://firebasestorage.googleapis.com/v0/b/laserengraving-9a35a.appspot.com/o/images%2FIMG_6717.jpeg?alt=media&token=318510f6-72de-44c3-a3f9-6ae90944db0e"}
                          alt="Image Not Found" className={"w-1/6 thermos"}/>
                      <img
                          src={"https://firebasestorage.googleapis.com/v0/b/laserengraving-9a35a.appspot.com/o/images%2FIMG_0561.jpeg?alt=media&token=7581cb12-4c21-46ae-9388-0759aba98cc2"}
                          alt="Image Not Found" className={"w-1/6 thermos"}/>
                      <img
                          src={"https://firebasestorage.googleapis.com/v0/b/laserengraving-9a35a.appspot.com/o/images%2FIMG_7328.jpeg?alt=media&token=fd664fec-7544-429a-add2-a66deebf7c06"}
                          alt="Image Not Found" className={"w-1/6 firearm_accessories"}/>
                  </ul>
              </div>
              <input type="file" onChange={handleChange} accept="/image/*"/>
              <button onClick={handleUpload}>Upload</button>
          </div>
      </div>
  );
};

export default GalleryPage;