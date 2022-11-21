
//import { HeartTwoTone} from "@ant-design/icons/lib/icons";
//import "antd/dist/antd.css";
//import cn from "classnames";
import { CardProps } from "./Card.props";
import s from "./Card.module.scss";


export const Card = ({children}: CardProps): JSX.Element => {

  return (
    <>
      <div className={s.Card}>
			{children}
		</div>
    </>
  );
};

export default Card



