import s from './Resume.module.css'
 //import { ResumeProps } from './Resume.props'
import cn from 'classnames'
import Card from '../Card/Card'
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


export const Resume = ({ }): JSX.Element => {
	return (
		<div className={s.resume}>
		<h2>Resume</h2>
		<div className={s.skills}>
		<div className={s.Box}>
			<Card>d</Card>
			<Card>d</Card>
		</div>
		<div className={s.Box}>
			<Card>d</Card>
			<Card>d</Card>
		</div>
		
		
		
		</div>
		</div>)
}

