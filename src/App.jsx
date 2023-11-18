// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./components/layout/header.jsx";
import PhotoObj from "./components/ui/Photo.jsx";
import {useState, setState} from 'react'

const testimg = "https://firebasestorage.googleapis.com/v0/b/laserengraving-9a35a.appspot.com/o/images%2FEverything%20Laser%20Engraved-logos_white.png?alt=media&token=44347792-0646-44b0-b5e5-e21f99a3a3ae";


const arr = []

const [click, setclick] = useState(false)


function App() {
    return (
        <div className={'min-h-screen flex flex-col'}>
            <Header/>
            <div className={'p-4 m-auto w-full h-fit flex flex-row flex-wrap gap-2'}>
                <PhotoObj url={testimg}/>
                <PhotoObj url={testimg}/>
                <PhotoObj url={testimg}/>
                <PhotoObj url={testimg}/>
                <PhotoObj url={testimg}/>
                <PhotoObj url={testimg}/>
                <PhotoObj url={testimg}/>
                <PhotoObj url={testimg}/>
            </div>
            <section
                className={'relative bg-amber-500 w-10/12 h-fit flex flow-row content-center overflow-hidden items-center'}>
                <div
                    className={"m-auto min-h-fit max-w-md flex flex-row overflow-hidden align-baseline items-center p-3"}>
                    <div className={'p-2.5 space-y-4 w-fit py-5'}>
                        <h2 className={'border-2 border-slate-700 text-center w-fit p-1.5 px-4 rounded-full font-bold text-slate-800 text-lg'}>
                            materialize your vision
                        </h2>
                        <h1 className={'font-bold text-5xl'}>Custom Laser Engraving</h1>
                        <h2 className={'border-2 text-center w-fit p-1.5 px-4 rounded-full'}>Discover Creations</h2>
                    </div>
                    <div className={''}>
                        <PhotoObj url={testimg}/>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default App
