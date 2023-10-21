import React, { useContext } from 'react';

import toast from 'react-hot-toast';

import ConsultClientContext from '../../context/ConsultClient/ConsultClientContext';

const InfoMortgage = () => {

	const { consult, setConsult, simulator, setSimulator, resultSimu, infoClient } = useContext(ConsultClientContext)

	const handleSave = async () => {
		try {
			const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/finances/add/${consult.dni}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						concept: simulator.concept,
						finance: simulator.finance,
						amortization: simulator.amortization,
						interest: simulator.interest,
						// result: simulator.result
					}),
				}
			);
			const data = await response.json();

			if (data.status === 'OK') {
				toast.success('Se ha añadido los datos del simulador')

				setConsult({ ...consult, stateSimulator: false })
				setConsult({ ...consult, state: false })
			}

		} catch (error) {
			console.log(error);
		}
	};

	const handleSimulator = (event) => {
		setSimulator({ ...simulator, [event.target.name]: event.target.value })
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		if (consult.stateSimulator === false) {
			setConsult({ ...consult, stateSimulator: true })
		}
		setSimulator(resultSimu)
	}

	return <div className="flex justify-center items-center">
		<div className="flex flex-col justify-around items-center h-[60vh] w-[90%] bg-white">
			<div className="">
				<span className="font-black text-[2rem]">Simulador</span>
			</div>

			<div className="flex flex-col font-bold">
				<span>Nombre:<span className="font-extrabold">{infoClient.name}</span></span>
				<span>DNI:<span className="font-extrabold">{infoClient.dni}</span></span>
				<span>Email:<span className="font-extrabold">{infoClient.email}</span></span>
			</div>



			<div className="flex justify-around h-[35%] ">
				<form className="flex flex-col justify-around items-stretch h-[100%] w-[100%]" onSubmit={handleSubmit}>
					<div className="flex justify-between">
						<label className="font-bold">Concepto:</label>
						<input className="bg-lightBlue text-white" type="text" name="concept" minLength={1} maxLength={10} onChange={handleSimulator} required />
					</div>

					<div className="flex justify-between relative">
						<label className="font-bold">Importe a financiar:</label>
						<input className="bg-lightBlue text-white" type="number" step="any" name="finance" onChange={handleSimulator} required />
						<span className="absolute left-[20rem]">€</span>
					</div>

					<div className="flex justify-between relative">
						<label className="font-bold">Plazo de amortización:</label>
						<input className="bg-lightBlue text-white" type="number" step="any" name="amortization" onChange={handleSimulator} required />
						<span className="absolute left-[18.8rem]">años</span>
					</div>
					<div className="flex justify-between relative">
						<label className="font-bold">Tipo de interés:</label>
						<input className="bg-lightBlue text-white" type="number" step="any" name="interest" onChange={handleSimulator} required />
						<span className="absolute left-[20rem]">%</span>
					</div>
					<div className="flex justify-center items-center h-[30%]">
						<input className="text-white bg-lightBlue w-[30%]" type="submit" value="Calcular" />
					</div>
				</form>

			</div>


			{consult.stateSimulator ? <div>
				<span className="font-extrabold"><span className="font-bold">Cuota mensual a pagar: </span>{simulator.result.toFixed(2)} € al mes</span>
			</div>
				: ""}

			{consult.stateSimulator ? <div className="flex justify-center items-center w-[90%] h-[30%]">
				<button className="text-white w-[30%] bg-strongNavBlue" onClick={handleSave}>Guardar</button>
			</div> :
				""}
		</div>
	</div >;
};


export default InfoMortgage;