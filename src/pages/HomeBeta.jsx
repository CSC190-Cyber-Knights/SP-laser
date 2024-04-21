import {Link} from 'react-router-dom'

import BgVideo from '../components/ui/BgVideo'
import LaserVideo from '../assets/laser_footage.mp4'

export const HomeBeta = () => {
  const headerHeight = 80 // Example header height, adjust as needed

  return (
    <div className="relative m-auto flex w-screen flex-col justify-center bg-mat_grey p-0">
      <section
        className="relative flex min-h-screen min-w-full flex-col justify-center gap-4 overflow-hidden p-0"
        style={{marginTop: `-${headerHeight}px`}}
      >
        <BgVideo src={LaserVideo} freezeTime={10} />
        <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 transform flex-col gap-4 p-2 text-center">
          <h2 className="w-full text-center font-sans text-6xl font-bold uppercase text-imposter_red md:text-6xl">
            Everything Laser Engraved
          </h2>
          <div>
            <p className="w-full p-2 pt-8 text-center font-sans text-lg font-extralight text-cad_grey">
              The cutting edge of personalization where your ideas meet the precision of laser engraving to create
              lasting impressions.
              <span className="invisible hidden md:visible ">
                Whether it's a bespoke gift that speaks volumes, a unique piece of decor that tells your story, or a
                professional mark that sets your brand apart, we bring your vision to life with the perfect blend of
                craftsmanship and innovation.
              </span>
            </p>
          </div>
          <Link
            to="/gallery"
            className="self-center rounded-4xl bg-red-700 px-4 py-2 font-sans font-thin text-white shadow-sm hover:bg-red-600"
          >
            Gallery
          </Link>
        </div>
      </section>
      <section className="flex h-screen max-w-full flex-col justify-evenly gap-1 bg-no-repeat p-8">
        <div className="w-fit self-center text-center">
          <h2 className="font-inter text-center text-3xl font-extrabold uppercase text-cad_grey md:text-5xl">
            Lets Collaborate
          </h2>
        </div>
        <div>
          <p className="text-center font-serif text-5xl font-semibold text-imposter_red">I'm Michael</p>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="rounded-lg w-fit self-center backdrop-blur-lg">
            <p className="self-center p-2 text-center font-serif text-2xl text-cad_grey">
              I run my engraving business from my own workshop here in Sacramento. All your orders are handled
              personally by me. If it's made of metal ask me about it.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeBeta
