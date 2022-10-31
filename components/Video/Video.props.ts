// example

import { DetailedHTMLProps, VideoHTMLAttributes } from "react";

// import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface VideoProps extends DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> {
	// children: ReactNode;
	// appearance: 'primary' | 'ghost';
	// arrow?: 'right' | 'down' | 'none';
}