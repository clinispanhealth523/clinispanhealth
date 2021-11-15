# CliniSpan Health Platform

# This project establishes a new web-based platform for CliniSpan Health, a startup that increases enrollment in clinical trials by facilitating relationships between researchers and study volunteers.

# Getting Started

# Testing

Frontend Testing Suite: Cypress
Backend Testing Suite: Jest

Frontend testing: 
1. Navigate to the `\clinispanhealth-app` folder within the terminal
1. Run the command "npm start" to run the app locally
1. Open a second terminal in VS Code and again navigate to `\clinispanhealth-app`
1. Run the command "npx cypress open" to open the Cypress Test Runner
1. Click on "tests_spec.js" to run the frontend tests in your browser

Backend testing:
1. Run "jest --coverage" in the terminal to get a test coverage report

# Deployment

Our app is deployed through Heroku. Our account login information is as follows:

* Username: clinispanhealth523@gmail.com
* Password: #COMP523_unc

We have also set up automatic deploys from the main branch of our GitHub repository to our Heroku app.

Within Heroku, we are using the ClearDB MySQL add on for our database.

# Technologies used

* Database: MySQL
* Frontend: React.js
* Backend runtime environment: Node.js
* Frontend testing framework: Cypress
* Backend testing framework: Jest
* Hosting service: Heroku
* HTTP client: Axios

ADRs reside within our package-lock.json file