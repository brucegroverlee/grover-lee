#!/usr/bin/env sh

echo "Deploying to staging":
firebase deploy --only hosting:groverlee -P staging --token $FIREBASE_DEPLOY_TOKEN
