import React from 'react'
import {NavBar} from "../layouts/navBar";


export const NoPage = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <h1>404</h1>
                <hr />
                <p>
                    This page does not exist.
                </p>
            </div>
        </>

    )
}