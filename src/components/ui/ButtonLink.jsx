import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <button
        type="button"
        className="w-fit h-fit text-white bg-gradient-to-r from-purple-500
              to-pink-500 hover:bg-gradient-to-l focus:outline-none
              focus:ring-purple-200 dark:focus:ring-purple-800 font-semibold rounded-lg text-sm
               px-2.5 py-1.5 text-center me-2 mb-2 mt-8"
      >
        {children}
      </button>
    </Link>
  );
};
