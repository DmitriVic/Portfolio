import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";


export interface LayoutProps extends DetailedHTMLProps <HtmlHTMLAttributes<HTMLElement>, HTMLElement> {
	children: ReactNode;
}