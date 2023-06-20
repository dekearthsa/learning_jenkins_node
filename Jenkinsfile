pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/dekearthsa/learning_jenkins_node', branch: 'main')
      }
    }

    stage('check dir') {
      steps {
        sh 'ls -la'
      }
    }

    stage('Check gcloud sdk') {
      steps {
        sh './google-cloud-sdk/bin/gcloud --version'
      }
    }

  }
}