
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
import { ModalMenu } from '../ModalMenu/ModalMenu';

export const NavMenu = ({ }: NavMenuprops): JSX.Element => {
	

	return (

		<div className={s.navWrapper}>
			<ul className={s.nav}>
			<li><a href="#" >Главная</a></li>
				<li><a href="#AboutMe" >Обо мне</a></li>
				<li><a href="#Resume" >Резюме</a></li>
			</ul>
		</div>
	)
}

