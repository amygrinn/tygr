#!/bin/sh

path=/reports/$1
rsync --recursive --delete reports tygr@beta.tygr.info:tygr$path/
echo build-report.html and test-report.html saved to https://beta.tygr.info$path
echo They will be preserved for 2 weeks
