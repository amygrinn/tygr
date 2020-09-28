import React from 'react';
import Page, { PageProps } from './Page';

type ThankYouProps = PageProps;

export default (props: ThankYouProps) => (
  <Page {...props} name="thank-you!" path="/thank-you" className="thank-you">
    <p className="description info">Windows only, OSx in development</p>
    <p className="description">
      The rapid clip at which SCADA systems are developing is hard to keep up
      with as an end user, let alone a developer. Ignition, by Inductive
      Automation, is no exception, but maybe it can be.
    </p>

    <p className="description">
      That&apos;s the idea behind thank-you: make it easy to develop for
      Ignition. thank-you is a windows CLI that controls containerized Ignition
      gateways. You may download the latest ignition version, install and
      provision it, load a template gateway backup, create a MySQL server and
      database then connect to it, all with one command: `thank-you gateway up`
      (`ty gw up` for short)
    </p>

    <p className="description">
      Once installed, this tool will be available globally on your system. It
      uses docker in the background which allows you to run as many gateways as
      you&apos;d like at once. Never be afraid to try out a new feature again
      because you can have total confidence each gateway is self contained.
    </p>

    <p className="description">
      thank-you comes with everything you need configured to develop for
      ignition: WSL 2, Chocolatey, Docker, Node JS, Java 11, VS Code and Git.
      Just run `thank-you setup` (or `ty setup`) to customize your installation.
      `thank-you setup` can also be used to keep your software up to date.
    </p>
  </Page>
);
