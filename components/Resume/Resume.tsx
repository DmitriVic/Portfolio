import s from './Resume.module.css'
//import { ResumeProps } from './Resume.props'
//import cn from 'classnames'


import { useEffect, useRef, useState } from 'react';
import { Progress } from '../Progress/Progress';
// import ArrowIcon from './arrow.svg';


export const Resume = ({ }): JSX.Element => {
	const a =1;

	const [start, setStart] = useState(false)

	//const ProgressHeight = useRef<HTMLDivElement>(null)
	
	
	const ref = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (ref.current != null) {
	const rect = Math.round( ref?.current.getBoundingClientRect().y);
	//const rect =  ref?.current.getBoundingClientRect();
	//console.log(rect);
	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', function () {
			// console.log(scrollY);
			
			if (scrollY > rect) {
				setStart(true)
				//console.log('block');
				
			}

		});
	} 
 }
},[]);

	return (
		<div id='Resume'  className={s.resume}>
			<h3 className={s.title}>Резюме</h3>
			<div ref={ref} className={s.skills}>
				<div className={s.block}>
					<h4 className={s.subtitle}>Образование</h4>
					<div className={s.box}>
						Курсы Сбер университет{a}
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
						JavaScript, React(Next), Fetch, AJAX,  Hooks, Promises JS.
						<br /><br />
						Библиотеки:
						<br />
						React Router, React Hook Form, Classnames, Ant Design ...
						<br /><br />
						Инструменты:
						<br />
						VScode, Git, Figma, ESLint, Stylelint, Photoshop, Webpack, Gulp,
						Postman, npm, yarn.
						
					</div>
				</div>
				<div className={s.block}>
					<h4 className={s.subtitle}>Опыт работы</h4>
					<div className={s.box}>
						Два года работал в сервисе по настройке и ремонту пк в должности мастера
						<br /> <br />
						В течении 1,5 года получал практический опыт программирования под руководством опытных менторов(проекты, в том числе и этот сайт можете наблюдать ниже в примерах работ)
						<br /> <br />
						Пять лет работал в должности слесаря `МОСОБЛГАЗ`
						<br /> <br />
						Работаю в строительстве и отделке домов, квартир и помещений(частная практика), на протяжении 12 лет.

					</div>
				</div>
				<div className={s.block}>
					<h4 className={s.subtitle}>Почему  IT и Фронтенд</h4>
					<div className={s.box}>
						Тут все просто, еще во времена юности интересовался компьютером, работал в сфере ремонта и настройки компьютерного оборудования и программного обеспечения. Фронт в то время был скажем, не особо привлекателен)
						Начиная с 2019 года  зантересовался фронтом. На данный момент пишу, экспериментирую для себя и других,(сайты-лендинги) как хобби. Большей частью верстаю, но также люблю логику JS, React. В основном работаю по туториалам, много серфю интернет. Также не забываю добавить, что-то от себя). Стараюсь применить свои навыки в профессиональном плане.
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
			<div  className={s.progressWraper} >
				<Progress percent={65} text='HTML' color='purple' start={start}  />
				<Progress percent={70} text='CSS' color='blue' start={start}/>
				<Progress percent={67} text='Javascript' color='yellow' start={start}/>
				<Progress percent={54} text='React(Next)' color='orange' start={start}/>
			</div>

		</div>)
}

