
import { useEffect, useState } from 'react';
import s from './Video.module.css'
import { VideoProps } from "./Video.props";

// import cn from 'classnames'


export const Video = ({}: VideoProps): JSX.Element => {
	const [first, setfirst] = useState<string | undefined>('')

	const currentMonth: number = new Date().getMonth() + 1
	let path = ''
	switch (currentMonth) {
		case 9: case 10: case 11:  
			 path = '/autumn.mp4'
			break;
		case 12: case 1: case 2:  
			 path = '/winter.mp4'
			break;
		case 3: case 4: case 5:  
			 path = '/spring.mp4'
			break;
		case 6: case 7: case 8:  
			 path = '/summer.mp4'
			break;
		default:
			break;
	}
	
	console.log(path);
	
	

	useEffect(() => {		
		if (window.innerWidth <= 768 && window !== undefined ) {
			setfirst('/winterMobail.mp4')	
		}
	}, [])
	

  return (
    <>
      <video className={s.bg} src={first ? first : path} autoPlay muted loop />
      {/* <video className={s.bg} src='https://www.youtube.com/watch?v=0VJba-kk0oo&list=PLsErSZfBtknanL2rj3-CQ6-HtONiqaQpo&index=3' />  */}
		

    </>
  );
};
