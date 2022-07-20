
import React from 'react';
import {NavBar} from "../../layouts/navBar";
import {useNavigate} from 'react-router-dom';

export const LoginPage = () => {

    const navigate = useNavigate();

    //Habilitamos replace a true para que no se pueda volver hacia atrás
    const onLogin = () => {
        navigate('/about',
            {replace: true}
        );
    }

    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <h1>Login</h1>
                <hr />

                <button
                    className="btn btn-primary"
                    onClick={ onLogin }
                >
                    Login
                </button>

            </div>
        </>
    )
}