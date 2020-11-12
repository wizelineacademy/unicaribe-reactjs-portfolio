import React from 'react';
import Habilidades from '../components/portfolio/habilidades';

export default {
  title: 'Portfolio/Habilidades',
};

const Template = () => <Habilidades />;

export const Default = Template.bind({});

Default.args = {
  primary: true,
  label: 'Button',
};