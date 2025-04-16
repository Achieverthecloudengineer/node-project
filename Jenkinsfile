pipeline {
    agent any
    tools { nodejs "nodejs" }


    stages {
        stage('Clone the Github repo') {
            steps {
                git branch: 'main', url: 'https://github.com/Achieverthecloudengineer/node-project.git'
            }
        }
        
         stage('Check if node and npm is installed') {
            steps {
                sh 'whoami'
                sh 'node -v'
                sh 'npm -v'
            }
        }
        
        stage('Install dependencies') {
            steps {
                sh 'npm install express'
            }
        }
        
        stage('Run the Application') {
            steps {
                sh 'node app.js &'
            }
        }
    }
}
