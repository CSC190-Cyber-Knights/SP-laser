import {InfoCard} from "../components/ui/InfoCard.jsx";
import SparklesIcon from "@heroicons/react/20/solid/esm/SparklesIcon.js";
import RedDot from '../assets/red_dot.svg?react'


const HomePage = () => {
  return (
      <div className={'flex flex-col font-inter items-center m-auto p-1'}>
        {/* Hero */}
        <div className={'grid grid-rows-2 md:grid-cols-2'}>
          {/* Hero Text */}
          <div className={'flex flex-col text-start m-auto'}>
            <h1 className={'font-bold text-orange-600 text-6xl tracking-tighter'}>Bespoke</h1>
            <h2 className={'font-semibold text-neutral-600 text-2xl'}>/bəˈspōk/</h2>
            <h3 className={'italic text-lg text-neutral-500'}>definition: Specially made for a particular person</h3>
            {/* background image: red dot*/}
            <button>
              
            </button>
          </div>
          {/* Hero Image */}
          <div className={''}>
            <img src="https://cdn.pixabay.com/photo/2021/03/08/07/58/laser-6078455_960_720.jpg" alt="laser engraver"/>
          </div>
        </div>
        {/* Info Cards Section */}
        <div className={''}>

        </div>
        <InfoCard icon={<SparklesIcon/>} title={'Fine Detailing'}
                  desc={'Capable of capturing intricate designs and fine details, laser engraving is ideal ' +
                      'for both artistic endeavors and precise branding needs.'}/>
      </div>

  );
};

export default HomePage;