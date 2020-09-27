import React from 'react';
import Page, { PageProps } from './Page';

type ThankYouProps = PageProps;

export default (props: ThankYouProps) => (
  <Page {...props} name="thank-you!" path="/thank-you" className="thank-you" />
);
