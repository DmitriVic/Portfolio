import classNames from "classnames";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Video } from "../../components/Video/Video";
import { Header } from "../Header/Header";
import s from "./Main.module.css";
import { MainProps } from "./Main.props";
import cn from "classnames";
import { MainBlock } from "../../components/MainBlock/MainBlock";
import { AboutMe } from "../../components/AboutMe/AboutMe";
import { Resume } from "../../components/Resume/Resume";
import { AboutMe2 } from "../../components/AboutMe2/AboutMe2";
import MyComponent from "../../components/MyComponent/MyComponent";
//import { format } from 'date-fns';

// interface dataMonthProps {
// 	dataMonthProps: number
// }


export const Main = ({setMainBlockHeight, ...props }: MainProps): JSX.Element => {
   
	
	
	 
	

 
  return (
    <main className={s.main} {...props}>
		<MainBlock
		setMainBlockHeight={setMainBlockHeight}
		>
		Всем привет меня зовут Дмитрий, добро пожаловать в мое портфолио. В верхнем правом углу вы найдете меню навигации по сайту. Хорошего настроения :)
		</MainBlock>
      <Video />
		{/* <div style={{height: '30px'}}></div> */}
		<AboutMe />
		{/* <div style={{height: '30px'}}></div> */}
		{/* <AboutMe2/> */}
		<Resume/>
		<MyComponent/>
    </main>
  );
};







