import {ButtonLink} from '../components/ui/ButtonLink.jsx'

const AboutMe = () => {
  return (
    <div className="bg-blue-900 py-8 text-center text-white">
      <div>
        <h1 className="py-8 text-3xl font-semibold text-neutral-200">
          The Artistry of a Veteran-Owned Laser Engraving Business
        </h1>
        <img
          className="align-left mx-auto mb-10 mt-6 w-64 rounded-full p-2"
          src="https://cdn.pixabay.com/photo/2021/03/08/07/58/laser-6078455_960_720.jpg"
          alt="Photo of Owner"
        />
      </div>

      {/* Rest of the content */}
      <div className="px-6 text-justify font-light lg:px-32">
        <p className="mt-2 font-semibold italic text-neutral-500">
          "In the heart of our bustling city in Northern California stands a small yet vibrant business, where
          creativity meets heartfelt dedication. This haven of craftsmanship is not just another engraving studio—it's a
          testament to the passion and sincerity of its owner, a veteran whose journey through service has now
          transcended into the art of personalization"
        </p>

        <p className="mt-4">
          Meet Michael, a veteran whose unwavering commitment and dedication extend far beyond his military service...
        </p>

        <p className="mt-4">His passion for serving others extends into his business ethos. Michael believes...</p>
      </div>
    </div>
  )
}

export default AboutMe
