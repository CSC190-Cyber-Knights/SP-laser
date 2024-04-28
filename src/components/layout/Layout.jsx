import Header from './Header.jsx'
import Footer from './Footer.jsx'
import {Fragment} from 'react'

/**
 * Page Layout
 * Main Layout for the website
 * Contains the Header and Footer
 * Children are the main content of the page
 * @param {object} children - React Component or JSX
 * @returns {JSX.Element}
 */
export const Layout = ({children}) => {
  return (
    <Fragment>
      <div className={'flex min-h-screen w-full flex-col'}>
        <Header />
        {children}
        <Footer />
      </div>
    </Fragment>
  )
}

export default Layout
