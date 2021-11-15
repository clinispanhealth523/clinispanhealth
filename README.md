# CliniSpan Health Project

This project establishes a new web-based platform for CliniSpan Health, a startup that increases enrollment in clinical trials by facilitating relationships between researchers and study volunteers.

# Getting Started

***Prerequisites:***
Users must install Git before cloning the repository.  For information on installing Git, please visit the following link: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git 

The recommended package manager is node and the recommended code editor is Visual Studio Code.  All installation commands provided are for node package manager.

***Cloning the Repository:***
To clone the repository, run “git clone https://github.com/clinispanhealth523/clinispanhealth.git” in the terminal.  A new folder called “clinispanhealth” will appear with the code.  

***Installing Dependencies:***
To install dependencies, navigate to the project root folder, `\clinispanhealth` within the terminal and run "npm install"

Dependencies for the front-end React app are also required.  To install these dependencies, navigate to the `\clinispanhealth-app` folder within the terminal and run "npm install"


# Testing

Frontend Testing Suite: Cypress
Backend Testing Suite: Jest

Frontend testing: 
1. Navigate to the `\clinispanhealth-app` folder within the terminal
2. Run the command "npm start" to run the app locally
3. Open a second terminal in VS Code and again navigate to `\clinispanhealth-app`
4. Run the command "npx cypress open" to open the Cypress Test Runner
5. Click on "tests_spec.js" to run the frontend tests in your browser

Backend testing:
1. Navigate to the `/clinispanhealth` folder within the terminal.
2. Run "npm run build" to build the react app locally.
3. Run "npm start" to start up a local server.
4. Open a second terminal and navigate to `/clinispanhealth` again.
5. Run "jest --coverage" to get a test coverage report.

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
