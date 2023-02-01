import { DetailedHTMLProps, Dispatch, HtmlHTMLAttributes, ReactNode, SetStateAction } from "react";


export interface LayoutProps extends DetailedHTMLProps <HtmlHTMLAttributes<HTMLElement>, HTMLElement> {
	children: ReactNode;
	setUpBlockAboutme?: Dispatch<SetStateAction<number>>
}