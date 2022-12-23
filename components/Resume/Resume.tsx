import s from './Resume.module.css'
import 'animate.css';
//import { ResumeProps } from './Resume.props'
//import cn from 'classnames'
import Card from '../Card/Card'
import { P } from '../P/P'
import { Progress } from 'antd';
import { useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
// import ArrowIcon from './arrow.svg';


export const Resume = ({ }): JSX.Element => {
	const [first, setfirst] = useState(0)

	// setTimeout(() => {
	// 	if (first<80) {
	// 		setfirst(el => el + 1)
	// 	}

	// }, 50);

	if (typeof window !== 'undefined') {
		//console.log('You are on the browser')
		// ✅ Can use window here
		window.addEventListener('scroll', function () {
			//console.log(pageYOffset);
			if (scrollY > 2000) {
				console.log('ddddddddddddddddddd');
				setfirst(a => a = 60)
				console.log(first);
			}

		});


	} else {
		//console.log('You are on the server')
		// ⛔️ Don't use window here
	}




	return (
		<div id='Resume' className={s.resume}>
			<h3 className={s.title}>Резюме</h3>
			<div className={s.skills}>
				<div className={s.block}>
					<h4 className={s.subtitle}>Образование</h4>
					<div className={s.box}>
						Курсы Сбер университет
						<br />
						frontend разработчик
						<br />
						<br />
						Курсы Purpleshcool (Next Js)
						<br />
						<br />
						7 Архитектурный колледж Москвы
						<br />
						Ремонт и эксплуатация систем газоснабжения. Техник
						<br />
						<br />
						ПУ 22 г.Сергиево-Посада
						автомеханик 

					</div>
				</div>
				<div className={s.block}>
					<h4 className={s.subtitle}>Навыки</h4>
					<div className={s.box}>
						Верстка:
						<br />
						HTML5, CSS3, SCSS, Адаптивная Верстка, FlexBox, Grid, БЭМ.
						<br /> <br />
						Веб-программирование:
						<br />
						JavaScript, React(Next), Fetch, AJAX,  Hooks, Promises JS, React Router, React Hook Form.
						<br /><br />
						Библиотеки:
						<br />
						React Router, React Hook Form, Classnames, Ant Design ...
						<br /><br />
						Инструменты:
						<br />
						VScode,Git,Figma,Photoshop,Webpack, Gulp,Git,Postman,npm,yarn.
					</div>
				</div>
				<div className={s.block}>
					<h4 className={s.subtitle}>Опыт работы</h4>
					<div className={s.box}>
						Два года работал в сервисе по настройке и ремонту пк в должности мастера
						<br /> <br />
						Пять лет работал в должности слесаря `мособлгаз`
						<br /> <br />
						Работаю в строительстве и отделке домов, квартир и помещений(частная практика), на протяжении 12 лет.

					</div>
				</div>
				<div className={s.block}>
					<h4 className={s.subtitle}>Почему  IT и Фронтенд</h4>
					<div className={s.box}>
						Тут все просто, еще во времена юности интересовался компьютером, работал в сфере ремонта и настройки пк. Фронт в то время был скажем, не особо привлекателен)
						Начиная с 2019 года начал интересоваться фронтом. На данный момент пишу, экспериментирую для себя и других,(сайты-лендинги) как хобби. Большей частью верстаю, но также люблю и JS, React. В основном работаю по туториалам, много серфю интернет. Но также не забываю добавить, что-то от себя). Стараюсь применить свои навыки в профессиональном плане.
					</div>
				</div>
			</div>
			{/* <div className={s.skillsProgres}>
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
			</div> */}
			{/* <div className={s.bgResume}></div> */}

		</div>)
}

