import PropTypes from "prop-types";

/**
 * `InfoCard` is a reusable React component that displays a card with an icon, a title, and a description.
 * It is designed to be used within a larger UI to present information in a clear, concise, and visually appealing manner.
 *
 * Props:
 * - `icon` (element): A React component or JSX representing the icon to be displayed. This should be sized to fit within a 32x32px area to align with the design.
 * - `title` (string): The title of the card. This should be a short, descriptive heading.
 * - `desc` (string): The description text for the card. This text provides additional information about the title.
 *
 * Usage:
 * ```
 * <InfoCard
 *   icon={<YourIconComponent />}  // Replace with your actual icon component or JSX
 *   title="Your Title Here"
 *   desc="Your description text goes here. It can be longer to provide more context."
 * />
 * ```
 *
 * Note: Ensure that the `icon` prop is given a React component or JSX that fits the size constraints of the card design.
 * The `title` and `desc` props should be strings. The component uses Tailwind CSS for styling, so make sure that Tailwind is properly configured in your project.
 */
export const InfoCard = ({ icon, title, desc, color }) => {
  // define the colors we can use to style these boxes
  const colorClasses = {
    red: "bg-red-200",
    blue: "bg-blue-200",
    green: "bg-green-200",
    yellow: "bg-yellow-200",
    orange: "bg-orange-200",
    purple: "bg-purple-200",
    pink: "bg-pink-200",
    teal: "bg-teal-200",
    indigo: "bg-indigo-200",
    gray: "bg-gray-200",
    lime: "bg-lime-200",
    emerald: "bg-emerald-200",
    cyan: "bg-cyan-200",
    fuchsia: "bg-fuchsia-200",
    rose: "bg-rose-200",
    sky: "bg-sky-200",
    violet: "bg-violet-200",
    amber: "bg-amber-200",
  };
  const bgColor = colorClasses[color] || colorClasses.gray;

  return (
    <div
      className={`transition delay-75 h-fit m-2 p-3 gap-1.5 flex flex-col sm:max-w-xs w-80 font-poppins shadow-lg ${bgColor} rounded-lg hover:shadow-sm`}
    >
      {/* Header - Simplified className string */}
      <div className="flex flex-row items-center gap-3 pt-2">
        <div className="h-6 w-6 flex-shrink-0">{icon}</div>
        <h2 className="text-xl text-neutral-600 font-bold leading-tighter tracking-tight">
          {title}
        </h2>
      </div>
      {/* Description - Simplified className string and corrected `text-md` to `text-base` for proper Tailwind class */}
      <p className="p-2 text-sm text-neutral-700 font-poppins sm:font-medium">
        {desc}
      </p>
    </div>
  );
};

InfoCard.propTypes = {
  icon: PropTypes.element.isRequired, // react component or jsx
  title: PropTypes.element.isRequired,
  desc: PropTypes.element.isRequired,
  color: PropTypes.element.isRequired,
};
