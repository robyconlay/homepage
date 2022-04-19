import React from "react";
import styled, { keyframes } from "styled-components";


const slideInAnimation = keyframes`
  to{
    left: 100%;
  }
`;

const fadeInUpAnimation = keyframes`
from {
  opacity:0;
}
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
    background: var(--bg-color);
  animation: ${slideInAnimation} 5s forwards;
  }
`;

export const Subtitle = styled.p`
  opacity: 70%;
  font-size: 2em;
  font-weight: 400;
  font-family: "Source Sans Pro", sans-serif;
  animation: fadeInUp 2s ease 5.5s forwards;
  transform: translateY(3rem);
`;
