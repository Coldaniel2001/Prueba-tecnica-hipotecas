import React from "react";

import DNIContext from "./DNIContext";

const DNIProvider = ({ children }) => {

    const calculateWordDni = (digitsDni) => {

        const tableWords = 'TRWAGMYFPDXBNJZSQVHLCKE';

        return [tableWords.charAt(digitsDni % 23), true];

    }
    return (
        <DNIContext.Provider value={{ calculateWordDni }}>
            {children}
        </DNIContext.Provider>
    )
}

export default DNIProvider