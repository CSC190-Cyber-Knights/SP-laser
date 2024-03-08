// eslint-disable-next-line no-unused-vars
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import {ContactForm} from './pages/ContactForm.jsx'
import {SignIn} from './pages/SignIn.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Gallery from './pages/Gallery.jsx'
import {Layout} from './components/layout/Layout.jsx'
import {HomeBeta} from './pages/HomeBeta.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={'/'}
          element={
            <Layout>
              <HomeBeta />
            </Layout>
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
