import { HeaderProps } from './Header.props';
import s from './Header.module.css'
import cn from 'classnames';
// import { Logo } from '../../components/Logo/Logo';
//import Versel from '../../public/Vercel.svg'
// import { Slide } from "react-awesome-reveal";
import LogoIcon from '../../public/logo.svg'
import { useState } from 'react';
import Image from 'next/image';
import { Logo } from '../../components/Logo/Logo';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	
	
	return (
		<div className={cn(className, s.wrapper)} {...props}>
			<Logo/>

			
{/* <Slide triggerOnce={true} direction='left'  >
  <p>Logo</p>
</Slide>
<Slide triggerOnce direction='right'>
  <p>burger</p>
</Slide> */}
	
	
	{/* <p className={cn(s.block, s.active)}>header</p> */}
		</div>
	);
};


