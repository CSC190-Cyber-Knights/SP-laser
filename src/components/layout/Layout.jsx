import Header from './Header.jsx'
import PropTypes from 'prop-types'
import Footer from './Footer.jsx'

export const Layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.element, // react component or jsx
}
