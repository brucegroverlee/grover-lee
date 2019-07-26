#!/usr/bin/env sh

echo "Deploying to production":
firebase deploy --only hosting:groverlee -P production --token $FIREBASE_DEPLOY_TOKEN
