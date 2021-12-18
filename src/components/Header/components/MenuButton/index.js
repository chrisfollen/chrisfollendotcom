import React from 'react'
import PropTypes from 'prop-types'
import { Heading4 } from '../../../../Typography/style'

export default function MenuButton({ toggleMenu }) {


    return (
        <button aria-label={'Menu'} onClick={toggleMenu}><Heading4>+</Heading4></button>
    );
}

MenuButton.propTypes = {
    toggleMenu: PropTypes.func.isRequired
}