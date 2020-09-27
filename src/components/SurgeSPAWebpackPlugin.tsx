import React from 'react';
import Page, { PageProps } from './Page';

type SurgeSPAWebpackPluginProps = PageProps;

export default (props: SurgeSPAWebpackPluginProps) => (
  <Page
    {...props}
    name="Surge SPA Webpack Plugin!"
    path="/surge-spa-webpack-plugin"
    className="surge-spa-webpack-plugin"
  />
);
