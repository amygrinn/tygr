import React from 'react';
import Page, { PageProps } from './Page';

type NotFoundProps = PageProps;

export default (props: NotFoundProps) => (
  <Page {...props} name="404!" path="/404" color="red" />
);
