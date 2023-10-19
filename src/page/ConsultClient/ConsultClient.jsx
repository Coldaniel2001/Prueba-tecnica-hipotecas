import React, { useContext, useRef } from "react"

import toast from "react-hot-toast";

import Navbar from "../../component/Navbar/Navbar"

import ConsultClientContext from "../../context/ConsultClient/ConsultClientContext"

const ConsultClient = () => {


    const { consult, handleDni, handleConsult, infoFinances, infoClient, setInfoClient, infoUpdateClient, setInfoUpdateClient } = useContext(ConsultClientContext)

    const dialog = useRef("editModal")

    const handleModify = () => {
        dialog.current.showModal()
    }
    const handleCancelModal = () => {
        dialog.current.close()
        setInfoUpdateClient(infoClient)
    }

    const handleUpdateInputClient = (event) => {
        setInfoUpdateClient({ ...infoUpdateClient, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        toast.success("La actualización del cliente ha sido todo un éxito");
        dialog.current.close();
        setInfoClient(infoUpdateClient)
        updateClient()
    }

    const updateClient = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/update`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        dni: infoUpdateClient.dni,
                        email: infoUpdateClient.email,
                        name: infoUpdateClient.name
                    }),
                }
            );
            const data = await response.json();

            console.log(data)

        } catch (error) {
            console.log(error);
        }
    };
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
                                        <button className="bg-redBrown text-white w-[100%]" >Borrar</button>
                                    </div>
                                    <div className="bg-red-500 w-[10%]">
                                        <button className="bg-gold text-white w-[100%]" onClick={handleModify}>Editar</button>
                                    </div>
                                    <dialog ref={dialog}>
                                        <form onSubmit={handleSubmit}>
                                            <div className="flex flex-col justify-around bg-backgroundSky  h-[100%] w-[50vw] h-[40vh]">
                                                <div className="flex justify-center text-[1.5rem] text-white font-black">
                                                    <span>Editar</span>
                                                </div>

                                                <div className="flex flex-col justify-around items-center w-[100%] h-[30%]">
                                                    <div className="flex justify-between w-[60%]">
                                                        <div>
                                                            <label>Nombre</label>
                                                        </div>
                                                        <div>
                                                            <input type="text" name="name" value={infoUpdateClient.name} onChange={handleUpdateInputClient} required />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between w-[60%]">
                                                        <div>
                                                            <label>Gmail</label>
                                                        </div>
                                                        <div>
                                                            <input type="email" name="email" value={infoUpdateClient.email} onChange={handleUpdateInputClient} required />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex justify-center">
                                                    <div className="flex justify-around w-[65%]">
                                                        <button className="bg-redBrown text-white w-[15%]" onClick={handleCancelModal} >Cancelar</button>
                                                        <input className="bg-gold text-white w-[15%]" type="submit" value={"Aceptar"} />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </dialog>
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