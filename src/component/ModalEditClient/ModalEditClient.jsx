import React,{useContext} from 'react';

import toast from "react-hot-toast";

import ConsultClientContext from '../../context/ConsultClient/ConsultClientContext';

const ModalEditClient = ({dialogEditClient} ) => {

	const { infoClient, setInfoClient, infoUpdateClient, setInfoUpdateClient } = useContext(ConsultClientContext)

	const handleCancelModalClient = () => {
        dialogEditClient.current.close()
        setInfoUpdateClient(infoClient)
    }

    const handleUpdateInputClient = (event) => {
        setInfoUpdateClient({ ...infoUpdateClient, [event.target.name]: event.target.value })
    }

    const handleSubmitClient = (event) => {
        event.preventDefault();
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

            if(data.status==="OK"){
                toast.success("La actualización del cliente ha sido todo un éxito");
                setInfoClient(infoUpdateClient)
                dialogEditClient.current.close();
            }else{
                toast.error("El email ya existe")
            }

        } catch (error) {
            console.log(error);
        }
    };
	return <form onSubmit={handleSubmitClient}>
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
					<input className="bg-redBrown text-white w-[15%]" type='button' value={"Cancelar"} onClick={handleCancelModalClient} />
					<input className="bg-gold text-white w-[15%]" type="submit" value={"Aceptar"} />
				</div>
			</div>
		</div>
	</form>;
};


export default ModalEditClient;