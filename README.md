## Introduction
This is a template for an Express backend. It should be paired with this [NextJS frontend template](https://github.com/ruffyhacks/template-frontend) and a Posgresql database.

## How to use

- Set up your project with this code and link to a new Github repo
- Set up Railway
  - [Provision a Postgres container on Railway](https://dev.new)
  - Create a new Railway project and link to your new Github repo
- Swap out the environment varialbes in `.env`
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

### Capabilities

- Login & Sessions - enable users to log into the app and store a session for next time
- Registration - enable new users to sign up
- *Coming Soon* File Upload - upload a file to AWS and save the file's AWS url in your database

## Author

- Rafi Lurie ([@rafilurie](https://twitter.com/rafilikeruffy))