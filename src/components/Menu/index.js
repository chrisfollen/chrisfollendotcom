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
                {/* NOTE: NEED TO UPDATE IMAGE URLS BELOW! */}
                <a href="mailto:chris@chrisfollen.com" target="_blank" rel="noreferrer"><ExternalLink menuItemsVisable={menuItemsVisable} menuActive={menuActive}  src="https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/email_black.png?alt=media&token=84b4ae02-6e8a-4aa7-9fec-a74a6e050f05" alt='Email icon'/></a>
                <a href="https://github.com/chrisfollen" target="_blank" rel="noreferrer"><ExternalLink menuItemsVisable={menuItemsVisable} menuActive={menuActive} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/github_black.png?alt=media&token=84fa4563-76d3-4991-9817-65774298f297" alt='GitHub logo' /></a>
                <a href="https://www.linkedin.com/in/chrisfollen/" target="_blank" rel="noreferrer"><ExternalLink menuItemsVisable={menuItemsVisable} menuActive={menuActive} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/linkedin_black.png?alt=media&token=b1192f1c-c3d7-451c-b297-ed0d5e10393f" alt='LinkedIn logo'/></a>
                <a href="https://www.instagram.com/chris.follen/" target="_blank" rel="noreferrer"><ExternalLink menuItemsVisable={menuItemsVisable} menuActive={menuActive} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/instagram_black.png?alt=media&token=df4325e2-60b4-413c-a9b5-47ee0ae9cd41" alt='Instagram logo'/></a>
            </ExternalLinksContainer>
        </MenuContainer>
    )
}

Menu.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
    menuActive: PropTypes.bool.isRequired,
    handlePageLoad: PropTypes.func.isRequired,
}