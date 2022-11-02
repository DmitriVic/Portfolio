
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


 import s from './Logo.module.css'
 
 import cn from 'classnames'
import { LogoProps } from './Logo.props'
import LogoIcon from './logo.svg'

export const Logo = ({ className, state, setState }:LogoProps): JSX.Element => {
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

