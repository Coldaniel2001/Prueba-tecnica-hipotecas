import React, { useContext } from 'react';
import toast from "react-hot-toast";

import ConsultClientContext from '../../context/ConsultClient/ConsultClientContext';

const ModalDeleteClient = ({ dialogDeleteClient, dialogEditClient }) => {

	const { consult, setConsult, infoClient } = useContext(ConsultClientContext)


	const handleDeleteClient = () => {
		dialogDeleteClient.current.showModal()
	}
	const handleCancelDeleteModalClient = () => {
		dialogDeleteClient.current.close()
	}
	const handleModifyClient = () => {
		dialogEditClient.current.showModal()
	}

	const deleteClient = async () => {
		try {
			const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/deleteClient/${infoClient.dni}`,
				{
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					}
				}
			);
			const data = await response.json();


			const response2 = await fetch(`${process.env.REACT_APP_SERVER_URL}/finances/deleteClientFinances/${infoClient.dni}`,
				{
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					}
				}
			);
			const data2 = await response2.json();

			if (data.status === "OK" && data2.status === "OK") {
				toast.success("La eliminación del cliente ha sido todo un éxito")
				dialogDeleteClient.current.close()
				setConsult({ ...consult, state: false })
			}

		} catch (error) {
			console.log(error);
		}

	}
	return <>
		<div className="bg-red-500 w-[10%]">
			<button className="bg-redBrown text-white w-[100%]" onClick={handleDeleteClient}>Borrar</button>
		</div>
		<div className="bg-red-500 w-[10%]">
			<button className="bg-gold text-white w-[100%]" onClick={handleModifyClient}>Editar</button>
		</div>
		<dialog ref={dialogDeleteClient}>
			<div className="flex flex-col bg-backgroundSky  h-[100%] w-[50vw] h-[40vh]">
				<div className="flex flex-col justify-around h-[80%]">
					<div className="flex justify-center">
						<span className="font-black text-white text-[36px]">¿Estás seguro que deseas eliminar este cliente?</span>
					</div>
					<div className="flex justify-center">
						<div className="flex justify-around w-[65%]">
							<button className="bg-redBrown text-white w-[15%]" onClick={handleCancelDeleteModalClient} >Cancelar</button>
							<button className="bg-gold text-white w-[15%]" onClick={deleteClient}>Aceptar</button>
						</div>
					</div>
				</div>
			</div>
		</dialog>
	</>;
};


export default ModalDeleteClient;