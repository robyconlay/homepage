import sideflipImage from '../images/sideflipx2.jpg'
import styles from './Welcome.module.css';

import styled, { keyframes } from "styled-components";

import { useTheme } from '../ThemeContext';


export default function Welcome() {
  const theme = useTheme();

  return (
    <div className={styles.welcome_container}>
      <WelcomeTitle bg={theme.body.backgroundColor}>Hello, my name is Roberto.</WelcomeTitle>
      <Subtitle>Welcome to my homepage</Subtitle>
      {/* <h1>Hello, my name is Roberto.</h1> */}
      {/* <p className={styles.subtitle} style={h1Style}>Welcome to my homepage</p> */}
      {/* <img src={sideflipImage} alt='Roberto' className={styles.welcome_image} /> */}
      {/* <p className={styles.text_on_image}>Roberto,<br /> appassionato e entusiasta</p> */}
    </div>
  )
}


const slideInAnimation = keyframes`
  to{
    left: 100%;
  }
`;

const fadeInUpAnimation = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const WelcomeTitle = styled.h1`
  font-family: "Source Code Pro", monospace;
  font-size: clamp(1rem, 3vw + 1rem, 4rem);
  width: max-content;
  position: relative;

  &:before{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${props => props.bg};
    animation: ${slideInAnimation} 5s forwards;
  }
`;

export const Subtitle = styled.p`
  opacity: 70%;
  font-size: 2em;
  font-weight: 400;
  font-family: "Source Sans Pro", sans-serif;
  animation: ${fadeInUpAnimation} 2s ease 5.5s forwards;
  opacity:0;
    transform: translateY(3rem);
`;
