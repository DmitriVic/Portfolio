

import s from './Burger.module.css'
import cn from 'classnames'
import { Burgerprops } from './Burger.props';
import $ from 'jquery';
import { useEffect } from 'react';
import IconBurger from './burger.svg'



export const Burger = ({setChangeModal, modalActive, setState, state, setModalActive }: Burgerprops): JSX.Element => {
	function f1() {
		setModalActive(true)
		setChangeModal(true)
	}



	return (

		<div className={s.Burger}>
			<div onClick={f1} className={cn(s.block, { [s.active]: modalActive })}>
				<div>
					<IconBurger className={s.iconBurger}/>
					
				</div>
			</div>
		</div>
	)
}

