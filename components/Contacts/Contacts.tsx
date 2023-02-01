import s from './Contacts.module.css'
// import { ButtonProps } from './Button.props'
import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { FormCustom } from "../FormCustom/FormCustom"
import { ContactsProps } from "./Contacts.props"

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

import Telegram from './telegram.svg'
import Whatsapp from './whatsapp.svg'
import Phone from './phone.svg'



export const Contacts = ({ }: ContactsProps): JSX.Element => {
	return (
		<div id='Contacts' className={s.container}>
		
			<div className={s.title}> Контакты</div>
			<div className={cn(s['text'], s['box--gradient'], s['silver'])}>
				Заинтересованы в сотрудничестве, я всегда открыт для новых контактов. Варианты связи со мной чуть ниже. Так же, можете заполнить небольшую форму обратной связи, и улыбнутсья Чеширскому коту <span>&#128513;</span>
			</div >
			<div className={s.messangers}>
				<div className={s.box}><a href="tel:89652419008" target="_blank" rel="noreferrer">
					<Phone className={s.icons} />
					+7 (965) 241-90-08
				</a>
				</div>

				<div className={s.box}>
					<a href="https://t.me/Dmitritz" target="_blank" rel="noreferrer" >
						<Telegram className={s.icons} />
						Telegram
					</a>
				</div>


				<div className={s.box}>
					<a href="https://wa.me/79652419008" target="_blank" rel="noreferrer">
						<Whatsapp className={s.icons} />
						Whatsapp
					</a>
				</div>

			</div>
			<div className={s.wrapper}>
				<FormCustom />
			</div>
		</div>
	)
}


