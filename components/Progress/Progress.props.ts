

// example

 import { HtmlHTMLAttributes, DetailedHTMLProps  } from 'react';

export interface Progressprops extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	start: boolean;
	percent: number;
	text: string;
	color: "yellow" | 'purple' | 'blue' | 'orange';
}

