/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import s from "./index.module.css";
// import { ButtonProps } from './Button.props'
import cn from "classnames";
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

export const ModalInfoSite = ({}): JSX.Element => {
  return (
    <div className={s.container}>
      <h2 className={s.text}>Описание сайта</h2>
      <h3>Данный сайт портфолио написан на Next.js
			<br />
			Сайт адаптивен под мобильные и различные устройства
		</h3>
      <ul className={s.list}>
        <li className={s.subtext}>Использовались такие технологии как:</li>
        <li>
          <strong>Css Grid, Css Flexbox</strong> для построения сетки и адаптивного изображения
          под разные устройства. Так же использовались <strong>CSS Breakpoints</strong> для
          тонкой настройки адаптива.
        </li>
        <li>
          Эффекты сайта написаны на <strong>JS + Css</strong>, было желание минимально
          задействовать сторонние библиотеки.
        </li>
        <li>
          <strong>Classnames</strong> библиотека использовалась, для удобного добавления
          классов.
        </li>
        <li><strong>Slider-swiper</strong> для быстрого монтажа на сайт красивого слайдера.</li>
        <li>
          Отправка формы на почту осуществлялась с помощью <strong>Node.js</strong> и модуля 
          <strong> Nodemailer</strong>, валидация формы также была написана на JS.
        </li>

        <li>
          <strong>Сss.modules, Wedpack, ESlint</strong> шли из коробки и также были задействованы
          в коде. Был добавлен <strong>Stylelint</strong> для приведения <strong>CSS</strong> к единому стилю.
        </li>

        <li>
          Так же в проект был внедрен <strong>Typescript</strong> для наработки практических
          навыков.
        </li>
        <li>
		   Добавлена библиотека для анимации текста <strong>text-animations-react</strong>
        </li>
      </ul>
      <div className={s.image1}>
        <Image
          className={cn(s.imge)}
          src={
            "http://habrastorage.org/files/7cd/799/944/7cd79994458f4fc6a9345aa7444650a3.png"
          }
          height={40}
          width={40}
        />
      </div>
      <div className={s.image2}>
        <Image
          className={cn(s.imge)}
          src={
            "http://habrastorage.org/files/7cd/799/944/7cd79994458f4fc6a9345aa7444650a3.png"
          }
          height={40}
          width={40}
        />
      </div>
      <div className={s.image3}>
        <Image
          className={cn(s.imge)}
          src={
            "http://habrastorage.org/files/7cd/799/944/7cd79994458f4fc6a9345aa7444650a3.png"
          }
          height={40}
          width={40}
        />
      </div>
      <div className={s.image4}>
        <Image
          className={cn(s.imge)}
          src={
            "http://habrastorage.org/files/7cd/799/944/7cd79994458f4fc6a9345aa7444650a3.png"
          }
          height={40}
          width={40}
        />
      </div>
    </div>
  );
};
