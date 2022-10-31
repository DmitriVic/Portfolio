 import s from './TextComponent.module.css'
// import { ButtonProps } from './Button.props'
import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

// export const Button = ({ appearance, arrow = 'none',  children, className, ...props }: ButtonProps): JSX.Element => {
// 	return (
// 	<button  className={cn(s.button, className, {
// 		[s.primary]: appearance == 'primary',
// 		[s.ghost]: appearance == 'ghost',
// 	})}
// 	{...props}
// 	>
// 		{children}
// 		{arrow != 'none' && <span className={cn(s.arrow, {
// 				[s.down]: arrow == 'down'
// 			})}>
// 				<ArrowIcon />
// 			</span>}
			
// 	</button>)
// }


export const TextComponent = ({  }): JSX.Element => {
	return (
	<>
	<>
  <div className={cn(s['wrapper'], s["parallax"])}>
    <div className={cn(s["parallax-layer"], s["parallax-image"])}>
      <img src="https://i.pinimg.com/originals/9e/20/fc/9e20fc9ba2e1456ff29caa6780521cb7.jpg" alt="Сад изящных слов"/>
    </div>
    <span className={cn(s["parallax-layer"], s["parallax-text"])} >Сад изящных слов</span>
  </div>
</>
	</>
	)
}

