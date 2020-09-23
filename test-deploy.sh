#!/bin/sh

if [ -n "$TRAVIS_PULL_REQUEST_BRANCH" ]; then
  path=/reports/$TRAVIS_PULL_REQUEST_BRANCH
else
  path=/reports/$TRAVIS_BRANCH
fi

rsync --recursive --delete reports/* tygr@beta.tygr.info:tygr$path
echo build-report.html and test-report.html saved to https://beta.tygr.info$path
echo They will be preserved for 2 weeks
