// eslint-disable-next-line no-unused-vars
import React from 'react'
import {motion, useScroll, useSpring} from 'framer-motion'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import {ContactForm} from './pages/ContactForm.jsx'
import {SignIn} from './pages/SignIn.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Gallery from './pages/Gallery.jsx'
import {Layout} from './components/layout/Layout.jsx'
import {HomeBeta} from './pages/HomeBeta.jsx'
import {Admin} from './pages/Admin.jsx'

function App() {
  const {scrollYProgress} = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={'/'}
          element={
            <>
              <motion.div className="fixed bottom-0 left-0 right-0 top-0 h-3 transform bg-red-600" style={{scaleX}} />
              <Layout>
                <HomeBeta />
              </Layout>
            </>
          }
        />
        <Route
          path={'/contact'}
          element={
            <Layout>
              <ContactForm />
            </Layout>
          }
        />
        <Route
          path={'/signin'}
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />
        <Route
          path={'/about'}
          element={
            <Layout>
              <AboutMe />
            </Layout>
          }
        />
        <Route
          path={'/gallery'}
          element={
            <Layout>
              <Gallery />
            </Layout>
          }
        />
        <Route
          path={'/admin'}
          element={
            <Layout>
              <Admin />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
