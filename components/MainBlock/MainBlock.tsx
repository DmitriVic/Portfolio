 import s from './MainBlock.module.css'
// import ArrowIcon from './arrow.svg';

import {   useState } from "react";
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


export const MainBlock = ({ children }: MainBlockProps): JSX.Element => {
	const [stateText, setStateText] = useState<string>('')
	// const mainBlockHeight = useRef<HTMLDivElement>(null)
	
	
	// useEffect(() => {
	// 	setMainBlockHeight(mainBlockHeight.current?.offsetHeight)
	// }, [])
	



	const text = children;
	let count: number = 2000
	if (stateText.length > 0) {
		count = 60
	 }
	 let TimeId = setTimeout(() => {
		setStateText(stateText + text[stateText?.length])
		}, count);
		
		if (stateText.length === text?.length) {
		  clearTimeout(TimeId)	
	  }

	return (
	<div  className={s.mainBlock}>
	{stateText}
	</div>
	)
}

