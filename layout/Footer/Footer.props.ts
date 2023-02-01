import { DetailedHTMLProps, HTMLAttributes, Dispatch, SetStateAction } from 'react';

export interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { 
	modalActive?: boolean
	setModalActive: Dispatch<SetStateAction<boolean>>
	setChangeModal: Dispatch<SetStateAction<boolean>>
}