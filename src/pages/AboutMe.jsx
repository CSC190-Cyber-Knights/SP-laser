import { ButtonLink } from "../components/ui/ButtonLink.jsx";

{/*AboutMe features few css and majority text about client. Also includes header and footer*/
}

const AboutMe = () => {
  return (<div style={{ display: 'flex', alignItems: 'center' }} >

    <div
    >
       {/* Heading 1 */}
      <h1 className='text-center text-3xl font-semibold py-8 text-red-500'>The Artistry of a Veteran-Owned Laser Engraving Business</h1> {/*Start of body of About Me, center text, text size, bold text */}
      <hr className="border-top: 1px solid red"
      >
      </hr>
      <div style={{ margin: '50px' }}
      >
        <p
          className={"text-balance text-base indent-8 p-2 text-sm 0 sm:font-medium text-center mt-2 italic self-center md:text-lg text-neutral-500 w-8/12 md:w-8/12"}>
          In the heart of our bustling city in Northern California stands a small yet vibrant business, where
          creativity meets heartfelt dedication. This haven of craftsmanship is not just another engraving
          studio—it's a testament to the passion and sincerity of its owner, a veteran whose journey through service has now
          transcended into the art of personalization.
        </p>
        <p style={{ fontWeight: 'bold' }}
          className={"text-balance text-base indent-8 p-2 text-sm text-neutral-700 font-poppins sm:font-medium "}>
          Meet Michael, a veteran whose unwavering commitment and dedication extend far beyond his military service.
          With a heart full of creativity and a soul brimming with passion, he ventured into the realm of laser
          engraving, driven by the desire to create something meaningful for others. 
          Michaels story isn't just about crafting objects; it's about crafting stories. His studio isn't just a
          workshop; it's a space where memories are etched onto various surfaces. From custom-made ideas on tumblers
          to firearms, or to personalized messages to that special someone, Michael's business revolves around transforming
          ordinary objects into cherished keepsakes.
  
          What sets his business apart is his dedication to personalization. It's not merely about engraving names
          or
          dates—it's about capturing the essence of what these items mean to his customers. Whether it's a cherished
          memory or a heartfelt message on a family heirloom, Michael understands the significance of each request.


        <p style={{ fontWeight: 'bold' }}
          className={"text-balance text-base indent-8 p-2 text-sm text-neutral-700 font-poppins sm:font-medium"
          }>
            
          His passion for serving others extends into his business ethos. Michael believes in going beyond just
          providing a service; he strives to create moments that make people happy. He listens intently to each
          customer's story, understanding the sentiment behind the object they wish to personalize. It's this
          genuine
          connection that adds an extra layer of sincerity to his craft.

          The veteran's keen attention to detail and commitment to quality reflects his military discipline. Every
          stroke of the laser is deliberate, every engraving meticulously executed, ensuring that each piece leaving
          his
          studio is a masterpiece in itself.

          More than an entrepreneur, Michael sees himself as a storyteller, using laser engraving as his medium. He
          weaves narratives into every piece, turning mere objects into repositories of memories and emotions or
          that
          sincere gift of appreciation.

          In this era of mass production, Michael's business stands as a beacon of personalized craftsmanship. With
          a
          veteran's dedication, an artist's creativity, and a sincere passion for making people happy, he's not just
          engraving objects—he's engraving the stories and emotions that make them invaluable. In his studio, the
          art of
          personalization becomes a legacy, one heartfelt engraving at a time.
        
        </p>

        
    
        </p>
      </div>
    </div>
    {/*Side box with image and links */}
    <div style={{ alignItems: 'center', border: '4px solid #ccc', padding: '30px', borderRadius: '10px' }}

    >

      <img className={'align=left p-2 height=10px'}
        src="https://cdn.pixabay.com/photo/2021/03/08/07/58/laser-6078455_960_720.jpg"
        alt='Photo of Owner'
        style={{ width: '200px', marginLeft: '20px' }}
      >
      </img>
      {/*line to seperate */}
      <hr className="border-top: 1px solid red, border-radius: 5px"
      >
      </hr>
      {/* Social Links */}
      <div
        className={"flex flex-row whitespace-pre-line"}
      >
        <div
          className={"font-semibold whitespace-pre-line ps-8 pt-6 "}
        >
          <ButtonLink to={"https://www.google.com/"}>Email</ButtonLink>
        </div>
        <br>

        </br>
        <div
          className={"font-semibold whitespace-pre-line ps-8 pt-6 "}
        >
          <ButtonLink to={"https://www.instagram.com"}>Instagram</ButtonLink>
        </div>
        <br>
        </br>
        <div
          className={"font-semibold whitespace-pre-line ps-8 pt-6 "}
        >
          <ButtonLink to={"https://www.twitter.com/"}>Twitter </ButtonLink> {/*should this be X or left as twitter?*/}
        </div>
      </div>
    </div>
  </div>
  );
};

export default AboutMe;