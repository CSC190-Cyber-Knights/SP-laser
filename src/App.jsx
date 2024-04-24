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
import GalleryItem from './pages/gallery/GalleryItem.jsx'
import LoadPhotos from './pages/gallery/LoadPhotos.jsx'
import DELETELATER from './pages/DELETELATER.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import {auth} from './services/firebase.js'
import {onAuthStateChanged} from 'firebase/auth'
import {ProtectedRoute} from './components/AuthContext/protectedRoute.jsx'
import {useEffect, useState} from 'react'

function App() {
  const [user, setUser] = useState(null)
  const [isFetching, setIsFetching] = useState(true)

  //user auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        setIsFetching(false)
        return
      }
      setUser(null)
      setIsFetching(false)
    })
    //cleanup function
    return () => unsubscribe()
  })
  const {scrollYProgress} = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  if (isFetching) {
    return <h2>Loading...</h2>
  }
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
            <ProtectedRoute user={user}>
              <Layout>
                <Admin />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path={'/gallery/:itemId'}
          element={
            <Layout>
              <LoadPhotos />
            </Layout>
          }
        />
        <Route
          path={'/del'}
          element={
            <Layout>
              <DELETELATER />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <ErrorPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
