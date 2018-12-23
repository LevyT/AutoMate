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
}