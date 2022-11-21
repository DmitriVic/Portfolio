import { ReactNode, HTMLAttributes, DetailedHTMLProps } from 'react';
// example


export interface CardProps extends DetailedHTMLProps <HTMLAttributes<HTMLDivElement>, HTMLDivElement > {
	children: ReactNode;
 	// appearance: 'primary' | 'ghost';
 	// arrow?: 'right' | 'down' | 'none';
 }