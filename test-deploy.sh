#!/bin/sh

if [ -n "$TRAVIS_PULL_REQUEST_BRANCH" ]; then
  path=reports/$TRAVIS_PULL_REQUEST_BRANCH
else
  path=reports/$TRAVIS_BRANCH
fi

ssh tygr@$HOST mkdir -p tygr/$path
rsync --recursive --delete reports/* tygr@$HOST:tygr/$path
echo build-report.html and test-report.html saved to https://$HOST/$path
echo They will be preserved for 2 weeks
