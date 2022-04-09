// Button.stories.js|jsx

import React from 'react';

import Bio from './index';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Bio',
  component: Bio,
};

export const Primary = () => <Bio year='xxxx' text='Lorem ipsum dolor sit amet' />;