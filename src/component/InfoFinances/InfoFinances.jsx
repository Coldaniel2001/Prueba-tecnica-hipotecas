import React, { useRef } from 'react';

import ModalEditFinances from '../ModalEditFinances/ModalEditFinances';
import ModalDeleteFinances from '../ModalDeleteFinances/ModalDeleteFinances';
import InfoDataFinances from '../InfoDataFinances/InfoDataFinances';

const InfoFinances = ({ getFinance }) => {

	const dialogEditFinances = useRef()
	const dialogDeleteFinances = useRef()

	return <div>
		<details>
			<summary className="font-extrabold">{getFinance.concept}</summary>
			<div>
				<InfoDataFinances
					getFinance={getFinance}
					dialogEditFinances={dialogEditFinances}
					dialogDeleteFinances={dialogDeleteFinances}
				/>

				<dialog ref={dialogDeleteFinances}>
					<ModalDeleteFinances
						dialogDeleteFinances={dialogDeleteFinances}
						getFinance={getFinance}
					/>
				</dialog>
				<dialog ref={dialogEditFinances}>
					<ModalEditFinances
						dialogEditFinances={dialogEditFinances}
						getFinance={getFinance}
					/>
				</dialog>
			</div>
		</details>
	</div>;
};


export default InfoFinances;