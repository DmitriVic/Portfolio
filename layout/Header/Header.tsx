import { HeaderProps } from './Header.props';
import s from './Header.module.css'
import cn from 'classnames';

import { Logo } from '../../components/Logo/Logo';
import { NavMenu } from '../../components/NavMenu/NavMenu';
import { useState } from 'react';
import { Burger } from '../../components/Burger/Burger';
import { Burger2 } from '../../components/Burger2/Burger2';

export const Header = ({ className, modalActive, setModalActive, ...props }: HeaderProps): JSX.Element => {
	const [state, setState] = useState<boolean>(false)

	return (
		<div className={cn(className, s.wrapper)} {...props}>
			<Logo
				state={state}
				setState={setState} />
			<div></div>
			<NavMenu
			// state={state}
			//  setState={setState} 
			//  setModalActive={setModalActive}
			/>
			<Burger
				modalActive={modalActive}
				state={state}
				setState={setState}
				setModalActive={setModalActive}
			/>
			{/* <Burger2
				modalActive={modalActive}
				state={state}
				setState={setState}
				setModalActive={setModalActive} /> */}





			{/* <p className={cn(s.block, s.active)}>header</p> */}
		</div>
	);
};


