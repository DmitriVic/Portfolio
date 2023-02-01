import s from './Works.module.css'
import cn from 'classnames'

import { WorksProps } from './Works.props'
import { SliderSWiper } from '../SliderSWiper/SliderSWiper'
import { Children } from 'react'
import Image from 'next/image'
import bg from './WorksBg.jpg'


export const Works = ({ children }: WorksProps): JSX.Element => {
	return (
		<div id='Works' className={s.wrapper}>
		<h3 className={s.title}>Мои работы</h3>
	
		{children}
		<div className={s.box}>
			{/* <Image
			className={s.image}
			width={0}
			height={0}
			src={bg}
			alt="" /> */}
		</div>
		</div>
	)
}





