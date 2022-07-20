
import React from 'react';
import { Link } from 'react-router-dom';


export const NavBarMembers = () => {
    return(
        <>
            <nav>
                <Link to="/about">SObre Nosotros</Link> | {''}
                <Link to="/members">Miembros</Link> | {''}
                <Link to="/search">Buscar</Link> | {''}
            </nav>
        </>
    )
}