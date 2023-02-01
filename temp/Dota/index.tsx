




// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import s from "./index.module.css";
import { useState,} from "react";
import { useInterval } from "usehooks-ts";

// export const Dot = ({}): JSX.Element => {
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);

//   useInterval(() => {
//     const newX = Math.random() * window.innerWidth;
//     const newY = Math.random() * window.innerHeight;
//     setX(newX);
//     setY(newY);
//   }, 5000);

//   return (
//     <div
//       style={{
//         left: x,
//         top: y,
//       }}
//       className={s.dot}
//     ></div>
//   );
// };

import React, { useEffect,} from 'react';
import styled from 'styled-components';

const Dot = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
`;

export const Dota = () => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomTop = Math.floor(Math.random() * window.innerHeight);
      const randomLeft = Math.floor(Math.random() * window.innerWidth);

      setTop(randomTop);
      setLeft(randomLeft);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return <Dot style={{ top, left }} />;
};

//export default RandomDot;


