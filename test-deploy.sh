#!/bin/sh

host=beta.tygr.info

if [ -n "$TRAVIS_PULL_REQUEST_BRANCH" ]; then
  path=reports/$TRAVIS_PULL_REQUEST_BRANCH
else
  path=reports/$TRAVIS_BRANCH
fi

ssh tygr@$host mkdir -p tygr/$path
rsync --recursive --delete reports/* tygr@$host:tygr/$path
echo build-report.html and test-report.html saved to https://$host/$path
echo They will be preserved for 2 weeks
