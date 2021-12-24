import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Heading3 } from '../../Typography/style'
import { MenuContainer, CloseButtonContainer, InternalLinksContainer, ExternalLinksContainer, CloseButton, ExternalLink, InternalLink1, InternalLink2, InternalLink3 } from './style'

export default function Menu({ toggleMenu, menuActive, handlePageLoad }) {

    const [menuItemsVisable, setMenuItemsVisable] = useState(false)

    const handleLinkClick = () => {
        toggleMenu();
        handlePageLoad();
    }

    useEffect(() => {
        if ( menuActive ) {
            setTimeout(() => setMenuItemsVisable(true), 1500)
        } else {
            setTimeout(() => setMenuItemsVisable(false), 1000)
        }
      }, [menuActive])

    return (
        <MenuContainer menuActive={menuActive}>
            <CloseButtonContainer>
                <CloseButton onClick={toggleMenu}><Heading3>&times;</Heading3></CloseButton>
            </CloseButtonContainer>
            <InternalLinksContainer>
                <Link onClick={handleLinkClick} to='/dev'><InternalLink1 menuItemsVisable={menuItemsVisable} menuActive={menuActive}>dev</InternalLink1></Link>
                <Link onClick={handleLinkClick} to='/photo'><InternalLink2 menuItemsVisable={menuItemsVisable} menuActive={menuActive}>photo</InternalLink2></Link>
                <Link onClick={handleLinkClick} to='/about'><InternalLink3 menuItemsVisable={menuItemsVisable}menuActive={menuActive}>about</InternalLink3></Link>
            </InternalLinksContainer>

            <ExternalLinksContainer>
                <a href="mailto:chris@chrisfollen.com" target="_blank" rel="noreferrer"><ExternalLink menuItemsVisable={menuItemsVisable} menuActive={menuActive}  src="https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/misc%2Femail_black.png?alt=media&token=91ce6438-26d6-471d-9ee0-8075563cd825" alt='Email icon'/></a>
                <a href="https://www.linkedin.com/in/chrisfollen/" target="_blank" rel="noreferrer"><ExternalLink menuItemsVisable={menuItemsVisable} menuActive={menuActive} src="https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/misc%2Flinkedin_black.png?alt=media&token=f5bd7b11-268e-462b-8b43-7af471055857" alt='LinkedIn logo'/></a>
                <a href="https://github.com/chrisfollen" target="_blank" rel="noreferrer"><ExternalLink menuItemsVisable={menuItemsVisable} menuActive={menuActive} src="https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/misc%2Fgithub_black.png?alt=media&token=7445978f-5ae8-4d15-b52a-1a25b03b5ff4" alt='GitHub logo' /></a>
            </ExternalLinksContainer>
        </MenuContainer>
    )
}

Menu.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
    menuActive: PropTypes.bool.isRequired,
    handlePageLoad: PropTypes.func.isRequired,
}