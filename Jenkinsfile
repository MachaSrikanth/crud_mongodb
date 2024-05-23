pipeline {
  agent any
  
 
    
  stages {
    stage("Clone code from GitHub") {
            steps {
                script {
                   git branch: 'main', url: 'https://github.com/MachaSrikanth/crud_mongodb.git'                }
            }
        }
     
    stage('Node JS Build') {
      steps {
        sh 'npm install'
      }
    }
  }
}
