import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
// import HeaderContainer from './components/HeaderContainer'
import Home from './views/Home'
import Header from './components/Header'
import { Theme } from './Theme'
import { ThemeProvider } from 'styled-components';
import Dev from './views/Dev'
import Photo from './views/Photo'
import About from './views/About'
import NotFound from './views/404'
import Menu from './components/Menu'
// import Dev from './Dev'
// import Photo from './Photo'
// import About from './About'
// import Menu from './components/Menu'
// import Cursor from './components/Cursor/'
// import NotFound from './NotFound'
// import Footer from './components/Footer'
// import Preload from './components/Preload'
// import Loader from './components/Loader'
// import { updateCursor, hideCursor, showCursor} from './util/cursor'

function App() {

  const [menuActive, setMenuActive] = useState(false)
//   const [linkHover, setLinkHover] = useState(false)
//   const [preloading, setPreloading] = useState(true)
//   const [loading, setLoading] = useState(false)


//   useEffect(() => {
//     setLoading(true)
//     removeEventListeners()
//     setTimeout(() => setLoading(false), 1800)
//     addEventListeners()
//   }, [currentLink])

//   useEffect(() => {
//     // setTimeout(() => setPreloading(false), 3500)
//     addEventListeners()
//     // updateLink(window.location.href)
//   }, [])

//   const updateLink = (path) => {
//     setCurrentLink(path)
//   }

  const toggleMenu = () => {
    if (menuActive) {
      setMenuActive(false)
    } else {
      setMenuActive(true)
    }
  }

//   const addEventListeners = () => {
//     document.querySelectorAll('a, .clickable, .clickable-photo, .clickable-menu, .clickable-close').forEach((link) => {
//       link.addEventListener('mouseover', () => setLinkHover(true))
//       link.addEventListener('mouseout', () => setLinkHover(false))
//     })
//   }

//   const removeEventListeners = () => {
//     document.querySelectorAll('a, .clickable, .clickable-photo, .clickable-menu, .clickable-close').forEach((link) => {
//       link.removeEventListener('mouseover', () => setLinkHover(true))
//       link.removeEventListener('mouseout', () => setLinkHover(false))
//     })
//   }

  return (
    //   <div className="app" onMouseMove={updateCursor({linkHover: linkHover})} onScroll={updateCursor({linkHover: linkHover})} onMouseLeave={hideCursor} onMouseEnter={showCursor}>
        // <Preload loadState={preloading}/>
        // <Loader loadState={loading} />
        // <Cursor />
        <ThemeProvider theme={Theme}>
            <Router>
                <Header toggleMenu={toggleMenu}/>
                {menuActive && <Menu toggleMenu={toggleMenu}/>}
                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/dev" element={<Dev/>} />
                    <Route path="/photo" exact element={<Photo/>} />
                    <Route path="/about" exact element={<About/>} />
                    <Route element={<NotFound/>} />
                </Routes>
            </Router>
        </ThemeProvider>
        // <HeaderContainer toggleMenu={toggleMenu} headerClass={headerClass} updateLink={updateLink} />
        // <Switch>
        //   <Route path="/" exact render={routerProps => <Home {...routerProps} updateLink={updateLink} />} /> */}
        //   <Route path="/dev" component={Dev} />
        //   <Route path="/photo" component={Photo} />
        //   <Route path="/about" component={About} />
        //   <Route render={routerProps => <NotFound {...routerProps} updateLink={updateLink} />} />
        // </Switch>
    //   <Menu currentClass={menuClass} toggleMenu={toggleMenu} updateLink={updateLink} />
    //   <Footer footerClass={footerClass}/>
    // </div>
  );
}

export default App;