pipeline {
  agent {
    docker {
      image 'devillex/docker-firebase'
      args '-p 6001:6001'
    }
  }
  environment {
    CI = 'true'
    FIREBASE_DEPLOY_TOKEN = credentials('firebase-deploy-token')
  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh './jenkins/scripts/test.sh'
      }
    }
    stage('Build') {
      steps {
        sh './jenkins/scripts/staging.build.sh'
      }
    }
    stage('Deploy to staging') {
      steps {
        sh './jenkins/scripts/staging.deploy.sh'
      }
    }
  }
}