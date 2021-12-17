import React from 'react'
import MenuButton from './components/MenuButton'
import { Link } from 'react-router-dom'
import { HeaderContainer, HeaderText, HeaderWrapper, HeaderMenuContainer } from './style'

export default function Header({ toggleMenu, handlePageLoad }) {

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <HeaderText>
                    <Link onClick={()=>handlePageLoad()} to='/'>CHRIS FOLLEN</Link>
                </HeaderText>
                <HeaderMenuContainer>
                    <MenuButton toggleMenu={toggleMenu} />
                </HeaderMenuContainer>
            </HeaderWrapper>
        </HeaderContainer>
    )
}