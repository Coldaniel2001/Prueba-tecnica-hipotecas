import React, { useContext } from "react"

import Navbar from "../../component/Navbar/Navbar"


import ConsultClientContext from "../../context/ConsultClient/ConsultClientContext"

const ConsultClient = () => {


    const { consult, handleDni, handleConsult } = useContext(ConsultClientContext)

    return (
        <>
            <div className="h-[20vh] w-[100vw]">
                <Navbar />
            </div>

            <div className="h-[80vh] w-[100vw] bg-backgroundSky">
                <div className="flex justify-around items-center w-[50%]  h-[15vh]">
                    <label>DNI:</label>
                    <input type="number" onChange={handleDni} />
                    <button onClick={handleConsult} className="bg-lightBlue text-white w-[25%]">Consultar</button>
                </div>
                {consult.state ? <div className="flex justify-center items-center">
                    <div className="h-[60vh] w-[90%] bg-white">

                    </div>
                </div> : ""}
            </div>

        </>
    )
}

export default ConsultClient