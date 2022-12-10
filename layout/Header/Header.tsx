import { HeaderProps } from './Header.props';
import s from './Header.module.css'
import cn from 'classnames';

import { Logo } from '../../components/Logo/Logo';
import { NavMenu } from '../../components/NavMenu/NavMenu';
import { RefObject, useEffect, useRef, useState } from 'react';
import { Burger } from '../../components/Burger/Burger';
import { Burger2 } from '../../components/Burger2/Burger2';

export const Header = ({ mainBlockHeight,className, modalActive, setModalActive, ...props }: HeaderProps): JSX.Element => {
	const [state, setState] = useState<boolean>(false)
	const [show, setShow] = useState<boolean>(false);
	const [bgHeader, setBgHeader] = useState<boolean>(false);
	const [lastScrollY, setLastScrollY] = useState(0);
	const headerWrapper = useRef<HTMLDivElement>(null);
	//console.log(headerWrapper.current?.offsetHeight)
	//console.log(mainBlockHeight);
	
	const controlNavbar = () => {
		
	  if (typeof window !== 'undefined') { 
		//console.log(window.scrollY);
		
		 if (window.scrollY > lastScrollY && window.scrollY !== 0 ) { 
			
			//let elem = document.querySelector(`.${s.wrapper}`);
			//  elem.offsetHeight 
			setShow(false); 
		 } else { // if scroll up show the navbar
			setShow(true);  
		 }
 
		 // remember current page location to use in the next move
		 setLastScrollY(window.scrollY); 
	  }
	};
	
	useEffect(() => {
		if (typeof window !== 'undefined' && mainBlockHeight !== undefined  ) {
			if (window.scrollY > mainBlockHeight) {
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
		<div ref={headerWrapper} className={cn(className, s.wrapper, { [s.hidden]: show },{ [s.active]: bgHeader })}  {...props}>
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


