import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Home from './views/Home'
import Header from './components/Header'
import { Theme } from './Theme'
import { ThemeProvider } from 'styled-components';
import Dev from './views/Dev'
import Photo from './views/Photo'
import About from './views/About'
import NotFound from './views/404'
import Menu from './components/Menu'
import Preloader from './components/Preloader'
import { Loader } from './components/Loader/style'
import Cursor from './components/Cursor'
import { hideCursor, showCursor, addClickEventListeners, removeClickEventListeners } from './util'

function App() {

  const [menuActive, setMenuActive] = useState(false)
  const [linkHover, setLinkHover] = useState(false)
  const [preloaderActive, setPreloaderActive] = useState(true)
  const [homeAnimationHasRun, setHomeAnimationHasRun] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isHomepage, setIsHomepage] = useState(true)

  useEffect(() => {
    setTimeout(() => setPreloaderActive(false), 4500)
    setTimeout(() => setHomeAnimationHasRun(true), 12000)
    addClickEventListeners(setLinkHover)
  }, [])

  useEffect(() => {
    if (window.location.href === ('http://localhost:3000/' || 'https://chrisfollen.com')) {
      setIsHomepage(true)
    } else {
      setIsHomepage(false)
    }
  }, [window.location.href])

  const toggleMenu = () => {
    if (menuActive) {
      setMenuActive(false)
    } else {
      setMenuActive(true)
    }
  }

  const handlePageLoad = () => {
      removeClickEventListeners(setLinkHover)
      setLoading(true)
      setTimeout(() => setLoading(false), 2500)
      setTimeout(() => addClickEventListeners(setLinkHover), 2000)
  }

  const updateCursor = (event) => {
    const cursor = document.querySelector(".cursor")
    cursor.style.left = `${event.pageX}px`
    cursor.style.top = `${event.pageY}px`
    if(linkHover === true){
      cursor.style.transform = 'scale(2) translate(-25%, -25%)'
    } else {
      cursor.style.transform = 'scale(1) translate(-50%, -50%)'
    }
  }

  return (
        <ThemeProvider theme={Theme}>
            <Router>
              <div onMouseMove={updateCursor} onScroll={updateCursor} onMouseLeave={hideCursor} onMouseEnter={showCursor}>
                {preloaderActive && <Preloader/>}
                {loading && <Loader/>}
                <Cursor/>
                <Header toggleMenu={toggleMenu} handlePageLoad={handlePageLoad} isHomepage={isHomepage}/>
                <Menu menuActive={menuActive} toggleMenu={toggleMenu} handlePageLoad={handlePageLoad}/>
                <Routes>
                    <Route path="/" exact element={<Home homeAnimationHasRun={homeAnimationHasRun} handlePageLoad={handlePageLoad}/>} />
                    <Route path="/dev" element={<Dev/>} />
                    <Route path="/photo" exact element={<Photo/>} />
                    <Route path="/about" exact element={<About/>} />
                    <Route path='*' element={<NotFound handlePageLoad={handlePageLoad} />} />
                </Routes>
                </div>
            </Router>
        </ThemeProvider>
  );
}

export default App;