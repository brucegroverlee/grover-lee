#!/usr/bin/env sh

echo "Start build for staging";

./node_modules/.bin/webpack --mode production \
  --env.ENVIRONMENT=staging