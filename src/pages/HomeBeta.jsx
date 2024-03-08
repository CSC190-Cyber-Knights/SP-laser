import Balancer from 'react-wrap-balancer'
export const HomeBeta = () => {
  return (
    <div className="">
      <section className="flex h-screen flex-col items-start justify-center gap-4 p-8">
        <div className="">
          <h2 className="font-poppins text-8xl font-extrabold uppercase">
            <Balancer>Precision Laser Engraving</Balancer>
          </h2>
        </div>

        <div>
          <p className="font-serif text-zinc-500">
            <Balancer>
              Welcome to the cutting edge of personalization—where your ideas meet the precision of laser engraving to
              create lasting impressions. Our state-of-the-art laser technology transforms ordinary objects into
              extraordinary treasures, etching your memories, designs, and messages with unparalleled accuracy. Whether
              it's a bespoke gift that speaks volumes, a unique piece of decor that tells your story, or a professional
              mark that sets your brand apart, we bring your vision to life with the perfect blend of craftsmanship and
              innovation.
            </Balancer>
          </p>
        </div>
      </section>

      <section className="flex h-screen flex-col justify-evenly gap-4 bg-no-repeat p-8">
        <div className="w-fit self-center text-center">
          <h2 className="text-center font-inter text-5xl font-extrabold uppercase">
            <Balancer>Lets Collaborate</Balancer>
          </h2>
        </div>
        <div>
          <p className="  text-center font-serif text-9xl font-semibold">
            <Balancer>I'm Michael</Balancer>
          </p>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="w-fit items-center self-center rounded-lg  backdrop-blur-lg ">
            <p className=" self-center p-2 text-center font-serif text-3xl text-gray-600">
              <Balancer>
                I run my engraving business from my own workshop here in Sacramento. All your orders are handled
                personally by me. If its made of metal ask me about it.
              </Balancer>
            </p>
          </div>
          <div className="w-fit justify-center"></div>
        </div>
      </section>
    </div>
  )
}
export default HomeBeta
