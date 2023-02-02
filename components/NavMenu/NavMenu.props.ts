import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';

// example

// import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface NavMenuprops extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	state: boolean;
	setState: Dispatch<SetStateAction<boolean>>;
}