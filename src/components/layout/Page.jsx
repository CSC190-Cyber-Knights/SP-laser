import Header from './Header.jsx'
import Footer from './Footer.jsx'
import {Fragment} from 'react'

export const Page = ({children}) => {
  return (
    <Fragment>
      <Header />
      <div className={'min-h-screen max-w-full'}>{children}</div>
      <Footer />
    </Fragment>
  )
}

export default Page
