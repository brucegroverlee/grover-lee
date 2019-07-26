pipeline {
  agent {
    docker {
      image 'devillex/docker-firebase'
      args '-p 6002:6002'
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
    stage('Build') {
      steps {
        sh './jenkins/scripts/production.build.sh'
      }
    }
    stage('Deploy to production') {
      steps {
        sh './jenkins/scripts/production.deploy.sh'
      }
    }
  }
}