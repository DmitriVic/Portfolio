import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { 
	modalActive: boolean;
	setModalActive: Dispatch<SetStateAction<boolean>>
	setChangeModal: Dispatch<SetStateAction<boolean>>
	mainBlockHeight?: number | undefined;
}