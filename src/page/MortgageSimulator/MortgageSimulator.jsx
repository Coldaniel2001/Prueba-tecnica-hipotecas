import React, { useContext } from "react";

import ConsultClientContext from "../../context/ConsultClient/ConsultClientContext"

import Navbar from "../../component/Navbar/Navbar";
import InfoMortgage from "../../component/InfoMortgage/InfoMortgage";
import ConsultDni from "../../component/ConsultDni/ConsultDni";


const MortgageSimulator = () => {

    const { consult } = useContext(ConsultClientContext)



    return (
        <>
            <div className="h-[20vh] w-[100vw]">
                <Navbar />
            </div>

            <div className="h-[80vh] w-[100vw] bg-backgroundSky">
                <ConsultDni />
                {consult.state ?
                    <InfoMortgage /> : ""
                }
            </div >

        </>
    )
}

export default MortgageSimulator