import { Route, Routes } from 'react-router-dom';

import { About } from '../../scenes/about';
import { LoginPage } from '../../pods/login/loginPage';
import { NoPage } from '../../scenes/noPage';
import {HomePage} from "../../scenes/homePage";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={ <About />} />
                <Route path="*" element={<NoPage />} />
            </Routes>

        </>
    )
}