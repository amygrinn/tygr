import React from 'react';
import Page, { PageProps } from './Page';

type NativescriptPluginGooglePlacesProps = PageProps;

export default (props: NativescriptPluginGooglePlacesProps) => (
  <Page
    {...props}
    name="Nativescript Plugin for Google Places!"
    path="/nativescript-plugin-google-places"
    color="yellow"
  />
);
