// eslint-disable-next-line no-unused-vars
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import {ContactForm} from "./pages/ContactForm.jsx";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path={'/contact'} element={<ContactForm/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
