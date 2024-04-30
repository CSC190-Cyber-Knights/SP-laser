import {Photo} from '../components/ui/media/Photo.jsx'

const AboutMe = () => {
  const photos = [
    {
      src: './public/static/assets/engraved_glock.jpeg',
      alt: 'Engraved Glock',
    },
    {
      src: './public/static/assets/flask.jpeg',
      alt: 'Engraved Flask',
    },
    {
      src: './public/static/assets/lighter.jpeg',
      alt: 'Engraved Lighter',
    },
  ]

  return (
    <div className="flex h-screen w-full flex-col items-center p-3 text-center">
      <div className={'flex w-full flex-col items-center bg-texture'}>
        <h1 className=" lg:tex-4xl mx-5 mt-4 w-fit rounded bg-red-400  p-2 px-3 text-3xl font-semibold">
          Veteran-Owned Laser Engraving Artistry
        </h1>
        <div className={' sm w-full sm:w-2/3'}>
          <div className="mb-3 grid grid-cols-3 justify-center gap-3 p-4 px-5">
            {photos && photos.map((photo, index) => <Photo key={index} src={photo.src} alt={photo.alt} />)}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 p-4 sm:m-5 sm:max-w-screen-lg">
        {/* Rest of the content */}
        <div className="px-6 text-justify font-light lg:px-32">
          <p className="mt-2 text-balance font-semibold italic text-neutral-500">
            "In the heart of our bustling city in Northern California stands a small yet vibrant business, where
            creativity meets heartfelt dedication. This haven of craftsmanship is not just another engraving studio—it's
            a testament to the passion and sincerity of its owner, a veteran whose journey through service has now
            transcended into the art of personalization"
          </p>
          <p className="mt-4">
            Meet Michael, a veteran whose unwavering commitment and dedication extend far beyond his military service...
          </p>
          <p className="mt-4">His passion for serving others extends into his business ethos. Michael believes...</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
