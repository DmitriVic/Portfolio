import {  HTMLAttributes, DetailedHTMLProps } from 'react';
// example

// import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface LogoProps extends DetailedHTMLProps <HTMLAttributes<HTMLDivElement>, HTMLDivElement > {
	state: boolean;
	setState: any
	//children: ReactNode;
 	// appearance: 'primary' | 'ghost';
 	// arrow?: 'right' | 'down' | 'none';
 }