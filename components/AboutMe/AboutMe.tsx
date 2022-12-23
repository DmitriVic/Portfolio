import Image from 'next/image'
import s from './AboutMe.module.css'
import { AboutMeprops } from './AboutMe.props'
import Foto from './фото на резуме.jpg'


// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';
import { Special, TextAnim } from "text-animations-react"



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
		<div id='AboutMe' className={s.wrapper}>
			{/* <div className={s.title}><TextAnim name="Обо Мне" type="rubberband" color="var(--dark-green)" size={3} count="infinite" duration={4} delay={0} grad1={''} grad2={''} grad3={''} grad4={''} layer1={''} layer2={''} layer3={''} layer4={''} styles={Object} top={0} right={0} bottom={0} left={0} />
			</div> */}
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

