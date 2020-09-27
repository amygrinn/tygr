import React from 'react';
import Page, { PageProps } from './Page';

type CronpushProps = PageProps;

export default (props: CronpushProps) => (
  <Page {...props} name="Cron Push!" path="/cronpush" className="cronpush" />
);
