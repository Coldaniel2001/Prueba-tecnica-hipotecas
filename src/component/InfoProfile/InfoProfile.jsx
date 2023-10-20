import React, { useContext, useRef } from 'react';

import ModalEditClient from "../../component/ModalEditClient/ModalEditClient";
import ModalDeleteClient from "../../component/ModalDeleteClient/ModalDeleteClient";
import InfoFinances from "../../component/InfoFinances/InfoFinances";

import ConsultClientContext from '../../context/ConsultClient/ConsultClientContext';

const InfoProfile = () => {
	const { infoFinances, infoClient } = useContext(ConsultClientContext)

	const dialogEditClient = useRef()
	const dialogDeleteClient = useRef()
	return <div className="w-[90%]">
		<div className="flex flex-col justify-around h-[30%]">
			<div>
				<span className="font-black text-[1.5rem]">Datos personales:</span>
			</div>
			<div className="flex justify-around">
				<div>
					<span>{infoClient.name}, {infoClient.email}</span>
				</div>

				<ModalDeleteClient
					dialogDeleteClient={dialogDeleteClient}
					dialogEditClient={dialogEditClient}
				/>

				<dialog ref={dialogEditClient}>
					<ModalEditClient
						dialogEditClient={dialogEditClient}
					/>
				</dialog>
			</div>
		</div>

		<div>
			<span className="font-black text-[1.5rem]">Datos financieros:</span>
		</div>

		<div className="h-[50%] scrollbar-hide overflow-scroll">
			{infoFinances?.map((getFinance) => {
				return (
					<InfoFinances
						key={getFinance._id}
						getFinance={getFinance}
					/>
				)
			})}
		</div>
	</div>;
};


export default InfoProfile;