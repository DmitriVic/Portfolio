import s from './Works.module.css'


import { WorksProps } from './Works.props'



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





