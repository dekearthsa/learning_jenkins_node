pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      parallel {
        stage('Checkout Code') {
          steps {
            git(url: 'https://github.com/dekearthsa/learning_jenkins_node', branch: 'main')
          }
        }

        stage('Checkout Code node2') {
          steps {
            git(url: 'https://github.com/dekearthsa/learning_jenkins_node_2', branch: 'main')
          }
        }

      }
    }

  }
}