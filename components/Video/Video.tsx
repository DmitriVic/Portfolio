import s from './Video.module.css'
import { VideoProps } from "./Video.props";

// import cn from 'classnames'


export const Video = ({}: VideoProps): JSX.Element => {
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
  return (
    <>
      <video className={s.bg} src={path} autoPlay muted loop />
    </>
  );
};
