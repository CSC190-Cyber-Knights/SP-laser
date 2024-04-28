import {Link} from 'react-router-dom'

import BgVideo from '../components/ui/BgVideo'
import LaserVideo from '../assets/laser_footage.mp4'

export const HomeBeta = () => {
  const HeroText = () => {
    return (
      <>
        <div className="absolute left-1/2 top-1/2 z-20 flex h-fit -translate-x-1/2 -translate-y-1/2 transform flex-col gap-4 p-2 text-center">
          <h1 className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text p-3 text-5xl font-bold text-transparent sm:text-6xl">
            Everything Laser Engraving
          </h1>

          <div>
            <p className="w-full text-balance p-2 pt-8 text-center font-sans text-lg font-extralight text-cad_grey">
              The cutting edge of personalization where your ideas meet the precision of laser engraving to create
              lasting impressions.
              <span className="invisible hidden md:visible ">
                A bespoke gift that speaks volumes, a unique piece of decor that tells your story, or a professional
                mark that sets your brand apart, we bring your vision to life with the perfect blend of craftsmanship
                and innovation.
              </span>
            </p>
          </div>
          <div className="flex justify-center">
            <Link
                id = "gallerybtn"
              to={'/gallery'}
              className="rounded border border-red-500 bg-transparent px-4 py-2 font-semibold capitalize text-red-700 hover:border-transparent hover:bg-red-500 hover:text-white"
            >
              gallery
            </Link>
          </div>
        </div>
      </>
    )
  }

  const headerHeight = 80 // Example header height, adjust as needed
  return (
    <div className="relative m-auto flex w-screen flex-col justify-center p-0">
      <section
        className="relative flex min-h-screen min-w-full flex-col items-center justify-center gap-4 overflow-hidden p-0"
        style={{marginTop: `-${headerHeight}px`}}
      >
        <BgVideo src={LaserVideo} freezeTime={10} />
        {/* Hero & Body */}
        <HeroText />
      </section>

      <section className="flex h-4/5 max-w-full flex-col items-center justify-center gap-1 bg-opacity-40 bg-random-line bg-no-repeat p-8">
        <div className="mb-2 flex w-fit flex-col gap-2 self-center text-center sm:flex-row">
          <h2 className="font-inter text-center text-3xl font-extrabold uppercase md:text-5xl">Lets Collaborate:</h2>
          <div className={'ml-2'}>
            <p className="text-center  text-5xl font-bold text-imposter_red">Michael (me)</p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-2">
          <div className="w-fit self-center rounded-lg backdrop-blur-lg">
            <p className="self-center p-2 text-center font-serif text-2xl">
              I run my engraving business from my own workshop here in Sacramento. All your orders are handled
              personally by me. If it's made of metal ask me about it.
            </p>
          </div>
        </div>
      </section>

      <section className={'flex h-fit w-full flex-col bg-contain'}>
        <section className="body-font bg-gray-900 text-gray-400">
          <div className="container mx-auto px-5 py-24">
            <h1 className="title-font mb-20 text-center text-2xl font-medium text-white sm:text-3xl">
              Durable and Detailed?
              <br className="sm:block" />
              Choose Laser Engraving
            </h1>
            <div className="-mx-4 -mb-10 -mt-4 flex flex-wrap space-y-6 sm:-m-4 md:space-y-0">
              <div className="flex p-4 md:w-1/3">
                <div className="flex-grow pl-6">
                  <h2 className="title-font mb-2 text-lg font-medium text-white">Precision and Detail</h2>
                  <p className="text-base leading-relaxed">
                    Laser engraving offers unbeatable precision and detail in your designs. It allows you to etch
                    complex and intricate patterns with high accuracy, which would be impossible with traditional
                    engraving methods. This makes it ideal for personalization, where every detail matters.
                  </p>
                </div>
              </div>
              <div className="flex p-4 md:w-1/3">
                <div className="flex-grow pl-6">
                  <h2 className="title-font mb-2 text-lg font-medium text-white">Versatile Material Options</h2>
                  <p className="text-base leading-relaxed">
                    With laser engraving, you are not limited to a specific type of material or shape. It can be
                    performed on a wide variety of materials. Firearms, knives, jewelry, and even electronics can be
                    engraved.
                  </p>
                </div>
              </div>
              <div className="flex p-4 md:w-1/3">
                <div className="flex-grow pl-6">
                  <h2 className="title-font mb-2 text-lg font-medium text-white">Speed and Convenience</h2>
                  <p className="text-base leading-relaxed">
                    Laser engraving is an automated process, meaning you can engrave multiple items with the same design
                    quickly and conveniently. Unlike manual engraving, which can be time-consuming and labor-intensive,
                    laser engraving is speedy and efficient.
                  </p>
                  {/* The rest of your HTML goes here */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default HomeBeta
