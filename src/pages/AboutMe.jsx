
import {ButtonLink} from "../components/ui/ButtonLink.jsx";
import Footer from "../components/layout/footer.jsx";
import { InfoCard } from "../components/ui/InfoCard.jsx";

const AboutMe = () => {
  return (
      <div
      className={
        "flex flex-col font-inter items-center m-auto p-2 bg-[#ffffff] max-w-7xl justifyContent: 'flex-end' "
      }
      >
        <header
        className={
          "entry-header"
        }
        >
        <h1
            className={
              "md:self-start font-semibold tracking-tighter drop-shadow sm:text-start text-center "

            }
        >
          Everything Laser Engraved
        </h1>
        </header>

         {/* Heading 2 */} 
        <h2
            className={
              "entry-title font-bold pt-6 pb-8 text-decoration-line: overline;"
            }
            style={{color: "red", fontSize: "16px"}}
        >
          The Artistry of a Veteran-Owned Laser Engraving Business
        </h2>

        
        <div
            className={
                "w-1/2"
            }
        >
            <div
                className={
                "whitespace-pre-line"}
            >
              <p
              className={
                "text-balance text-base indent-8 p-2 text-sm text-neutral-700 font-poppins sm:font-medium"
              }>
                In the heart of our bustling city in Northern California stands a small yet vibrant business, where
                creativity meets heartfelt dedication. This haven of craftsmanship is not just another engraving studio—it's a
                testament to the passion and sincerity of its owner, a veteran whose journey through service has now
                transcended into the art of personalization.
                </p>
                <p
                className={
                  "text-balance text-base indent-8 p-2 text-sm text-neutral-700 font-poppins sm:font-medium"
                }>
                Meet Michael, a veteran whose unwavering commitment and dedication extend far beyond his military service.
                With a heart full of creativity and a soul brimming with passion, he ventured into the realm of laser
                engraving, driven by the desire to create something meaningful for others.
                </p>

                <p
                className={
                  "text-balance text-base indent-8 p-2 text-sm text-neutral-700 font-poppins sm:font-medium"
                }>
                Michaels story isn't just about crafting objects; it's about crafting stories. His studio isn't just a
                workshop; it's a space where memories are etched onto various surfaces. From custom-made ideas on tumblers to
                firearms, or to personalized messages to that special someone, Michael's business revolves around transforming
                ordinary objects into cherished keepsakes.
                </p>

                <p
                className={
                "text-balance text-base indent-8 p-2 text-sm text-neutral-700 font-poppins sm:font-medium"
      
              }>
                What sets his business apart is his dedication to personalization. It's not merely about engraving names or
                dates—it's about capturing the essence of what these items mean to his customers. Whether it's a cherished
                memory or a heartfelt message on a family heirloom, Michael understands the significance of each request.
                </p>

                <p
                className={
                  "text-balance text-base indent-8 p-2 text-sm text-neutral-700 font-poppins sm:font-medium"
                }>
                His passion for serving others extends into his business ethos. Michael believes in going beyond just
                providing a service; he strives to create moments that make people happy. He listens intently to each
                customer's story, understanding the sentiment behind the object they wish to personalize. It's this genuine
                connection that adds an extra layer of sincerity to his craft.
                </p>

                <p
                className={
                  "text-balance text-base indent-8 p-2 text-sm text-neutral-700 font-poppins sm:font-medium"
                }>
                The veteran's keen attention to detail and commitment to quality reflects his military discipline. Every
                stroke of the laser is deliberate, every engraving meticulously executed, ensuring that each piece leaving his
                studio is a masterpiece in itself.
                </p>
                <p
                className={
                "text-balance text-base indent-8 p-2 text-sm text-neutral-700 font-poppins sm:font-medium"
              }>
                More than an entrepreneur, Michael sees himself as a storyteller, using laser engraving as his medium. He
                weaves narratives into every piece, turning mere objects into repositories of memories and emotions or that
                sincere gift of appreciation.
                </p>
                <p
                className={
                  "text-balance text-base indent-8 p-2 text-sm text-neutral-700 font-poppins sm:font-medium"
                }>
                In this era of mass production, Michael's business stands as a beacon of personalized craftsmanship. With a
                veteran's dedication, an artist's creativity, and a sincere passion for making people happy, he's not just
                engraving objects—he's engraving the stories and emotions that make them invaluable. In his studio, the art of
                personalization becomes a legacy, one heartfelt engraving at a time.
                </p>
            </div>
        </div>
         {/* Image to the side*/}
         <div>
          <figure
          >
          <img className={'align=right p-2 height=10px'}
            src= "https://cdn.pixabay.com/photo/2021/03/08/07/58/laser-6078455_960_720.jpg"
            alt='Photo of Owner'  
            style={{width:'300px', height: '250px', float: 'left'}}
          >
          </img>
          </figure>

         </div>
         {/* Social Links */}
          <div
              className={ 
                "flex flex-row whitespace-pre-line"
              }
          >
              <div
                  className={
                      "font-semibold whitespace-pre-line ps-8 pt-6 "
                  }
              >
                <ButtonLink to={""}>Email</ButtonLink>
              </div>
              <br>

              </br>
              <div
                  className={
                      "font-semibold whitespace-pre-line ps-8 pt-6 "
                  }
              >
                <ButtonLink to={""}>Instagram</ButtonLink>
              </div>
              <br>
              </br>
              <div
                  className={
                      "font-semibold whitespace-pre-line ps-8 pt-6 "
                  }
              >
                <ButtonLink to={""}>Twitter  </ButtonLink>
              </div>
          </div>
          <Footer/>
      </div>
  );
};

export default AboutMe;