# CSC308-Club-Sports

---

## Setting up the codebase:

`git clone {github link}`

`npm run install-both` to install npm dependencies for frontend and backend

&nbsp;&nbsp;&nbsp;&nbsp;Alternatively, you can run `npm i` in the root directory and `npm i` in the my-app directory.

`npm run dev ` to run both frontend and backend

`npm start `to run just backend

`npm run client ` to run just frontend

---

## Style Guide:
https://github.com/airbnb/javascript

`npm run get-report ` to generate am html static code analysis report, saved in `report-output.html`

---

## Tests:

Unit tests are written using Jest, and stored in the `__jest__` folder

Acceptance tests are written using Cypress and the Cucumber plugin, and are stored in the `cypress/integration` folder

`npm run test:jest ` will run the jest tests in the proper folder

`npm run test:cy ` will run launch the server and run the cypress acceptance tests

`npm run test ` will run the above two commands

---

## Prototype:

https://www.figma.com/file/rwvDW4MBXvO3duub7Jva10/Club-Sports?node-id=0%3A1

---

## System Architecture (Feb 7 Class Assignment)

---
![](uml.jpg)
