import React from 'react'
import MenuButton from './components/MenuButton'
import { Link } from 'react-router-dom'
import { HeaderContainer, HeaderText, HeaderWrapper, HeaderMenuContainer } from './style'

export default function Header() {

    // const openMenu = () => {
    //     props.toggleMenu()
    // }

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <HeaderText>
                    <Link to='/'>CHRIS FOLLEN</Link>
                </HeaderText>
                <HeaderMenuContainer>
                    <MenuButton/>
                </HeaderMenuContainer>
            </HeaderWrapper>
        </HeaderContainer>
    )
}