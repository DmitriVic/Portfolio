 import s from './MainBlock.module.css'
  import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { useEffect, useRef, useState } from "react";
import { MainBlockProps } from './MainBlock.props';

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


export const MainBlock = ({setMainBlockHeight, children }: MainBlockProps): JSX.Element => {
	const [stateText, setStateText] = useState<string>('')
	const mainBlockHeight = useRef<HTMLDivElement>(null)
	
	
	useEffect(() => {
		setMainBlockHeight(mainBlockHeight.current?.offsetHeight)
	}, [])
	


	const text = children;
	let count: number = 3000
	if (stateText.length > 0) {
		count = 100
	 }
	 let TimeId = setTimeout(() => {
		setStateText(stateText + text[stateText?.length])
		}, count);
		
		if (stateText.length === text?.length) {
		  clearTimeout(TimeId)	
	  }

	return (
	<div ref={mainBlockHeight} className={s.mainBlock}>
	{stateText}
	</div>
	)
}

