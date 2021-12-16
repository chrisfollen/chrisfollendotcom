import React from 'react'
import { Heading3 } from '../../../../Typography'

export default function MenuButton({ toggleMenu }) {


    return (
        <button aria-label={'Menu'} onClick={toggleMenu}><Heading3>+</Heading3></button>
    );
}