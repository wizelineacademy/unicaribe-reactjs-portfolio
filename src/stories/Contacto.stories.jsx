import React from 'react';
import Contacto from '../components/portfolio/contacto';

export default {
  title: 'Portfolio/Contacto',
};

const Template = () => <Contacto />;

export const Default = Template.bind({});

Default.args = {
  primary: true,
  label: 'Button',
};