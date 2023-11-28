
import { initializeApp} from "firebase/app";
import { getFirestore, collection, getCountFromServer } from 'firebase/firestore'

const db = getFirestore();
const myCollection = collection (db, 'orders');
const snapshot = await getCountFromServer(myCollection);
const collectionCount = snapshot.data().count;

const AboutMe = () => {
  return (
    <div>
        <h2>{collectionCount}</h2>
      <h1>The Artistry of a Veteran-Owned Laser Engraving Business</h1>
      <p>In the heart of our bustling city in Northern California stands a small yet vibrant business, where creativity meets heartfelt dedication. This haven of craftsmanship is not just another engraving studio—it's a testament to the passion and sincerity of its owner, a veteran whose journey through service has now transcended into the art of personalization.

          Meet Michael, a veteran whose unwavering commitment and dedication extend far beyond his military service. With a heart full of creativity and a soul brimming with passion, he ventured into the realm of laser engraving, driven by the desire to create something meaningful for others.

          Michael's story isn't just about crafting objects; it's about crafting stories. His studio isn't just a workshop; it's a space where memories are etched onto various surfaces. From custom-made ideas on tumblers to firearms, or to personalized messages to that special someone, Michael's business revolves around transforming ordinary objects into cherished keepsakes.

          What sets his business apart is his dedication to personalization. It's not merely about engraving names or dates—it's about capturing the essence of what these items mean to his customers. Whether it's a cherished memory or a heartfelt message on a family heirloom, Michael understands the significance of each request.

          His passion for serving others extends into his business ethos. Michael believes in going beyond just providing a service; he strives to create moments that make people happy. He listens intently to each customer's story, understanding the sentiment behind the object they wish to personalize. It's this genuine connection that adds an extra layer of sincerity to his craft.

          The veteran's keen attention to detail and commitment to quality reflects his military discipline. Every stroke of the laser is deliberate, every engraving meticulously executed, ensuring that each piece leaving his studio is a masterpiece in itself.

          More than an entrepreneur, Michael sees himself as a storyteller, using laser engraving as his medium. He weaves narratives into every piece, turning mere objects into repositories of memories and emotions or that sincere gift of appreciation.

          In this era of mass production, Michael's business stands as a beacon of personalized craftsmanship. With a veteran's dedication, an artist's creativity, and a sincere passion for making people happy, he's not just engraving objects—he's engraving the stories and emotions that make them invaluable. In his studio, the art of personalization becomes a legacy, one heartfelt engraving at a time.</p>
      
    </div>
  );
};

export default AboutMe;