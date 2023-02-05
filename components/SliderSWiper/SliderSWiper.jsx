
//import { HeartTwoTone} from "@ant-design/icons/lib/icons";
//import "antd/dist/antd.css";
//import cn from "classnames";
import s from "./SliderSWiper.module.css";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import images from './img.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Image from "next/image";



export const SliderSWiper = () => {
	
	const works = ['работа 1', 'работа 2','работа 3']
	return (
		
			<div>
				<Swiper
				
						//   cssMode={true}
						  navigation={true}
						  pagination={{ clickable: true, }}
						//   mousewheel={true}
							keyboard={true}
					
						  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
						  className={s.myswiper}
						>
				
				{works.map((el, indx) => {
					 return <SwiperSlide key={indx} className={s.swiperSlide}>
					 <div className={s.slide}>
						 <div className={s.title}>Название работы</div>
						 <a href="">
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
				})}
			
				
						</Swiper>
						{/* <div style={{'height': 200, 'width':200, 'background': 'black'}}></div> */}
							{/* <button style={{'zIndex': 1000, 'height': 100}} onClick={()=>(swiper.navigation.nextEl())}>yf;vb vtyz</button> */}
			</div>
		
	 );
};





