import React from 'react';
import { NavBar } from '../layouts/navBar'

export const HomePage = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <h1>Home</h1>
                <hr />
                <p>
                    This is the home page.
                </p>
            </div>
        </>

    )
}