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
* HTTP server: Express

ADRs reside within our package-lock.json file


# Contributing
To contribute to the project, a developer needs access to the GitHub repository. The owner of the repository is a user by the name of ‘clinispanhealth523’ and an associated password available above. For new developers, there are no specific styling / process conventions to know about, however, for testing the project uses Cypress for the front-end and Jest for the back-end.
Information about the project can be viewed here: https://tarheels.live/comp523f21j/ 

# Authors
There are three major authors so far that contributed to the development of the CliniSpan website so far, and below lists their names and associated roles:

Tiffany Shields (Webmaster | Full Stack Engineer)

Calvin Koonce (Business Analyst | Client Manager)

Kyle Maatallah (Full Stack Engineer)

# License
The source code is solely authorized for use by CliniSpan Health, and explicit permission must be granted by CliniSpan health for users to implement, modify, reproduce, or recreate this code. Due to the IP agreement concerning this project and HIPPA compliance, the project client has been tasked with discussing a possible license with their team member who is a specialist on HIPPA standards. Due to this, further information about a license is expected from the client soon.


# Acknowledgements
John Dinger is a mentor that has worked with students in COMP523 for a while now and has been a great resource for the team; thanks a lot, John!

