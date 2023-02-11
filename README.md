## Introduction

This is a template for an Express backend. It should be paired with this [NextJS frontend template](https://github.com/ruffyhacks/template-frontend) and a Posgresql database.

## How to use

- Clone this project and add your own remote
- Project setup
  - Start a new Railway project and link it to your newly created remote
  - Add a Postgres db to your newly created Railway project
  - If your project includes a backend, follow this guide [frontend](https://github.com/ruffyhacks/template-frontend)
- Create a .env file for your variables (use .env.example as a guide)
- Migrate the database `npx prisma migrate dev --name init`
- Run the app locally `npm run dev`

## Tech Stack + Features

### Frameworks

- [Express.js](https://expressjs.com/) – Node framework for building performant backends with the best developer experience
- [Passport.js](https://www.passportjs.org/) – Handle user authentication with ease with email/password or providers like Google, Twitter, GitHub, etc.
- [Prisma](https://www.prisma.io/) – Typescript-first ORM for Node.js

### Platforms

- [Railway](https://railway.app/) – Deploy changes with every push to Github & easily provision a database

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript
- [Prettier](https://www.npmjs.com/package/prettier) – Code formatter

### Features

- Login & Sessions - enable users to log in & maintain login across sessions
- Registration - enable new users to sign up
- _Coming Soon_ File Upload - upload a file to AWS and save the file's AWS url in your database

## Author

- Rafi Lurie ([@rafilikeruffy](https://twitter.com/rafilikeruffy))