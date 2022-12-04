
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

export const Burger = ({ setState, state,setModalActive}: Burgerprops): JSX.Element => {
	function f1() {
		setModalActive(true)	
	}

	return (

		<div className={s.Burger}>
			<p className={cn(s.block, { [s.active]: state })}>
				<span onClick={f1}>Нажми Меня</span>
			</p>
		</div>
	)
}

