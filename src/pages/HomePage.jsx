import { InfoCard } from "../components/ui/InfoCard.jsx";
import SparklesIcon from "@heroicons/react/20/solid/esm/SparklesIcon.js";
import {
  EyeIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/20/solid/index.js";
import { AiFillSave } from "react-icons/ai";
import { BoltIcon } from "@heroicons/react/24/outline/index.js";
import { ButtonLink } from "../components/ui/ButtonLink.jsx";

const HomePage = () => {
  return (
    <div
      className={
        "flex flex-col font-inter items-center m-auto p-2 bg-[#ffffff] max-w-7xl"
      }
    >
      {/* Hero */}
      <div
        className={
          "grid grid-rows-1 md:grid-cols-2 px-2 mt-2 max-w-full bg-random-line bg-contain"
        }
      >
        {/* Hero Text */}
        <div
          className={
            "flex flex-col m-auto gap-2 p-4 md:w-4/5 sm:items-start items-center text-center"
          }
        >
          <div
            className={
              "w-full flex flex-col items-center sm:text-start sm:self-start"
            }
          >
            <h1
              className={
                "md:self-start font-semibold text-red-500 text-4xl tracking-tighter drop-shadow lg:text-5xl sm:text-start text-center"
              }
            >
              Everything Laser Engraved
            </h1>
            <h2
              className={
                "font-semibold text-neutral-600 text-xl max-w-xs leading-[1.2rem] m-auto hidden sm:-hidden text-center"
              }
            >
              Crafting Memories, One Laser Beam at a Time.
            </h2>
            <h3
              className={
                "md:self-start md:text-start text-sm text-center mt-2 italic self-center md:text-lg text-neutral-500 w-8/12 md:w-8/12 tracking-tighter leading-tight"
              }
            >
              Explore the Artistry: Click Below to Discover Our Laser-Engraved
              Masterpieces!
            </h3>
          </div>
          {/* background image: red dot*/}
          <div className={"transition delay-100 md:text-start w-full"}>
            <ButtonLink to={"./Gallery.jsx"}>See Gallery</ButtonLink>
          </div>
        </div>
        {/* Hero Image */}
        <div className={"m-auto p-2"}>
          <img
            className={"rounded"}
            src="https://cdn.pixabay.com/photo/2021/03/08/07/58/laser-6078455_960_720.jpg"
            alt="laser engraver"
          />
        </div>
      </div>
      {/* Info Cards Section */}

      <div className={"p-12 m-auto"}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl md:p-10 text-center font-poppins font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
          Why Laser Engraving?
        </h2>
      </div>

      <div
        className={
          "grid lg:grid-cols-3 sm:grid-rows-2 sm:grid-cols-2 grid-rows-1 justify-evenly justify-items-center content-center m-auto gap-1.5 items-start"
        }
      >
        <InfoCard
          color={"orange"}
          icon={<ShieldCheckIcon />}
          title={"Durability & Quality"}
          desc={
            "Unlike other methods, laser engraving etches designs permanently, ensuring they won't fade or wear over time, maintaining quality and durability."
          }
        />
        <InfoCard
          color={"blue"}
          icon={<UserIcon />}
          title={"No Contact"}
          desc={
            "Laser engraving is a non-contact process, meaning there's minimal risk of material damage or deformation"
          }
        />
        <InfoCard
          color={"red"}
          icon={<EyeIcon />}
          title={"Precision"}
          desc={
            "Laser engraving offers unparalleled accuracy, ensuring your designs are reproduced with crisp, clear lines every time."
          }
        />
        <InfoCard
          color={"green"}
          icon={<BoltIcon />}
          title={"Freedom"}
          desc={
            "Unleash your creativity with unlimited design possibilities - if you can imagine it, laser engraving can create it."
          }
        />
        <InfoCard
          color={"purple"}
          icon={<AiFillSave />}
          title={"Scalability"}
          desc={
            "From one-off custom pieces to large production runs, laser engraving scales with your needs without losing quality or detail."
          }
        />
        <InfoCard
          color={"pink"}
          icon={<SparklesIcon />}
          title={"Fine Detailing"}
          desc={
            "Capable of capturing intricate designs and fine details, laser engraving is ideal " +
            "for both artistic endeavors and precise branding needs."
          }
        />
      </div>
    </div>
  );
};

export default HomePage;
