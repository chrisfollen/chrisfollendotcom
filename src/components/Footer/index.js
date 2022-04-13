import React from 'react'
import { FooterContainer, FooterText } from './style'
import { getCopy } from './copy'

export default function Footer() {

    return (
        <FooterContainer>
            <FooterText>
                {getCopy.footerText}
            </FooterText>
        </FooterContainer>
    )
}