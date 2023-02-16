import s from "./MainBlock.module.css";
import cn from "classnames";
// import ArrowIcon from './arrow.svg';

import { useEffect, useState } from "react";
import { MainBlockProps } from "./MainBlock.props";
import { TextAnim } from "text-animations-react";

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

export const MainBlock = ({ children }: MainBlockProps): JSX.Element => {
  const [stateText, setStateText] = useState<string>("");
  const [bannerVisible, setBannerVisible] = useState(false);
  const [sizeT, setSizeT] = useState(3);


  useEffect(() => {
    const text = children;
	 
    let count: number = 2000;
    if (stateText.length > 0) {
      count = 60;
    }
    let TimeId = setTimeout(() => {
      setStateText(stateText + text[stateText?.length]);
    }, count);

    if (stateText.length === text?.length) {
      setBannerVisible(true);
      clearTimeout(TimeId);
    }
	 if (window.screen.width < 400) {
		setSizeT(2)
	 }
	 
  }, [children, stateText]);
console.log(sizeT);

  return (
    <div className={s.mainBlock}>
      {stateText}
      <div className={cn({[s.active]: bannerVisible })}>
        { bannerVisible &&
          <TextAnim
            name="I need a job &#128512;"
            size={sizeT}
            type="popoutin"
            color='yellow'
            count="1"
            duration={4} delay={0} grad1={""} grad2={""} grad3={""} grad4={""} layer1={""} layer2={""} layer3={""} layer4={""} top={0} right={0} bottom={0} left={0} styles={{}}
          />
        }
      </div>
    </div>
  );
};
