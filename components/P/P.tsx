// example

// import cn from "classnames"
// import { ParagrafProps } from "./paragraf.props"
// import s from './Paragraf.module.css'

// export const Paragraf = ({  }): JSX.Element => {
// 	return <></>
// }

import cn from "classnames"
import { PProps } from "./P.props"

import s from './P.module.css'

export const P = ({ size = 'm', children, className, ...props }: PProps): JSX.Element => {
	return (
		<p
			className={cn(s.p, className, {
				[s.s]: size == 's',
				[s.m]: size == 'm',
				[s.l]: size == 'l',
			})}
			{...props}
		>
			{children}
		</p>
	);
};