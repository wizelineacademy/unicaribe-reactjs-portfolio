import React from 'react';
import Footer from '../components/portfolio/footer';

export default {
  title: 'Portfolio/Footer',
};

const Template = () => <Footer />;

export const Default = Template.bind({});

Default.args = {
  primary: true,
  label: 'Button',
};