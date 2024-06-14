import {BrowserRouter, Routes, Route} from 'react-router-dom';

import RobsonVolkcane from './pages/ClienteRobsonVolkcane/index'

export default function Index() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RobsonVolkcane />} />
            </Routes>
        </BrowserRouter>
    );
}