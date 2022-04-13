import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Heading3 } from '../../Typography/style'
import { MenuContainer, CloseButtonContainer, InternalLinksContainer, ExternalLinksContainer, CloseButton, ExternalLink, InternalLink1, InternalLink2, InternalLink3 } from './style'
import { EMAIL_ICON_SRC, LINKED_IN_ICON_SRC, GITHUB_ICON_SRC } from '../../constants'

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
                <a href="mailto:chris@chrisfollen.com" target="_blank" rel="noreferrer"><ExternalLink menuItemsVisable={menuItemsVisable} menuActive={menuActive}  src={EMAIL_ICON_SRC} alt='Email icon'/></a>
                <a href="https://www.linkedin.com/in/chrisfollen/" target="_blank" rel="noreferrer"><ExternalLink menuItemsVisable={menuItemsVisable} menuActive={menuActive} src={LINKED_IN_ICON_SRC} alt='LinkedIn logo'/></a>
                <a href="https://github.com/chrisfollen" target="_blank" rel="noreferrer"><ExternalLink menuItemsVisable={menuItemsVisable} menuActive={menuActive} src={GITHUB_ICON_SRC} alt='GitHub logo' /></a>
            </ExternalLinksContainer>
        </MenuContainer>
    )
}

Menu.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
    menuActive: PropTypes.bool.isRequired,
    handlePageLoad: PropTypes.func.isRequired,
}