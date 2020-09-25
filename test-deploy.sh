#!/bin/sh

if [ -n "$TRAVIS_PULL_REQUEST_BRANCH" ]; then
  path=reports/$TRAVIS_PULL_REQUEST_BRANCH
else
  path=reports/$TRAVIS_BRANCH
fi

ssh tygr@tygr.info mkdir -p tygr/$path
rsync --recursive --delete reports/* tygr@tygr.info:tygr/$path
echo build-report.html and test-report.html saved to https://tygr.info/$path
echo They will be preserved for 2 weeks
