# Ducky Climate Data API
## _Translate kgCO2 to Area of Trees_


The Ducky Climate Data API is a module in charge of translating kilograms CO2 equivalent to an area of trees that can absorb the CO2 in one year. Powered with NodeJS & ExpressJS. Due to the limited time, the authorization, Security Headers & CSRF protection is to be developed before setting it into a production environment.

## Features

- Calculates the area if trees needed to absorb the given amount of kgCO2e in one year,
- The number is rounded to nearest integer

## Tech

This API uses a number of open source projects to work properly:

- [Javascript](https://www.javascript.com/) - Programming language
- [NodeJS](https://nodejs.org/en/) - JavaScript runtime environment.
- [ExpressJS](https://expressjs.com/) - Web Framework for NodeJS
- [Mocha](https://mochajs.org/) - JavaScript's testing framework
- [Snyk](https://snyk.io/) - Tool to check the code's security

## Application Structure
__server.js__ - The entry point to the API. The file defines the express server and requires the routes & middlewares to be used by the API.
__controllers__ - This folder contains the controller definitions for the API.
__middleware__ - This folder contains the middleware definitions for the API
__routes__ - This folder contains the route definitions for the API.
__test__ - This folder contains the app's tests
__.env__ - File with environment variables
## Installation

This API requires NPM/Yarn to run.

Install & run it locally.

```sh
git clone https://github.com/dbores3/Ducky
cd Ducky/
npm i
npm run dev
```

## Dependencies

This API is currently extended with the following dependencies.
Instructions on how to use them in your own application are linked below.

| Dependency | URL |
| ------ | ------ |
| dotenv | https://www.npmjs.com/package/dotenv |
| express-validator | https://express-validator.github.io/docs/ |
| express-async-handler | https://www.npmjs.com/package/express-async-handler |

127.0.0.1
```