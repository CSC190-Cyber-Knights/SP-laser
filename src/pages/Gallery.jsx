import {doc, getDoc} from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {db} from "./ContactForm.jsx";
import * as url from "url";

//const docRef = doc(db, "gs://laserengraving-9a35a.appspot.com/images", "/IMG_0950.jpeg");
//const docSnap = await getDoc(docRef);
const storage = getStorage();
const imagesRef = ref(storage, 'images)');
const testImage = ref(storage, 'images/IMG_0950.jpeg');

getDownloadURL(ref(storage, 'images/IMG_0950.jpeg')).then((myUrl) => {

        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
            const blob = xhr.response;
        };
        xhr.open('GET', myUrl);
        xhr.send();

        const myImg = document.getElementById('myimg');
        myImg.setAttribute('src', myUrl);
    })
    .catch((error) => {
    });

const GalleryPage = () => {
  return (
      <div>
        <h1 className='text-center text-3xl font-bold py-8'>Gallery</h1>
          <div className={"grid-rows-4"}>
              <div className={"grid-rows-4"}>
                  <h1 className='text-left text-3xl font-bold py-8'>Firearms</h1>
                  <img src={"https://firebasestorage.googleapis.com/v0/b/laserengraving-9a35a.appspot.com/o/images%2FIMG_0950.jpeg?alt=media&token=73537dd8-12d3-4d4a-b9f8-9c1a138fac38"} alt="Image Not Found" className={"w-1/6"}/>
              </div>
              <div className={"grid-rows-4"}>
                  <h1 className='text-left text-3xl font-bold py-8'>Thermos</h1>
                  <img src={"https://firebasestorage.googleapis.com/v0/b/laserengraving-9a35a.appspot.com/o/images%2FIMG_7414.jpeg?alt=media&token=cd1d82da-01e1-46eb-be03-9a320040ba43"} alt="Image Not Found" className={"w-1/6"}/>
                  <img src={"https://firebasestorage.googleapis.com/v0/b/laserengraving-9a35a.appspot.com/o/images%2FIMG_6717.jpeg?alt=media&token=318510f6-72de-44c3-a3f9-6ae90944db0e"} alt="Image Not Found" className={"w-1/6"}/>
                  <img src={"https://firebasestorage.googleapis.com/v0/b/laserengraving-9a35a.appspot.com/o/images%2FIMG_0561.jpeg?alt=media&token=7581cb12-4c21-46ae-9388-0759aba98cc2"} alt="Image Not Found" className={"w-1/6"}/>
              </div>
              <div className={"grid-rows-4"}>
                  <h1 className='text-left text-3xl font-bold py-8'>Fishing Lures</h1>
              </div>
              <div className={"grid-rows-4"}>
                  <h1 className='text-left text-3xl font-bold py-8'>Firearm Accessories</h1>
                  <img src={"https://firebasestorage.googleapis.com/v0/b/laserengraving-9a35a.appspot.com/o/images%2FIMG_7328.jpeg?alt=media&token=fd664fec-7544-429a-add2-a66deebf7c06"} alt="Image Not Found" className={"w-1/6"}/>
              </div>
          </div>
      </div>
  );
};

export default GalleryPage;