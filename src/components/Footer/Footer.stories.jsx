// Button.stories.js|jsx

import React from 'react';

import Footer from './index';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Footer',
  component: Footer,
};

export const Primary = () => <Footer />;