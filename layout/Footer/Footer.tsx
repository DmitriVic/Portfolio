import { FooterProps } from './Footer.props';
import s from './Footer.module.css';
import cn from 'classnames';
import { Modal } from '../../components/Modal/Modal';
//import { format } from 'date-fns';


export const Footer = ({setChangeModal,modalActive,setModalActive,...props}: FooterProps): JSX.Element => {
	//console.log({...props});
	
	
	return (
		<footer {...props}>
			
		<div className={s.wrapper}>
		<p className={s.text}>Created by D.V. Vlasov 2023</p>
		<button className={s.btn} onClick={()=>{setModalActive(true), setChangeModal(false)}}>Site info </button>
		</div>
		
		
		
			
		
	 </footer>
	);
};