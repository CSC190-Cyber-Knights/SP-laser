import {Photo} from '../components/ui/media/Photo.jsx'
import glockPic from '../../static/engraved_glock.jpeg'
import flaskPic from '../../static/flask.jpeg'
import lighterPic from '../../static/lighter.jpeg'
const AboutMe = () => {
  const photos = [
    {
      src: glockPic,
      alt: 'Engraved Glock',
    },
    {
      src: flaskPic,
      alt: 'Engraved Flask',
    },
    {
      src: lighterPic,
      alt: 'Engraved Lighter',
    },
  ]

  return (
    <div className="flex h-fit min-h-screen w-full flex-col items-center p-3 text-center">
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
            transcended into the art of personalization."
          </p>
          <p className="mt-4">
            Meet Michael, a veteran whose unwavering commitment and dedication extend far beyond his military service.
            With a heart full of creativity and a soul brimming with passion, he ventured into the realm of laser
            engraving, driven by the desire to create something meaningful for others. Michaels story isn't just about
            crafting objects; it's about crafting stories. His studio isn't just a workshop; it's a space where memories
            are etched onto various surfaces. From custom-made ideas on tumblers to firearms, or to personalized
            messages to that special someone, Michael's business revolves around transforming ordinary objects into
            cherished keepsakes. What sets his business apart is his dedication to personalization. It's not merely
            about engraving names or dates—it's about capturing the essence of what these items mean to his customers.
            Whether it's a cherished memory or a heartfelt message on a family heirloom, Michael understands the
            significance of each request. memory or a heartfelt message on a family heirloom, Michael understands the
            significance of each request.
          </p>
          <p className="mt-4">
            His passion for serving others extends into his business ethos. Michael believes in going beyond just
            providing a service; he strives to create moments that make people happy. He listens intently to each
            customer's story, understanding the sentiment behind the object they wish to personalize. It's this genuine
            connection that adds an extra layer of sincerity to his craft. The veteran's keen attention to detail and
            commitment to quality reflects his military discipline. Every stroke of the laser is deliberate, every
            engraving meticulously executed, ensuring that each piece leaving his studio is a masterpiece in itself.
            More than an entrepreneur, Michael sees himself as a storyteller, using laser engraving as his medium. He
            weaves narratives into every piece, turning mere objects into repositories of memories and emotions or that
            sincere gift of appreciation. In this era of mass production, Michael's business stands as a beacon of
            personalized craftsmanship. With a veteran's dedication, an artist's creativity, and a sincere passion for
            making people happy, he's not just engraving objects—he's engraving the stories and emotions that make them
            invaluable. In his studio, the art of personalization becomes a legacy, one heartfelt engraving at a time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
