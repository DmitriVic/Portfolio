// example

// import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

// export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
// 	children: ReactNode;
// 	appearance: 'primary' | 'ghost';
// 	arrow?: 'right' | 'down' | 'none';
// }

import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	size?: 's' | 'm' | 'l';
	children: ReactNode;
}