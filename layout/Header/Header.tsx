import { HeaderProps } from './Header.props';
import s from './Header.module.css'
import cn from 'classnames';

import { Logo } from '../../components/Logo/Logo';
import { NavMenu } from '../../components/NavMenu/NavMenu';
import { useState } from 'react';
import { Burger } from '../../components/Burger/Burger';

export const Header = ({ className, setModalActive , ...props }: HeaderProps): JSX.Element => {
	const [state, setState] = useState<boolean>(false)
	
	return (
		<div className={cn(className, s.wrapper)} {...props}>
			<Logo 
			state={state}
			 setState={setState}/>
			<div></div>
			<NavMenu 
			// state={state}
			//  setState={setState} 
			//  setModalActive={setModalActive}
			 />
			 <Burger
			  state={state}
			  setState={setState} 
			  setModalActive={setModalActive}
			 />



			
	
	{/* <p className={cn(s.block, s.active)}>header</p> */}
		</div>
	);
};


