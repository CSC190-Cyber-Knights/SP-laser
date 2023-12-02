import {InfoCard} from "../components/ui/InfoCard.jsx";
import SparklesIcon from "@heroicons/react/20/solid/esm/SparklesIcon.js";
import RedDot from '../assets/red_dot.svg?react'


const HomePage = () => {
  return (<div className={'flex flex-col font-inter items-center m-auto p-2'}>
        {/* Hero */}
        <div className={'grid grid-rows-1 md:grid-cols-2 px-2 max-w-6xl'}>
          {/* Hero Text */}
          <div className={'flex flex-col text-center m-auto gap-2'}>
            <h1 className={'font-bold text-orange-600 text-4xl tracking-tighter drop-shadow md:text-5xl lg:text-6xl md:text-start text-center'}>
              Everything
              Laser Engraved
            </h1>
            <h2 className={'font-semibold text-neutral-600 text-xl max-w-xs leading-[1.2rem] m-auto hidden sm:-hidden'}>
              Crafting Memories, One Laser Beam at a Time.
            </h2>
            <h3 className={' mt-2 italic md:text-start text-lg text-neutral-500 w-full md:w-8/12 tracking-tighter leading-tight'}>
              Explore the Artistry: Click Below to Discover Our Laser-Engraved Masterpieces!
            </h3>
            {/* background image: red dot*/}
            <div className={'transition delay-100 md:text-start'}>
              <button type="button" className="w-fit h-fit text-white bg-gradient-to-r from-purple-500
              to-pink-500 hover:bg-gradient-to-l focus:outline-none
              focus:ring-purple-200 dark:focus:ring-purple-800 font-semibold rounded-lg text-sm
               px-2.5 py-1.5 text-center me-2 mb-2 mt-8">See Gallery
              </button>
            </div>
          </div>
          {/* Hero Image */}
          <div className={'m-auto p-2'}>
            <img className={'rounded'} src="https://cdn.pixabay.com/photo/2021/03/08/07/58/laser-6078455_960_720.jpg"
                 alt="laser engraver"/>
          </div>
        </div>
        {/* Info Cards Section */}

        <div className={''}>
          <h2 className={'font-semibold text-3xl'}>Discover the Magic of Laser Engraving</h2>

        </div>
        <InfoCard icon={<SparklesIcon/>} title={'Fine Detailing'}
                  desc={'Capable of capturing intricate designs and fine details, laser engraving is ideal ' + 'for both artistic endeavors and precise branding needs.'}/>
      </div>

  );
};

export default HomePage;