import Header from './header.jsx'
import PropTypes from 'prop-types'
import Footer from './footer.jsx'

export const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element, // react component or jsx
}
