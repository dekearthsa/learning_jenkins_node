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
        sh '/google-cloud-sdk/bin/gcloud --version'
      }
    }

    stage('Build container regsiter') {
      steps {
        sh '''
/google-cloud-sdk/bin/gcloud auth activate-service-account --key-file=/scg-iat-project-coretech-5244b49dc166.json
/google-cloud-sdk/bin/gcloud config set project scg-iat-project-coretech
/google-cloud-sdk/bin/gcloud builds submit --tag asia.gcr.io/scg-iat-project-coretech/learning_jenkins_node'''
      }
    }

  }
}