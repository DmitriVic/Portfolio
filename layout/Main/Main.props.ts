import { DetailedHTMLProps, HTMLAttributes, Dispatch, SetStateAction } from 'react';

export interface MainProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	setMainBlockHeight?: Dispatch<SetStateAction<number | undefined>>;
	setUpBlockAboutme?: Dispatch<SetStateAction<number | undefined>>;
 }