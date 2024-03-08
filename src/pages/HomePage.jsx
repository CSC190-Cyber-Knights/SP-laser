import {InfoCard} from '../components/ui/InfoCard.jsx'
import SparklesIcon from '@heroicons/react/20/solid/esm/SparklesIcon.js'
import {EyeIcon, ShieldCheckIcon, UserIcon} from '@heroicons/react/20/solid/index.js'
import {AiFillSave} from 'react-icons/ai'
import {BoltIcon} from '@heroicons/react/24/outline/index.js'
import {ButtonLink} from '../components/ui/ButtonLink.jsx'

{
  /* Homepage features high usage of css and plaintext. It also shows images and a header/footer*/
}

const HomePage = () => {
  return (
    <div
      className={'m-auto flex max-w-7xl flex-col items-center justify-center bg-[#ffffff] p-2 font-inter'} //css code to specify where it is shown
    >
      {/* Hero */}
      <div className={'mt-2 grid max-w-full grid-rows-1 bg-random-line bg-contain px-2 md:grid-cols-2'}>
        {/* Hero Text */}
        <div className={'m-auto flex flex-col items-center gap-2 p-4 text-center sm:items-start md:w-4/5'}>
          <div className={'flex w-full flex-col items-center sm:self-start sm:text-start'}>
            <h1
              className={
                'text-center text-4xl font-semibold tracking-tighter text-red-500 drop-shadow sm:text-start md:self-start lg:text-5xl'
              }
            >
              Everything Laser Engraved
            </h1>
            <h2
              className={
                'm-auto hidden max-w-xs text-center text-xl font-semibold leading-[1.2rem] text-neutral-600 sm:-hidden'
              }
            >
              Crafting Memories, One Laser Beam at a Time.
            </h2>
            <h3
              className={
                'mt-2 w-8/12 self-center text-center text-sm italic leading-tight tracking-tighter text-neutral-500 md:w-8/12 md:self-start md:text-start md:text-lg'
              }
            >
              Explore the Artistry: Click Below to Discover Our Laser-Engraved Masterpieces!
            </h3>
          </div>
          {/* background image: red dot*/}
          <div className={'w-full transition delay-100 md:text-start'}>
            <ButtonLink to={'./Gallery'}>See Gallery</ButtonLink>
          </div>
        </div>
        {/* Hero Image */}
        <div className={'m-auto p-2'}>
          <img
            className={'rounded'}
            src="https://cdn.pixabay.com/photo/2021/03/08/07/58/laser-6078455_960_720.jpg"
            alt="laser engraver"
          />
        </div>
      </div>
      {/* Info Cards Section */}
      <div className={'h-screen'}>
        <div className={'flex w-full items-center p-12 text-center'}>
          <h2 className="w-full items-center bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-center font-poppins text-2xl font-semibold text-transparent sm:text-3xl md:p-2 md:text-4xl">
            Why Laser Engraving?
          </h2>
        </div>

        <div
          className={
            'm-auto grid grid-rows-1 content-center items-start justify-evenly justify-items-center gap-1.5 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3'
          }
        >
          <InfoCard
            color={'orange'}
            icon={<ShieldCheckIcon />}
            title={'Durability & Quality'}
            desc={
              "Unlike other methods, laser engraving etches designs permanently, ensuring they won't fade or wear over time, maintaining quality and durability."
            }
          />
          <InfoCard
            color={'blue'}
            icon={<UserIcon />}
            title={'No Contact'}
            desc={
              "Laser engraving is a non-contact process, meaning there's minimal risk of material damage or deformation"
            }
          />
          <InfoCard
            color={'red'}
            icon={<EyeIcon />}
            title={'Precision'}
            desc={
              'Laser engraving offers unparalleled accuracy, ensuring your designs are reproduced with crisp, clear lines every time.'
            }
          />
          <InfoCard
            color={'green'}
            icon={<BoltIcon />}
            title={'Freedom'}
            desc={
              'Unleash your creativity with unlimited design possibilities - if you can imagine it, laser engraving can create it.'
            }
          />
          <InfoCard
            color={'purple'}
            icon={<AiFillSave />}
            title={'Scalability'}
            desc={
              'From one-off custom pieces to large production runs, laser engraving scales with your needs without losing quality or detail.'
            }
          />
          <InfoCard
            color={'pink'}
            icon={<SparklesIcon />}
            title={'Fine Detailing'}
            desc={
              'Capable of capturing intricate designs and fine details, laser engraving is ideal ' +
              'for both artistic endeavors and precise branding needs.'
            }
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
