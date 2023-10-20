import React, { useState, useContext, useEffect } from "react";

import toast from "react-hot-toast";

import ConsultClientContext from "./ConsultClientContext";
import DNIContext from "../DNI/DNIContext";


const ConsultClientProvider = ({ children }) => {

    const { calculateWordDni } = useContext(DNIContext)

    const [consult, setConsult] = useState({
        state: false,
        dni: "",
        stateSimulator: false,
    });


    const [simulator, setSimulator] = useState({
        concept: "",
        finance: 0,
        amortization: 0,
        interest: 0,
        result: 0
    });

    const [resultSimu, setResultSimu] = useState();
    const [resultUpdateSimu, setResultUpdateSimu] = useState();

    const [infoClient, setInfoClient] = useState();
    const [infoUpdateClient, setInfoUpdateClient] = useState();
    const [infoFinances, setInfoFinances] = useState();
    const [infoUpdatesFinances, setInfoUpdatesFinances] = useState();

    useEffect(() => {
        const simulatorResults = async () => {
            setResultSimu({ ...simulator, result: (parseFloat(simulator.finance) * parseFloat((simulator.interest / 100 / 12))) / (1 - (Math.pow(1 + (simulator.interest / 100 / 12), -(simulator.amortization * 12)))) })
        };
        simulatorResults();

    }, [simulator]);
    useEffect(() => {
        const updateResults = async () => {
            setResultUpdateSimu({ ...infoUpdatesFinances, monthlyFee: (parseFloat(infoUpdatesFinances?.finance) * parseFloat((infoUpdatesFinances?.interest / 100 / 12))) / (1 - (Math.pow(1 + (infoUpdatesFinances?.interest / 100 / 12), -(infoUpdatesFinances?.amortization * 12)))) })
        };
        updateResults();

    }, [infoUpdatesFinances]);





    const handleDni = (event) => {
        setConsult({ ...consult, dni: event.target.value })
    }
    const handleConsult = async () => {
        if (consult.dni === "") {
            consult.state === true && setConsult({ ...consult, state: false });
            toast.error("Rellene El recuadro para coger la información del cliente")
        } else if (consult.dni.length < 8) {
            consult.state === true && setConsult({ ...consult, state: false });
            toast.error("Tiene que tener un minimo de 8 caracteres para realizar la consulta")
        } else {
            if (consult.dni.length === 8) {
                consult.dni += calculateWordDni(consult.dni)[0];
            }
            try {
                const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/create/${consult.dni}`);
                const data = await response.json();
                setInfoClient(data.getOneClient);
                setInfoUpdateClient(data.getOneClient)
                if (data.getOneClient === null) {
                    toast.error("Este Cliente no existe")
                    if (consult.state === true) {
                        setConsult({ ...consult, state: false });
                    }
                } else {
                    toast.success("La Consulta del cliente ha sido todo un exito.");
                    getInfoFinances()
                    if (consult.state === false) {
                        setConsult({ ...consult, state: true });
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    const getInfoFinances = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/finances/${consult.dni}`);
            const data = await response.json();
            setInfoFinances(data.getInfoFinances);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <ConsultClientContext.Provider
            value={{
                consult, setConsult,
                simulator, setSimulator,
                resultSimu,
                resultUpdateSimu,
                infoClient, setInfoClient,
                infoUpdateClient, setInfoUpdateClient,
                infoFinances, setInfoFinances,
                infoUpdatesFinances, setInfoUpdatesFinances,
                handleDni,
                handleConsult
            }}>
            {children}
        </ConsultClientContext.Provider>
    )
}

export default ConsultClientProvider