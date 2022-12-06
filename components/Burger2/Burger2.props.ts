import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';
import { ReactNode } from 'react';
// example

// import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface Burger2props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	modalActive: boolean;
	state: boolean;
	setState: any;
	setModalActive: Dispatch<SetStateAction<boolean>>
}