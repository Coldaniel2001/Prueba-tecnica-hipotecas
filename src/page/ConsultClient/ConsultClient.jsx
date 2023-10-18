import React, { useContext, useState } from "react"


import Navbar from "../../component/Navbar/Navbar"
import toast from "react-hot-toast"
import DNIContext from "../../context/DNI/DNIContext"

const ConsultClient = () => {

    const [consult, setConsult] = useState({
        state:false,
        dni:""
    });

    const { calculateWordDni } = useContext(DNIContext)

    
    const handleDni = (event) => {
        setConsult({...consult, dni:event.target.value})
    }
    const handleConsult = () => {
        if (consult.dni === "") {
            consult.state === true && setConsult({...consult, state:false});
            toast.error("Rellene El recuadro para coger la información del cliente")
        } else if (consult.dni.length !== 8) {
            consult.state === true && setConsult({...consult, state:false});
            toast.error("Tiene que tener un minimo de 8 caracteres para realizar la consulta")
        } else {
            toast.success("La Consulta del cliente ha sido todo un exito.");

            consult.dni += calculateWordDni(consult.dni)[0];

            setConsult({...consult, state:true});
            getInfoClient()
        }

    }

    const getInfoClient = async () => {
  
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/create/${consult.dni}`);
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
                    <input type="number" onChange={handleDni}  />
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