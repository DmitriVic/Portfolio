
// export const Button = ({ appearance, arrow = 'none',  children, className, ...props }: ButtonProps): JSX.Element => {
// 	return (
// 	<button  className={cn(s.button, className, {
// 		[s.primary]: appearance == 'primary',
// 		[s.ghost]: appearance == 'ghost',
// 	})}
// 	{...props}
// 	>
// 		{children}
// 		{arrow != 'none' && <span className={cn(s.arrow, {
// 				[s.down]: arrow == 'down'
// 			})}>
// 				<ArrowIcon />
// 			</span>}

// 	</button>)
// }
import s from './Burger.module.css'
import cn from 'classnames'
import { Burgerprops } from './Burger.props';
import $ from 'jquery';
import { useEffect } from 'react';


export const Burger = ({ modalActive,setState, state, setModalActive }: Burgerprops): JSX.Element => {
	function f1() {
		setModalActive(true)
	}
	
	
	//  useEffect(() => {
	// 	//const navContainer = document.querySelector('.bar')
	// 	//console.log(document.querySelector(`.${s['nav-container']}`));
	// 	$(`.${s['toggle-icon']}`).click(function() {
	// 		$(`.${s['nav-container']}`).toggleClass(`${s.pushed}`);
	// 	 });
	 
	//  }, [])
	 //console.log(s.active);
	 console.log(state);
	 
	return (

		<div className={s.Burger}>
			<div onClick={f1} className={cn(s.block, { [s.active]: modalActive })}>
				<div className={cn(s['nav-container'], { [s.pushed]: modalActive })} >
					<div  className={s['toggle-icon']}>
						<span className={s.bar}></span>
						<span className={s.bar}></span>
						<span className={s.bar}></span>
					</div>
				</div>
			</div>
		</div>
	)
}

