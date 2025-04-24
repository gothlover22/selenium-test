pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running Selenium test for JS addition...'
                sh 'npx mocha src/math.test.js'
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed!'
        }
    }
}
