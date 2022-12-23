import Image from 'next/image'
import s from './AboutMe2.module.css'
import { AboutMe2props } from './AboutMe2.props'
import Foto from './фото на резуме.jpg'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
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
// var now = new Date()
//console.log(new Date().getFullYear() - 1984);


export const AboutMe2 = ({ }: AboutMe2props): JSX.Element => {
	function resultAge() {
		let now = new Date();
	let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	let dob = new Date(1984, 8, 30);
	let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
	let age;
	age = today.getFullYear() - dob.getFullYear();
	if (today < dobnow) {
		age = age - 1;
	}
	return age
	}
	

	return <>
		<div id='AboutMe2' className={s.wrapper}>
		<div className={s.container}>
  <h1>
    <span><i> Обо </i></span>
    <span><i> Мне </i></span>
    <span><i>products </i> </span>
    {/* <span><i>start</i></span>
    <span><i>with</i></span>
    <span><i>Sketch</i></span> */}
  </h1>
  <p>
    Create, prototype, collaborate, and bring your ideas to life with the design platform used by over one million people — from freelancers, to the world’s largest teams.
  </p>
</div>
		</div>
	</>
}

