import { HeaderProps } from './Header.props';
import s from './Header.module.css'
import cn from 'classnames';

import { Logo } from '../../components/Logo/Logo';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	
	
	return (
		<div className={cn(className, s.wrapper)} {...props}>
			<Logo/>
			

			
	
	{/* <p className={cn(s.block, s.active)}>header</p> */}
		</div>
	);
};


