import React from 'react';
import Experiencia from '../components/portfolio/experiencia';

export default {
  title: 'Portfolio/Experiencia',
};

const Template = () => <Experiencia />;

export const Default = Template.bind({});

Default.args = {
  primary: true,
  label: 'Button',
};