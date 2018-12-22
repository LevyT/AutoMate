node {
    def app

    stage('Clone Repo') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build("test-nodejs")
    }

    stage('Test image') {
        app.inside {
            sh 'echo "Built Successfully"'
        }
    }
}
