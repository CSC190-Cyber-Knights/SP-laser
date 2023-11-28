import {InfoCard} from "../components/ui/InfoCard.jsx";

import SparklesIcon from "@heroicons/react/20/solid/esm/SparklesIcon.js";


const HomePage = () => {
  return (
      <div className={'flex flex-col items-start'}>
        {/* Hero */}
        <div className={''}>
          {/* Hero Text */}
          <div className={''}>

          </div>
          {/* Hero Image */}
          <div className={''}>

          </div>
        </div>

        {/* Info Cards Section */}
        <div className={''}>

        </div>

        <h1>this is going to be the homepage</h1>

        <InfoCard icon={<SparklesIcon/>} title={'Fine Detailing'}
                  desc={'Capable of capturing intricate designs and fine details, laser engraving is ideal ' +
                      'for both artistic endeavors and precise branding needs.'}/>

      </div>

  );
};

export default HomePage;