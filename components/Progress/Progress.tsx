
import {  useState } from 'react';
import s from './Progress.module.css'
import { Progressprops } from './Progress.props';
//import { Progress } from './Progress.props'
 import cn from 'classnames'
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


export const Progress = ({percent, text, color, start }:Progressprops): JSX.Element => {
	const [count, setCount] = useState(0)

	// if (start) {
	// 	setTimeout(() => {
	// 		if (count !== percent) {
	// 			setCount(count + 1)
	// 		}
			
	
	// 	}, 60);
	//  }
	//console.log(start);
	
	setTimeout(() => {
		if (start) {
			if (count !== percent) {
				setCount(count + 1)
			}	
		}
	}, 60);

	
	return (
		<>
			<div  className={cn(s.wrapper, {
		[s.orange]: color == 'orange',
		[s.blue]: color == 'blue',
		[s.yellow]: color == 'yellow',
		[s.purple]: color == 'purple',
	} )} >
				<label className={s.html} htmlFor="file">{text}</label>
				<progress className={s.progress} id="file" max="100" value={count}>  </progress>
				<label className={s.count} htmlFor="file"> {count}%</label>
			</div>
		</>
	)
}

