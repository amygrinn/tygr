import React from 'react';
import Page, { PageProps } from './Page';

type CronpushProps = PageProps;

export default (props: CronpushProps) => (
  <Page {...props} name="Cron Push!" path="/cronpush" className="cronpush">
    <p className="description info">
      Currently supported on Android, OSx, and Windows. iOS in development
    </p>
    <p className="description">
      A cron expression is a great way to describe your recurring tasks. We all
      know and love the Unix format first developed over 45 years ago but have
      yet to bring it to the world wide web... until now.
    </p>
    <p className="description">
      Cron push is a push notification scheduler that works entirely in the
      browser. No sign up is necessary, just click the button, accept my
      notification permission request, and get started.
    </p>
    <p className="description">
      If you&apos;re new to cron expressions, check out the recipes while
      creating your first schedule.
    </p>
  </Page>
);
