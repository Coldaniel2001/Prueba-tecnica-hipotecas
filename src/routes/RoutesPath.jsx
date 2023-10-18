import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import CreateClient from "../page/CreateClient/CreateClient";
import ConsultClient from "../page/ConsultClient/ConsultClient";

import DNIProvider from "../context/DNI/DNIProvider";

const RoutesPath = () => {

    return (
        <DNIProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<Navigate to={"/createClient"} />} />
                    <Route path='/createClient' element={
                        <CreateClient />
                    } />
                    <Route path='/consultClient' element={
                        <ConsultClient />
                    } />
                </Routes>
            </BrowserRouter>
        </DNIProvider>
    )
}

export default RoutesPath