import React from 'react';
import Page, { PageProps } from './Page';

type HomeProps = PageProps;

export default (props: HomeProps) => (
  <Page {...props} name="TyGr Development!" path="/" className="home">
    <p className="description">
      My name is Tyler Grinn and these are some of my projects. Everything here
      uses the MIT open source license. In short, you may reuse and modify all
      code in any open source or commercial context, given no warranty.
    </p>
  </Page>
);
