
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

export const NavMenu = ({state }: NavMenuprops): JSX.Element => {
	

	return (

		<div className={cn(s.navWrapper, {[s.active]:state})}>
			<ul className={s.nav}>
			<li><a href="#" >Главная</a></li>
				<li><a href="#AboutMe" >Обо мне</a></li>
				<li><a href="#Resume" >Резюме</a></li>
				<li><a href="#Works" >Мои работы</a></li>
				<li><a href="#Contacts" >Контакты</a></li>
			</ul>
		</div>
	)
}

