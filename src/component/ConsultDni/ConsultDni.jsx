import React, { useContext } from 'react';

import ConsultClientContext from '../../context/ConsultClient/ConsultClientContext';

const ConsultDni = () => {
	const { handleDni, handleConsult } = useContext(ConsultClientContext)

	return <div className="flex justify-around items-center w-[50%]  h-[15vh]">
		<label>DNI:</label>
		<input type="number" onChange={handleDni} />
		<button onClick={handleConsult} className="bg-lightBlue text-white w-[25%]">Consultar</button>
	</div>;
};


export default ConsultDni;