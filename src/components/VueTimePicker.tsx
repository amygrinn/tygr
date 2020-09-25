import React from 'react';
import Page, { PageProps } from './Page';

type VueTimePickerProps = PageProps;

export default (props: VueTimePickerProps) => (
  <Page
    {...props}
    name="Vue Time Picker!"
    path="/vue-time-picker"
    color="green"
  />
);
