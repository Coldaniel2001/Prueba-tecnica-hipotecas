import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import CreateClient from "../page/CreateClient/CreateClient";
import ConsultClient from "../page/ConsultClient/ConsultClient";
import MortgageSimulator from "../page/MortgageSimulator/MortgageSimulator";

import DNIProvider from "../context/DNI/DNIProvider";
import ConsultClientProvider from "../context/ConsultClient/ConsultClientProvider";

const RoutesPath = () => {

    return (
        <DNIProvider>
            <ConsultClientProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/*' element={<Navigate to={"/createClient"} />} />
                        <Route path='/createClient' element={
                            <CreateClient />
                        } />
                        <Route path='/consultClient' element={
                            <ConsultClient />
                        } />
                        <Route path='/mortgageSimulator' element={
                            <MortgageSimulator />
                        } />
                    </Routes>
                </BrowserRouter>
            </ConsultClientProvider>
        </DNIProvider>
    )
}

export default RoutesPath