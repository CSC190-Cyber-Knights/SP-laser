import Header from './header.jsx';
import PropTypes from 'prop-types';

export const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element, // react component or jsx
};
