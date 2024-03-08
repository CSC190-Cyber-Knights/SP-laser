import {ButtonLink} from '../components/ui/ButtonLink.jsx'
import Footer from '../components/layout/footer.jsx'
import {InfoCard} from '../components/ui/InfoCard.jsx'

{
  /*AboutMe features few css and majority text about client. Also includes header and footer*/
}

const AboutMe = () => {
  return (
    <div
      className={
        "justifyContent: 'flex-end' m-auto flex max-w-7xl flex-col items-center bg-[#ffffff] p-2 font-inter " //css code
      }
    >
      <header className={'entry-header'}>
        <h1
          className={
            'text-center font-semibold tracking-tighter text-slate-500 drop-shadow sm:text-start md:self-start '
          }
        >
          Everything Laser Engraved
        </h1>
      </header>

      {/* Heading 2 */}
      <h2 className={'entry-title w-9/12 items-center pb-8 pt-6 text-2xl font-bold'}>
        The Artistry of a Veteran-Owned Laser Engraving Business
      </h2>

      <div className={'w-4/5'}>
        <div className={'whitespace-pre-line font-poppins'}>
          <p className={'text-balance p-2 indent-8 text-base text-sm text-neutral-700 sm:font-medium'}>
            In the heart of our bustling city in Northern California stands a small yet vibrant business, where
            creativity meets heartfelt dedication. This haven of craftsmanship is not just another engraving studio—it's
            a testament to the passion and sincerity of its owner, a veteran whose journey through service has now
            transcended into the art of personalization.
          </p>
          <p className={'text-balance p-2 indent-8 font-poppins text-base text-sm text-neutral-700 sm:font-medium'}>
            Meet Michael, a veteran whose unwavering commitment and dedication extend far beyond his military service.
            With a heart full of creativity and a soul brimming with passion, he ventured into the realm of laser
            engraving, driven by the desire to create something meaningful for others.
          </p>

          <p className={'text-balance p-2 indent-8 font-poppins text-base text-sm text-neutral-700 sm:font-medium'}>
            Michaels story isn't just about crafting objects; it's about crafting stories. His studio isn't just a
            workshop; it's a space where memories are etched onto various surfaces. From custom-made ideas on tumblers
            to firearms, or to personalized messages to that special someone, Michael's business revolves around
            transforming ordinary objects into cherished keepsakes.
          </p>

          <p className={'text-balance p-2 indent-8 font-poppins text-base text-sm text-neutral-700 sm:font-medium'}>
            What sets his business apart is his dedication to personalization. It's not merely about engraving names or
            dates—it's about capturing the essence of what these items mean to his customers. Whether it's a cherished
            memory or a heartfelt message on a family heirloom, Michael understands the significance of each request.
          </p>

          <p className={'text-balance p-2 indent-8 font-poppins text-base text-sm text-neutral-700 sm:font-medium'}>
            His passion for serving others extends into his business ethos. Michael believes in going beyond just
            providing a service; he strives to create moments that make people happy. He listens intently to each
            customer's story, understanding the sentiment behind the object they wish to personalize. It's this genuine
            connection that adds an extra layer of sincerity to his craft.
          </p>

          <p className={'text-balance p-2 indent-8 font-poppins text-base text-sm text-neutral-700 sm:font-medium'}>
            The veteran's keen attention to detail and commitment to quality reflects his military discipline. Every
            stroke of the laser is deliberate, every engraving meticulously executed, ensuring that each piece leaving
            his studio is a masterpiece in itself.
          </p>
          <p className={'text-balance p-2 indent-8 font-poppins text-base text-sm text-neutral-700 sm:font-medium'}>
            More than an entrepreneur, Michael sees himself as a storyteller, using laser engraving as his medium. He
            weaves narratives into every piece, turning mere objects into repositories of memories and emotions or that
            sincere gift of appreciation.
          </p>
          <p className={'text-balance p-2 indent-8 font-poppins text-base text-sm text-neutral-700 sm:font-medium'}>
            In this era of mass production, Michael's business stands as a beacon of personalized craftsmanship. With a
            veteran's dedication, an artist's creativity, and a sincere passion for making people happy, he's not just
            engraving objects—he's engraving the stories and emotions that make them invaluable. In his studio, the art
            of personalization becomes a legacy, one heartfelt engraving at a time.
          </p>
        </div>
      </div>
      {/* Image to the side*/}
      <div>
        <figure>
          <img
            className={'align=right height=10px p-2'}
            src="https://cdn.pixabay.com/photo/2021/03/08/07/58/laser-6078455_960_720.jpg"
            alt="Photo of Owner"
            style={{width: '300px', height: '250px', float: 'left'}}
          ></img>
        </figure>
      </div>
      {/* Social Links */}
      <div className={'flex flex-row whitespace-pre-line'}>
        <div className={'whitespace-pre-line ps-8 pt-6 font-semibold '}>
          <ButtonLink to={''}>Email</ButtonLink>
        </div>
        <br></br>
        <div className={'whitespace-pre-line ps-8 pt-6 font-semibold '}>
          <ButtonLink to={''}>Instagram</ButtonLink>
        </div>
        <br></br>
        <div className={'whitespace-pre-line ps-8 pt-6 font-semibold '}>
          <ButtonLink to={''}>Twitter </ButtonLink> {/*should this be X or left as twitter?*/}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutMe
