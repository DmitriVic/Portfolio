import Image from 'next/image'
import s from './AboutMe.module.css'
import { AboutMeprops } from './AboutMe.props'
import Foto from './фото на резуме.jpg'


// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';
import { useEffect, useRef } from 'react'



export const AboutMe = ({ setUpBlockAboutme}: AboutMeprops): JSX.Element => {
	const ref = useRef<HTMLDivElement>(null)
	useEffect(() => {
		if (ref !== null && ref !== undefined) {
			const rect = ref.current?.getBoundingClientRect();		
			if (setUpBlockAboutme !== undefined) {				
				setUpBlockAboutme(rect?.y)
			}
		}
	 }, [])
	 
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
		<div ref={ref} id='AboutMe' className={s.wrapper}>
			<h3 className={s.title}>Обо мне</h3>
				<div className={s.imges}>
				<Image
					src={Foto}
					className={s.img}
					alt=''
					width={0}
					height={0}
					placeholder='blur'
				/>

			</div>
			<div className={s.text}>
				Как вы уже поняли меня зовут Дмитрий мне  {resultAge()}. Фронтом увлекаюсь с 2019г.
				Обучился таким основным технологиям как HTML, CSS, Javascript(React), более подробно в резюме. На данный момент использую  Next. С помощью него написан сей сайт. В настоящий время работаю в сфере строительства и ремонта. Люблю занятия спортом, природу, саксафон, сноуборд.

			</div>
			<div className={s.bgAboutMe}></div>
		</div>
		
	</>
}

