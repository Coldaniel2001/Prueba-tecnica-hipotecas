import React, { useContext, useRef, useState } from "react"


import Navbar from "../../component/Navbar/Navbar"
import toast from "react-hot-toast"

import DNIContext from "../../context/DNI/DNIContext";




const CreateClient = () => {
    const resetInput = useRef();

    const { calculateWordDni } = useContext(DNIContext)

    const [createInput, setCreateInput] = useState({
        name: "",
        dni: "",
        gmail: ""
    })




    const handleInput = (event) => {
        setCreateInput({ ...createInput, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if(createInput.dni.length === 8){
            createInput.dni += calculateWordDni(createInput.dni)[0];
        }
        createClient();
    }

    const createClient = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/create`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(createInput),
                }
            );
            const data = await response.json();

            switch (data.status) {
                case "EXISTE Gmail y DNI":
                    toast.error("Ya existe ese Gmail y DNI");
                    break;
                case "EXISTE DNI":
                    toast.error("Ya existe ese DNI");
                    break;
                case "EXISTE Gmail":
                    toast.error("Ya existe ese Gmail");
                    break;
                default:
                    toast.success("La creación de un nuevo cliente ha sido todo un exito.");
                    resetInput.current.click();
                    break;
            }

        } catch (error) {
            console.log(error);
        }
    };



    return (
        <>
            <div className="h-[20vh] w-[100vw]">
                <Navbar />
            </div>
            <div className="flex justify-center items-center  h-[80vh] w-[100vw] bg-backgroundSky">
                <div className="flex flex-col justify-between items-center bg-white w-[55%] h-[80%]">
                    <div className="flex justify-center items-center bg-navBlue w-[100%] h-[15%]">
                        <span className="text-white">Crear Cliente</span>
                    </div>
                    <div className="h-[100%] w-[100%]">
                        <form className="flex flex-col justify-around items-center h-[100%]" onSubmit={handleSubmit}>
                            <div className="flex flex-col justify-around items-center w-[80%] h-[45%]">
                                <div className="flex justify-between w-[70%]">
                                    <label>Nombre: </label>
                                    <input className="bg-lightBlue text-white w-[55%]" type="text" name="name" maxLength={12} minLength={4} onChange={handleInput} required />
                                </div>
                                <div className="flex justify-between w-[70%]">
                                    <label>DNI:</label>
                                    <input className="bg-lightBlue text-white w-[55%]" type="number" name="dni" onChange={handleInput} min={11111111} max={99999999}  required />
                                </div>
                                <div className="flex justify-between w-[70%]">
                                    <label>Gmail:</label>
                                    <input className="bg-lightBlue text-white w-[55%]" type="email" name="gmail" onChange={handleInput} required />
                                </div>
                            </div>
                            <div className="flex justify-around items-center w-[100%] h-[15%]">
                                <input ref={resetInput} className="bg-redBrown text-white w-[40%] h-[80%]" type="reset" value="Resetear" />
                                <input className="bg-lightBlue text-white w-[40%] h-[80%]" type="submit" value="Crear" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateClient