import { HTMLAttributes, Dispatch, SetStateAction } from 'react';
// example

import {  DetailedHTMLProps} from 'react';

export interface ModalMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	modalActive: boolean
	setModalActive: Dispatch<SetStateAction<boolean>>
}