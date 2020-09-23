const { TimelineService } = require('wdio-timeline-reporter/timeline-service');

exports.config = {
  runner: 'local',
  specs: ['./test/**/*.spec.js'],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,

      browserName: 'chrome',
      acceptInsecureCerts: true,
    },
  ],
  logLevel: 'silent',
  bail: 0,
  baseUrl: 'http://localhost:8080',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver', [TimelineService]],
  framework: 'mocha',
  reporters: [
    'spec',
    [
      'timeline',
      {
        outputDir: 'dist',
        fileName: 'test-report.html',
        screenshotStrategy: 'before:click',
      },
    ],
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};
