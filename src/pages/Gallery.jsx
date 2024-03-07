import {doc, getDoc} from 'firebase/firestore';
import {getStorage, ref, getDownloadURL} from 'firebase/storage';
import {db} from './ContactForm.jsx';
import * as url from 'url';

//const docRef = doc(db, "gs://laserengraving-9a35a.appspot.com/images", "/IMG_0950.jpeg");
//const docSnap = await getDoc(docRef);
const storage = getStorage(); //connect to firebase storage
const imagesRef = ref(storage, 'images)'); //reference to image in firebase storage
const testImage = ref(storage, 'images/IMG_0950.jpeg'); //test image

getDownloadURL(ref(storage, 'images/IMG_0950.jpeg'))
  .then((myUrl) => {
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
  .catch((error) => {});

function checkAll() {
  let checkbox = document.getElementById('checkA');
  if (checkbox.checked) {
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
function checkF() {
  let checkbox = document.getElementById('checkF');
  let container = document.getElementsByClassName('firearms');
  if (checkbox.checked) {
    for (let i = 0; i < container.length; i++) {
      container[i].style.display = 'flex';
    }
  } else {
    for (let i = 0; i < container.length; i++) {
      container[i].style.display = 'none';
    }
    document.getElementById('checkA').checked = false;
  }
}
function checkFA() {
  let checkbox = document.getElementById('checkFA');
  let container = document.getElementsByClassName('firearm_accessories');
  if (checkbox.checked) {
    for (let i = 0; i < container.length; i++) {
      container[i].style.display = 'flex';
    }
  } else {
    for (let i = 0; i < container.length; i++) {
      container[i].style.display = 'none';
    }
    document.getElementById('checkA').checked = false;
  }
}
function checkT() {
  let checkbox = document.getElementById('checkT');
  let container = document.getElementsByClassName('thermos');
  if (checkbox.checked) {
    for (let i = 0; i < container.length; i++) {
      container[i].style.display = 'flex';
    }
  } else {
    for (let i = 0; i < container.length; i++) {
      container[i].style.display = 'none';
    }
    document.getElementById('checkA').checked = false;
  }
}
function checkFL() {
  let checkbox = document.getElementById('checkFL');
  let container = document.getElementsByClassName('fishing_lures');
  if (checkbox.checked) {
    for (let i = 0; i < container.length; i++) {
      container[i].style.display = 'flex';
    }
  } else {
    for (let i = 0; i < container.length; i++) {
      container[i].style.display = 'none';
    }
    document.getElementById('checkA').checked = false;
  }
}

const GalleryPage = () => {
  return (
    <div>
      <h1 className="py-8 text-center text-3xl font-bold">Gallery</h1>{' '}
      {/*Start of body of Gallery, center text, text size, bold text */}
      <div className={'grid-rows-4'}>
        <div className={'grid-rows-4'}>
          <h1 className="py-8 text-left text-3xl font-bold">
            <span>
              <span>
                <input type={'checkbox'} id={'checkA'} onChange={checkAll} checked></input>
              </span>{' '}
              All Photos |
            </span>{' '}
            <span>
              <span>
                <input type={'checkbox'} id={'checkF'} onChange={checkF}></input>
              </span>{' '}
              Firearms |
            </span>{' '}
            <span>
              <span>
                <input type={'checkbox'} id={'checkFA'} onChange={checkFA}></input>
              </span>{' '}
              Firearm Accessories |
            </span>{' '}
            <span>
              <span>
                <input type={'checkbox'} id={'checkT'} onChange={checkT}></input>
              </span>{' '}
              Thermos |
            </span>{' '}
            <span>
              <span>
                <input type={'checkbox'} id={'checkFL'} onChange={checkFL}></input>
              </span>{' '}
              Fishing Lures
            </span>
          </h1>
          <ul className={'flex-container'}>
            <img
              src={
                'https://firebasestorage.googleapis.com/v0/b/laserengraving-9a35a.appspot.com/o/images%2FIMG_0950.jpeg?alt=media&token=73537dd8-12d3-4d4a-b9f8-9c1a138fac38'
              }
              alt="Image Not Found"
              className={'firearms w-1/6'}
            />
            {/*grab reference to image from firebase storage*/}
            <img
              src={
                'https://firebasestorage.googleapis.com/v0/b/laserengraving-9a35a.appspot.com/o/images%2FIMG_7414.jpeg?alt=media&token=cd1d82da-01e1-46eb-be03-9a320040ba43'
              }
              alt="Image Not Found"
              className={'thermos w-1/6'}
            />
            <img
              src={
                'https://firebasestorage.googleapis.com/v0/b/laserengraving-9a35a.appspot.com/o/images%2FIMG_6717.jpeg?alt=media&token=318510f6-72de-44c3-a3f9-6ae90944db0e'
              }
              alt="Image Not Found"
              className={'thermos w-1/6'}
            />
            <img
              src={
                'https://firebasestorage.googleapis.com/v0/b/laserengraving-9a35a.appspot.com/o/images%2FIMG_0561.jpeg?alt=media&token=7581cb12-4c21-46ae-9388-0759aba98cc2'
              }
              alt="Image Not Found"
              className={'thermos w-1/6'}
            />
            <img
              src={
                'https://firebasestorage.googleapis.com/v0/b/laserengraving-9a35a.appspot.com/o/images%2FIMG_7328.jpeg?alt=media&token=fd664fec-7544-429a-add2-a66deebf7c06'
              }
              alt="Image Not Found"
              className={'firearm_accessories w-1/6'}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
