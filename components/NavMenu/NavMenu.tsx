
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
import s from './NavMenu.module.css'
import cn from 'classnames'
import { NavMenuprops } from './NavMenu.props';

export const NavMenu = ({ className,setState, state,setModalActive}: NavMenuprops): JSX.Element => {
	function f1() {
		setModalActive(true)	
	}

	return (

		<div className={className}>
			<p className={cn(s.block, { [s.active]: state })}>
				<span onClick={f1}>Нажми Меня</span>
			</p>
		</div>
	)
}

