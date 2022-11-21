import Image from 'next/image'
import s from './AboutMe.module.css'
import { AboutMeprops } from './AboutMe.props'
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
console.log(new Date().setTime(40));




export const AboutMe = ({ }: AboutMeprops): JSX.Element => {
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
		<div className={s.wrapper}>

			<div className={s.title}>Обо мне</div>
			<div>
				<Image
					src={Foto}
					className={s.img}
					alt=''
					width={500}
					height={500}
					placeholder='blur'
				/>
			</div>
			<div className={s.text}>
				Lorem {resultAge()} ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem id optio quas voluptates animi laboriosam nobis molestiae ullam a totam facilis voluptate eveniet impedit fugiat repellendus rerum officia recusandae quia eaque, ex dicta! Quas quisquam magni molestiae tempore est
			</div>
		</div>
	</>
}

