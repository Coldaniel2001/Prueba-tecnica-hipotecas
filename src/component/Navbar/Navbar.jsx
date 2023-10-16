import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='flex justify-around items-center bg-red-500 h-[100%] w-[100%] text-white'>
			<NavLink to={"/createClient"} className={({ isActive }) => isActive ? 'flex items-center justify-center  w-[33.33333%] h-[100%] bg-strongRed' : 'flex items-center justify-center  w-[33.33333%] h-[100%] bg-navBlue'}>
				<div>
					<span>Crear Cliente</span>
				</div>
			</NavLink>
			<NavLink to={"/"} className={({ isActive }) => isActive ? 'flex items-center justify-center  w-[33.33333%] h-[100%] bg-strongRed' : 'flex items-center justify-center  w-[33.33333%] h-[100%] bg-navBlue'}>
				<div>
					<span>Consultar Cliente</span>
				</div>
			</NavLink>
			<NavLink to={"/"} className={({ isActive }) => isActive ? 'flex items-center justify-center  w-[33.33333%] h-[100%] bg-strongRed' : 'flex items-center justify-center  w-[33.33333%] h-[100%] bg-navBlue'}>
				<div>
					<span>Simulador de Hipotecas</span>
				</div>
			</NavLink>

		</div >
	)
};

export default Navbar;