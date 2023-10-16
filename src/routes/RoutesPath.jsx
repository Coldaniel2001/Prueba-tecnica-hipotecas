import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CreateClient from "../page/CreateClient/CreateClient";

const RoutesPath = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<Navigate to={"/createClient"} />} />
                <Route path='/createClient' element={
                    <CreateClient />
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesPath