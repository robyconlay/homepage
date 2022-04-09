// Button.stories.js|jsx

import React from 'react';

import Hobby from './index';
import sideflipImage from '../../sideflip.jpg'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Hobby',
  component: Hobby,
};

export const Primary = () => <Hobby
  title='Parkour and Freerunning'
  imagePath={sideflipImage}
  description='Roberto doing a Sideflip on sand'
  text='Lorem ipsum dolor sit amet'
/>;