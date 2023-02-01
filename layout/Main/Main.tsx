import classNames from "classnames";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { Video } from "../../components/Video/Video";
import { Header } from "../Header/Header";
import s from "./Main.module.css";
import { MainProps } from "./Main.props";
import cn from "classnames";
import { MainBlock } from "../../components/MainBlock/MainBlock";
import { AboutMe } from "../../components/AboutMe/AboutMe";
import { Resume } from "../../components/Resume/Resume";
import { SliderSWiper } from "../../components/SliderSWiper/SliderSWiper";
import { Works } from "../../components/Works/Works";
import { FormCustom } from "../../components/FormCustom/FormCustom";
import { Contacts } from "../../components/Contacts/Contacts";






//import MyComponent from "../../components/MyComponent/MyComponent";
//import { format } from 'date-fns';

// interface dataMonthProps {
// 	dataMonthProps: number
// }


export const Main = ({setUpBlockAboutme,setMainBlockHeight, ...props }: MainProps): JSX.Element => {
	
  return (
    <main className={s.main} {...props}>
		<MainBlock
		
		>
		Всем привет меня зовут Дмитрий, добро пожаловать в мое портфолио. В верхнем правом углу вы найдете меню навигации по сайту. Хорошего настроения :)
		</MainBlock>
      <Video />
		
		<AboutMe 
		setUpBlockAboutme={setUpBlockAboutme}
		/>
		
		<Resume/>
		<Works>
		<SliderSWiper/>
		</Works>
		<Contacts/>
		
		
    </main>
  );
};







