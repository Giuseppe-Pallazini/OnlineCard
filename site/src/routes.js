import {BrowserRouter, Routes, Route} from 'react-router-dom';

import LandPage from './pages/landingPage/index';

import RobsonVolkcane from './pages/ClienteRobsonVolkcane/index'

export default function Index() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/robson-volkcane' element={<RobsonVolkcane />} />
                <Route path='/' element={<LandPage />} />
            </Routes>
        </BrowserRouter>
    );
}