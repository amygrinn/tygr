import React from 'react';
import Page, { PageProps } from './Page';

type HomeProps = PageProps;

export default (props: HomeProps) => (
  <Page {...props} name="TyGr Development!" path="/" className="home" />
);
