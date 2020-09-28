import React from 'react';
import Page, { PageProps } from './Page';

type SurgeSPAWebpackPluginProps = PageProps;

export default (props: SurgeSPAWebpackPluginProps) => (
  <Page
    {...props}
    name="Surge SPA Webpack Plugin!"
    path="/surge-spa-webpack-plugin"
    className="surge-spa-webpack-plugin"
  >
    <p className="description">
      If you are creating and hosting a single page web app using Webpack and
      Surge.sh, this tool will streamline your build a bit. Otherwise, move
      along
    </p>
  </Page>
);
