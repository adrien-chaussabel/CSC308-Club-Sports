# CSC308-Club-Sports

---

## Setting up the codebase:

`git clone {github link}`

`npm run install-both` to install npm dependencies for frontend and backend

&nbsp;&nbsp;&nbsp;&nbsp;Alternatively, you can run `npm i` in the root directory and `npm i` in the my-app directory.

`npm run dev ` to run both frontend and backend

`npm start `to run just backend

`npm run client ` to run just frontend

Contact achaussa@calpoly.edu for database and password information to fill out envrionments file.

---

## Style Guide:
https://github.com/airbnb/javascript

`npm run get-report ` to generate am html static code analysis report, saved in `report-output.html`

---

## Tests:

Tests are run on a test database, seperate from the production database being used on the Heroku deployment

Unit tests are written using Jest, and stored in the `__jest__` folder

Acceptance tests are written using Cypress and the Cucumber plugin, and are stored in the `cypress/integration` folder

`npm run test:jest ` will run the jest tests in the proper folder

`npm run test:cy ` will run launch the server and run the cypress acceptance tests

&nbsp;&nbsp;&nbsp;&nbsp; For some reason this command doesn't work consistently. Run `npm run dev & npx wait-on http://localhost:3000 & npm run cy:run ` if tests aren't run with the above script.

`npm run test ` will run the above two commands

---

## Continuous Integration:

We are using Travis CI for this project

https://travis-ci.com/github/adrien-chaussabel/CSC308-Club-Sports


---

## Deployment:

Deploted using heroku on: https://club-sports-hub.herokuapp.com/

---

## Prototype:

https://www.figma.com/file/rwvDW4MBXvO3duub7Jva10/Club-Sports?node-id=0%3A1

---

## System Architecture (Feb 7 Class Assignment)

---
![](uml.jpg)
