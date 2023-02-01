import { HTMLAttributes } from 'react';
// example

 import { DetailedHTMLProps, ReactNode } from 'react';

export interface WorksProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode; 
}