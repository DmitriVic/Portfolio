import { Dispatch, SetStateAction } from 'react';
// example

import { DetailedHTMLProps, HTMLAttributes  } from "react";

// import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface AboutMeprops extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	setUpBlockAboutme?: Dispatch<SetStateAction<number | undefined>>;
}