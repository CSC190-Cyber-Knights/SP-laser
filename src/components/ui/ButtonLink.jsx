import {Link} from 'react-router-dom'

export const ButtonLink = ({to, children}) => {
  return (
    <Link to={to}>
      <button
        type="button"
        className="mb-2 me-2 mt-8 h-fit w-fit
              rounded-lg bg-gradient-to-r from-purple-500
              to-pink-500 px-2.5 py-1.5 text-center text-sm
               font-semibold text-white hover:bg-gradient-to-l focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
      >
        {children}
      </button>
    </Link>
  )
}
