// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./components/layout/header.jsx";

function App() {
    return (
        <div className={'min-h-screen flex flex-col'}>
            <Header/>
            <section className={'relative bg-amber-500 w-10/12 h-fit flex flow-row content-center overflow-hidden items-center'}>
                <div className={"m-auto min-h-fit max-w-md flex flex-row overflow-hidden align-baseline items-center p-3"}>
                    <div className={'p-2.5 space-y-4 w-fit py-5'}>
                        <h2 className={'border-2 border-slate-700 text-center w-fit p-1.5 px-4 rounded-full font-bold text-slate-800 text-lg'}>
                            materialize your vision
                        </h2>
                        <h1 className={'font-bold text-5xl'}>Custom Laser Engraving</h1>
                        <h2 className={'border-2 text-center w-fit p-1.5 px-4 rounded-full'}>Discover Creations</h2>
                    </div>
                    <div className={''}>

                    </div>
                </div>


            </section>

        </div>
    )
}

export default App
