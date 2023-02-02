 import s from './ModalMenu.module.css'
import { ModalMenuProps } from './ModalMenu.props'

// import ArrowIcon from './arrow.svg';

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


export const ModalMenu = ({ setModalActive}:ModalMenuProps): JSX.Element => {
	return (
		<>
			<ul className={s.ModalMenu}>
				<li><a href="#" onClick={() => setModalActive(false)}>Главная</a></li>
				<li><a href="#AboutMe" onClick={() => setModalActive(false)}>Обо мне</a></li>
				<li><a href="#Resume" onClick={() => setModalActive(false)}>Резюме</a></li>
				<li><a href="#Works" onClick={() => setModalActive(false)}>Мои работы</a></li>
				<li><a href="#Contacts" onClick={() => setModalActive(false)}>Контакты</a></li>
			</ul>
		</>
	)
}

