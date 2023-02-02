import { HeaderProps } from './Header.props';
import s from './Header.module.css'
import cn from 'classnames';

import { Logo } from '../../components/Logo/Logo';
import { NavMenu } from '../../components/NavMenu/NavMenu';
import {  useContext, useEffect, useRef, useState } from 'react';
import { Burger } from '../../components/Burger/Burger';

import { ContextBgHeader } from "../../components/context/context";


export const Header = ({ setChangeModal,className, modalActive, setModalActive, ...props }: HeaderProps): JSX.Element => {
	const [state, setState] = useState<boolean>(false)
	const [show, setShow] = useState<boolean>(false);
	const [bgHeader, setBgHeader] = useState<boolean>(false);
	const [lastScrollY, setLastScrollY] = useState(0);
	const ref = useRef<HTMLDivElement>(null);
	const context = useContext(ContextBgHeader)
	
	

	
	const controlNavbar = () => {
		
	  if (typeof window !== 'undefined') { 
		//console.log(window.scrollY);
		//console.log(lastScrollY);
		
		 if (window.scrollY > lastScrollY && window.scrollY !== 0 ) { 
			setShow(false); 
		 } else { // if scroll up show the navbar
			setShow(true);  
		 }
		 setLastScrollY(window.scrollY); 
	  }
	  if (window.scrollY === 0) {
		setShow(false); 
	  }
	};
	// if (ref.current !== null) {
	// 	const rect = ref.current.getBoundingClientRect();
		
		
	// }
	
	useEffect(() => {
		if (typeof window !== 'undefined' && context !== undefined   ) {
			if (window.scrollY > context ) {
				setBgHeader(true)
			} else 
			{
				setBgHeader(false)
			}
		}
	  if (typeof window !== 'undefined') {
		 window.addEventListener('scroll', controlNavbar);
 
		 // cleanup function
		 return () => {
			window.removeEventListener('scroll', controlNavbar);
		 };
	  }
	}, [lastScrollY]);
	
	return (
		<div ref={ref} className={cn(className, s.wrapper, { [s.hidden]: show },{ [s.active]: bgHeader })}  {...props}>
			<Logo
				state={state}
				setState={setState} />
			<div></div>
			<NavMenu
			state={state}
			 setState={setState} 
			 
			/>
			<Burger
				modalActive={modalActive}
				state={state}
				setState={setState}
				setModalActive={setModalActive}
				setChangeModal={setChangeModal}
			/>
			{ false ? <div>sss</div> : false}
			{/* <Burger2
				modalActive={modalActive}
				state={state}
				setState={setState}
				setModalActive={setModalActive} /> */}





			{/* <p className={cn(s.block, s.active)}>header</p> */}
		</div>
	);
};


