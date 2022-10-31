// import s from './Button.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';
import LogoIcon from './logo.svg'

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


 import s from './Logo.module.css'
 
 import cn from 'classnames'
import { LogoProps } from './Logo.props'
import { useState } from 'react'

export const Logo = ({ className, }:LogoProps): JSX.Element => {
	const [state, setState] = useState<boolean>(false)
	setTimeout(() => {
		setState(true)
	}, 500);
	return (
		
	<div className={className}>
	<p className={cn(s.block, {[s.active]:state})}>
		
			<LogoIcon className={s.logo}/> 
			<span>Frontend development</span>
		
	</p>
	</div>
	)
}

