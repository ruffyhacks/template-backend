import { config } from "dotenv";
import express, { Express } from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import routes from "../routes";

config();
require("../strategies/local");

export function createApp(): Express {
	const app = express();

	// Enable parsing middleware for requests
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	// Enable CORS
	const originURL = process.env.RAILWAY_STATIC_FRONTEND_URL
		? process.env.RAILWAY_STATIC_FRONTEND_URL
		: process.env.LOCAL_STATIC_FRONTEND_URL || "http://localhost:3000";
	app.use(
		cors({
			origin: [originURL],
			credentials: true,
		})
	);

	// Session store
	const pgSession = require("connect-pg-simple")(session);
	const postgreStore = new pgSession({
		// check interface PGStoreOptions for more info https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/connect-pg-simple/index.d.ts
		// pool: poolInstance,
		createTableIfMissing: true, // this will create a `session` table if you do not have it yet
	});

	// 1000ms * 60seconds * 60min * 24hrs * 7days = 1 week
	const maxAge = 1000 * 60 * 60 * 24 * 7;

	app.use(
		session({
			secret: process.env.EXPRESS_SESSION_SECRET || "secret",
			resave: false,
			saveUninitialized: false,
			cookie: {
				maxAge: maxAge,
				sameSite: "none",
				secure: process.env.NODE_ENV === "production",
				httpOnly: false,
			},
			store: postgreStore,
		})
	);

	// Enable Passport
	app.use(passport.initialize());
	app.use(passport.session());

	// Prefix all backend routes with '/api'
	app.use("/api", routes);
	return app;
}
