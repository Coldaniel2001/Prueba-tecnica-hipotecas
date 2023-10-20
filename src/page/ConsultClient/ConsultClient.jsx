import React, { useContext } from "react"


import Navbar from "../../component/Navbar/Navbar"
import ConsultDni from "../../component/ConsultDni/ConsultDni";
import InfoProfile from "../../component/InfoProfile/InfoProfile";


import ConsultClientContext from "../../context/ConsultClient/ConsultClientContext"

const ConsultClient = () => {


    const { consult} = useContext(ConsultClientContext)

    return (
        <>
            <div className="h-[20vh] w-[100vw]">
                <Navbar />
            </div>

            <div className="h-[80vh] w-[100vw] bg-backgroundSky">
                <ConsultDni />
                {consult.state ? <div className="flex justify-center items-center">
                    <div className="flex justify-center h-[60vh] w-[90%] bg-white">
                        <InfoProfile />
                    </div>
                </div> : ""}
            </div>

        </>
    )
}

export default ConsultClient