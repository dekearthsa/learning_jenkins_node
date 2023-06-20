pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/dekearthsa/learning_jenkins_node', branch: 'main')
      }
    }

    stage('Testing') {
      steps {
        sh 'ls -la'
      }
    }

  }
}