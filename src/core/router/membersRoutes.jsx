import { Route, Routes } from 'react-router-dom';

import {MembersPage, NoPage, SearchPage} from '../../scenes/';
import { NavBarMembers} from "../../layouts/navBarMembers";

export const MembersRoutes = () => {
    return (
        <>
            <NavBarMembers />
            <div className="container">
                <Routes>
                    <Route path="search" element={<SearchPage />} />
                    <Route path="members" element={<MembersPage />} />
                    <Route path="/" element={<MembersPage />} />
                </Routes>
            </div>
        </>
    )
}