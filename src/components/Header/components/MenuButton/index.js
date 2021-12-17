import React from 'react'
import PropTypes from 'prop-types'
import { Heading3 } from '../../../../Typography'

export default function MenuButton({ toggleMenu }) {


    return (
        <button aria-label={'Menu'} onClick={toggleMenu}><Heading3>+</Heading3></button>
    );
}

MenuButton.propTypes = {
    toggleMenu: PropTypes.func.isRequired
}