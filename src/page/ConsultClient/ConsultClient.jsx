import React, { useContext } from "react"

import Navbar from "../../component/Navbar/Navbar"


import ConsultClientContext from "../../context/ConsultClient/ConsultClientContext"

const ConsultClient = () => {


    const { consult, handleDni, handleConsult, infoFinances, infoClient } = useContext(ConsultClientContext)
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
                    <div className="flex justify-center h-[60vh] w-[90%] bg-white">
                        <div className="w-[90%]">
                            <div className="flex flex-col justify-around h-[30%]">
                                <div>
                                    <span className="font-black text-[1.5rem]">Datos personales:</span>
                                </div>
                                <div className="flex justify-around">
                                    <div>
                                        <span>{infoClient.name}, {infoClient.email}</span>
                                    </div>
                                    <div className="bg-red-500 w-[10%]">
                                        <button className="bg-redBrown text-white w-[100%]">Borrar</button>
                                    </div>
                                    <div className="bg-red-500 w-[10%]">
                                        <button className="bg-gold text-white w-[100%]">Editar</button>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <span className="font-black text-[1.5rem]">Datos financieros:</span>
                            </div>

                            <div className="h-[50%] scrollbar-hide overflow-scroll">
                                {infoFinances?.map((getFinance) => {
                                    return (
                                        <div key={getFinance._id}>
                                            <details>
                                                <summary className="font-extrabold">{getFinance.concept}</summary>
                                                <div>
                                                    <div className="flex">
                                                        <div>
                                                            <span className="font-bold">Importe a financiar:</span>
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold">{getFinance.finance}€</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div>
                                                            <span className="font-bold">Plazo de amortización:</span>
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold">{getFinance.amortization}años</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div>
                                                            <span className="font-bold">Tipo de interés:</span>
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold">{getFinance.interest}%</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div>
                                                            <span className="font-bold">Cuota mensual a pagar:</span>
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold">{getFinance.monthlyFee}€</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </details>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div> : ""}
            </div>

        </>
    )
}

export default ConsultClient