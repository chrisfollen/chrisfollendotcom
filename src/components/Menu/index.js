import React from 'react'
import { Link } from 'react-router-dom'
import { Heading3 } from '../../Typography'
import { MenuContainer, CloseButtonContainer, InternalLinksContainer, ExternalLinksContainer, ExternalLink, InternalLink } from './style'

export default function Menu({ toggleMenu }) {

    return (
        <MenuContainer>
            <CloseButtonContainer>
                <button aria-label={'Close Menu'} onClick={toggleMenu}><Heading3>&times;</Heading3></button>
            </CloseButtonContainer>
            <InternalLinksContainer>
                <Link to='/dev'><InternalLink>dev</InternalLink></Link>
                <Link to='/photo'><InternalLink>photo</InternalLink></Link>
                <Link to='/about'><InternalLink>about</InternalLink></Link>
            </InternalLinksContainer>

            <ExternalLinksContainer>
                {/* NOTE: NEED TO UPDATE IMAGE URLS BELOW! */}
                <a href="mailto:chris@chrisfollen.com" target="_blank" rel="noreferrer"><ExternalLink src="https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/email_black.png?alt=media&token=84b4ae02-6e8a-4aa7-9fec-a74a6e050f05" alt='Email icon'/></a>
                <a href="https://github.com/chrisfollen" target="_blank" rel="noreferrer"><ExternalLink src="https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/github_black.png?alt=media&token=84fa4563-76d3-4991-9817-65774298f297" alt='GitHub logo' /></a>
                <a href="https://www.linkedin.com/in/chrisfollen/" target="_blank" rel="noreferrer"><ExternalLink src="https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/linkedin_black.png?alt=media&token=b1192f1c-c3d7-451c-b297-ed0d5e10393f" alt='LinkedIn logo'/></a>
                <a href="https://www.instagram.com/chris.follen/" target="_blank" rel="noreferrer"><ExternalLink src="https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/instagram_black.png?alt=media&token=df4325e2-60b4-413c-a9b5-47ee0ae9cd41" alt='Instagram logo'/></a>
            </ExternalLinksContainer>
        </MenuContainer>
    )
}