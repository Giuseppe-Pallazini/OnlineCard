import {BrowserRouter, Routes, Route} from 'react-router-dom';

import RobsonVolkcane from './pages/ClienteRobsonVolkcane.js/index'

export default function Index() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/RobsonVolkcane' element={<RobsonVolkcane />} />
            </Routes>
        </BrowserRouter>
    );
}