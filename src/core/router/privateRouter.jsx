import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {MembersPage} from "../../scenes/membersPage";
import {PrivateNavBar} from "../../layouts/privateNavBar.jsx";
import {SearchPage} from "../../scenes/searchPage";


export const PrivateRouter = () => {
    return (
        <>
            <PrivateNavBar />
            <Routes>
                <Route path="/" element={<Navigate to="/members" />} />
                <Route path="search" element={<SearchPage />} />
            </Routes>
        </>
    )
}