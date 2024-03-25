import BgVideo from '../components/ui/BgVideo'
import LaserVideo from '../assets/laser_footage.mp4'
export const HomeBeta = () => {
  return (
    <div className=" m-auto flex w-screen flex-col justify-center bg-mat_grey p-0">
      <section className=" flex min-h-screen min-w-full flex-col items-start justify-center  gap-4 overflow-hidden p-0">
        <BgVideo src={LaserVideo} freezeTime={10} />
        <div className="z-20 flex w-3/4 flex-col gap-4 pl-8">
          <div className="">
            <h2 className="font-sans text-8xl font-bold uppercase text-imposter_red">Precision Laser Engraving</h2>
          </div>

          <div>
            <p className="w-fit font-sans text-lg font-extralight text-cad_grey">
              Welcome to the cutting edge of personalization—where your ideas meet the precision of laser engraving to
              create lasting impressions. Whether it's a bespoke gift that speaks volumes, a unique piece of decor that
              tells your story, or a professional mark that sets your brand apart, we bring your vision to life with the
              perfect blend of craftsmanship and innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="flex h-screen flex-col justify-evenly gap-4 bg-no-repeat p-8">
        <div className="w-fit self-center text-center">
          <h2 className="font-inter text-center text-5xl font-extrabold uppercase text-cad_grey">Lets Collaborate</h2>
        </div>
        <div>
          <p className="  text-center font-serif text-9xl font-semibold text-imposter_red">I'm Michael</p>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="rounded-lg w-fit items-center self-center  backdrop-blur-lg ">
            <p className=" self-center p-2 text-center font-serif text-3xl text-cad_grey">
              I run my engraving business from my own workshop here in Sacramento. All your orders are handled
              personally by me. If its made of metal ask me about it.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default HomeBeta
