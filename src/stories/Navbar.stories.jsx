import React from 'react';
import Navbar from '../components/portfolio/navbar';

export default {
  title: 'Portfolio/Navbar',
};

const Template = () => <Navbar />;

export const Default = Template.bind({});

Default.args = {
  primary: true,
  label: 'Button',
};