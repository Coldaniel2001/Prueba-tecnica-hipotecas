import React, {useContext} from 'react';

import ConsultClientContext from '../../context/ConsultClient/ConsultClientContext';

const InfoDataFinances = ({ getFinance, dialogEditFinances, dialogDeleteFinances }) => {

	const { setInfoUpdatesFinances} = useContext(ConsultClientContext)

	const handleDeleteFinances = () => {
		dialogDeleteFinances.current.showModal();
	}

	const handleModifyFinances = () => {
		dialogEditFinances.current.showModal();
		setInfoUpdatesFinances(getFinance)
	}
	return <>
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
				<span className="font-semibold">{getFinance.monthlyFee.toFixed(2)}€</span>
			</div>
		</div>
		<div className='flex'>
			<div className="bg-red-500 w-[10%]">
				<button className="bg-redBrown text-white w-[100%]" onClick={handleDeleteFinances} >Borrar</button>
			</div>
			<div className="bg-red-500 w-[10%]">
				<button className="bg-gold text-white w-[100%]" onClick={handleModifyFinances}>Editar</button>
			</div>
		</div>
	</>;
};

export default InfoDataFinances;