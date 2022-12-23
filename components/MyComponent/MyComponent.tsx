// import s from './Button.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
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


// export const шаблон = ({  }): JSX.Element => {
// 	return (
// 		<>
			
// 		</>
// 	)
// }
import { useSpring ,animated } from '@react-spring/web'

export default function MyComponent() {
	const springs = useSpring({
		from: { x: 0 },
		to: { x: 100 },
	 })

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
		  ...springs
      }}
    />
  )
}
