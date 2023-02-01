
import { DetailedHTMLProps, HTMLAttributes, Dispatch, SetStateAction } from 'react';
// example

// import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface MainBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: string;
	setMainBlockHeight?: Dispatch<SetStateAction<number| undefined>>
}