import { Route, Routes } from 'react-router-dom';

import {AboutPage, HomePage, MembersPage, NoPage} from '../../scenes/';
import { LoginPage } from '../../pods/login/loginPage';
import { MembersRoutes } from "./membersRoutes";


export const AppRouter = () => {
    return (
        <>
            <div className="container">
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="about" element={ <AboutPage />} />
                    <Route path="*" element={ <NoPage />} />
                    <Route path="members" element={<MembersRoutes />} />
                </Routes>
            </div>
        </>
    )
}