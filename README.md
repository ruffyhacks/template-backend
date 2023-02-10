## Introduction

This is a template for an Express backend. It should be paired with this [NextJS frontend template](https://github.com/ruffyhacks/template-frontend) and a Posgresql database.

## How to use

- Clone this project and then push it to a new remote
- Project setup
  - Start a new railway project and link it to your new remote
  - Add a Postgres db to your new project
  - If needed, add another Github repo to your project for the [frontend](https://github.com/ruffyhacks/template-frontend)
- Create a .env file for your variables (use .env.example as a guide)
- Migrate the database `npx prisma migrate dev --name init`
- Run the app locally `npm run dev`

## Tech Stack + Features

### Frameworks

- [Express.js](https://expressjs.com/) – React framework for building performant apps with the best developer experience
- [Passport.js](https://www.passportjs.org/) – Handle user authentication with ease with email/password or providers like Google, Twitter, GitHub, etc.
- [Prisma](https://www.prisma.io/) – Typescript-first ORM for Node.js

### Platforms

- [Railway](https://railway.app/) – Deploy the app with every Github push + easily provision a PostgreSQL database (no login required)

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

### Features

- Login & Sessions - enable users to log into the app and store a session for next time
- Registration - enable new users to sign up
- _Coming Soon_ File Upload - upload a file to AWS and save the file's AWS url in your database

## Author

- Rafi Lurie ([@rafilurie](https://twitter.com/rafilikeruffy))
