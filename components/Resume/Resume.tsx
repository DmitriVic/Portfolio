import s from './Resume.module.css'
//import { ResumeProps } from './Resume.props'
//import cn from 'classnames'
import Card from '../Card/Card'
import { P } from '../P/P'
import { Progress } from 'antd';
import { useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
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
	 const [first, setfirst] = useState(0)

	// setTimeout(() => {
	// 	if (first<80) {
	// 		setfirst(el => el + 1)
	// 	}

	// }, 50);
	
	if (typeof window !== 'undefined') {
		console.log('You are on the browser')
		// ✅ Can use window here
		window.addEventListener('scroll', function() {
			//console.log(pageYOffset);
			if (scrollY > 2000) {
				console.log('ddddddddddddddddddd');
				setfirst(a => a = 60)
				console.log(first);	
			}
			
		 });
		
		
	 } else {
		console.log('You are on the server')
		// ⛔️ Don't use window here
	 }
	

	
	
	return (
		<div  id='Resume' className={s.resume}>
			<h2>Resume</h2>
			<div className={s.skills}>
				<div className={s.block}>
					<h3 className={s.title}>Знания и умения</h3>
					<div className={s.box}>
						<h4 className={s.subtitle}>Получаю высшее</h4>
						<P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore asperiores nam possimus praesentium impedit dolorum pariatur, cupiditate temporibus, hic minus vel minima obcaecati at qui quia atque? Rerum, reprehenderit quisquam.</P>
					</div>
					<div className={s.box}>
						<h4 className={s.subtitle}>Получаю высшее</h4>
						<P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore asperiores nam possimus praesentium impedit dolorum pariatur, cupiditate temporibus, hic minus vel minima obcaecati at qui quia atque? Rerum, reprehenderit quisquam.</P>
					</div>
				</div>
				<div className={s.block}>
					<h3 className={s.title}>Знания и умения</h3>
					<div className={s.box}>
						<h4 className={s.subtitle}>Получаю высшее</h4>
						<P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore asperiores nam possimus praesentium impedit dolorum pariatur, cupiditate temporibus, hic minus vel minima obcaecati at qui quia atque? Rerum, reprehenderit quisquam.</P>
					</div>
					<div className={s.box}>
						<h4 className={s.subtitle}>Получаю высшее</h4>
						<P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore asperiores nam possimus praesentium impedit dolorum pariatur, cupiditate temporibus, hic minus vel minima obcaecati at qui quia atque? Rerum, reprehenderit quisquam.</P>
					</div>
				</div>
			</div>
			<div className={s.skillsProgres}>
				<div className={s.boxProgress}>
					<p>HTML</p>
					<ProgressBar  height='10px' completed={first} animateOnRender={true} transitionDuration='3s'></ProgressBar>
				</div>
				<div className={s.boxProgress}>
					<p>HTML</p>
					<ProgressBar height='10px' completed={first} animateOnRender={true} transitionDuration='3s'></ProgressBar>
				</div>
				<div className={s.boxProgress}>
					<p>HTML</p>
					<ProgressBar height='10px' completed={first} animateOnRender={true} transitionDuration='3s'></ProgressBar>
				</div>
				<div className={s.boxProgress}>
					<p>HTML</p>
					<ProgressBar height='10px' completed={first} animateOnRender={true} transitionDuration='3s'></ProgressBar>
				</div>
				<div className={s.boxProgress}>
					<p>HTML</p>
					<ProgressBar height='10px' completed={first} animateOnRender={true} transitionDuration='3s'></ProgressBar>
				</div>
				<div className={s.boxProgress}>
					<p>HTML</p>
					<ProgressBar height='10px' completed={first} animateOnRender={true} transitionDuration='3s'></ProgressBar>
				</div>
				<div className={s.boxProgress}>
					<p>HTML</p>
					<ProgressBar height='10px' completed={first} animateOnRender={true} transitionDuration='3s'></ProgressBar>
				</div>
				<div className={s.boxProgress}>
					<p>HTML</p>
					<ProgressBar height='10px' completed={first} animateOnRender={true} transitionDuration='3s'></ProgressBar>
				</div>
			</div>
			
		</div>)
}

