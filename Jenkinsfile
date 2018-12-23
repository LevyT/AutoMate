node {
    def app

    stage('Clone Repo') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build("registry.bounceme.net/test-nodejs")
    }

    stage('Test image') {
        app.inside {
            sh 'echo "Built Successfully"'
        }
    }

    stage('Push image') {
        docker.withRegistry('https://registry.bounceme.net', 'Private-Reg') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
        stage('Deploy image') {
        sh "scp -i ~/key.pem docker-compose.yml ubuntu@registry.bounceme.net:/tmp/"
        sh "ssh -i ~/key.pem ubuntu@registry.bounceme.net docker-compose -f /tmp/docker-compose.yml up -d"
    }
}