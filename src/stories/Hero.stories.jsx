import React from 'react';
import Hero from '../components/portfolio/hero';

export default {
  title: 'Portfolio/Hero',
};

const Template = () => <Hero />;

export const Default = Template.bind({});

Default.args = {
  primary: true,
  label: 'Button',
};