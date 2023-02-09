
//import { HeartTwoTone} from "@ant-design/icons/lib/icons";
//import "antd/dist/antd.css";
//import cn from "classnames";
import s from "./SliderSWiper.module.css";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import images from './img.jpg'
import TableBS from './img/TableBS.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Image from "next/image";



export const SliderSWiper = () => {

	const works = ['работа 1', 'работа 2', 'работа 3']
	return (


		<Swiper

			navigation={{ position: 'bottom' }}
			pagination={{ clickable: true, }}
			//   mousewheel={true}
			keyboard={true}

			modules={[Navigation, Pagination, Mousewheel, Keyboard]}
			className={s.myswiper}
		>


			<SwiperSlide className={s.swiperSlide}>
				<div className={s.slide}>
					<div className={s.title}>Таблица с сортировкой и поиском</div>
					<a href="https://dmitrivic.github.io/Table-BS/" target='blank'>
						<Image
							width={400}
							height={300}
							className={s.image}
							src={TableBS}
							alt="" />
					</a>
					<p>Реализовано небольшое экспериментальное приложение на React(функциональный компонент) таблица с данными.
						На одной странице отображаются только 10 записей.
						Под таблицей располагается пагинация, при переключении классов использовалась библиотека Classnames.
						Переключение между страницами происходит без перезагрузки, использовалась библиотека React Router v6
						При нажатии на галочку в заголовках столбцов происходит сортировка записей (от большего к меньшему и по алфавиту).
						В строке поиска можно ввести любое значение, и в таблице отобразится запись, в которой данное значение присутствует.
						Страница таблицы отображается в URL браузера.(React Router v6)
						При создании приложение не использовались библиотеки компонентов.</p>
				</div>
			</SwiperSlide>
			<SwiperSlide className={s.swiperSlide}>
				<div className={s.slide}>
					<div className={s.title}>Название работы</div>
					<a href="" target='blank'>
						<Image
							width={400}
							height={300}
							className={s.image}
							src={images}
							alt="" />
					</a>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nobis necessitatibus inventore sequi, atque dolore placeat repellat itaque molestiae, distinctio laborum magnam accusamus, assumenda rerum tempora minus nihil sit id?</p>
				</div>
			</SwiperSlide>



		</Swiper>



	);
};





// {works.map((el, indx) => {
// 	return <SwiperSlide key={indx} className={s.swiperSlide}>
// 		<div className={s.slide}>
// 			<div className={s.title}>Название работы</div>
// 			<a href="">
// 				<Image
// 					width={400}
// 					height={300}
// 					className={s.image}
// 					src={images}
// 					alt="" />
// 			</a>
// 			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nobis necessitatibus inventore sequi, atque dolore placeat repellat itaque molestiae, distinctio laborum magnam accusamus, assumenda rerum tempora minus nihil sit id?</p>
// 		</div>
// 	</SwiperSlide>
// })}
