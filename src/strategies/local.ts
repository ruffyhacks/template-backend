import passport from "passport";
import bcrypt from "bcryptjs";
import { Strategy } from "passport-local";
import prisma from "../lib/prisma";

const authUser = async (
	username: string,
	password: string,
	done: (arg0: null, arg1: any) => any
) => {
	let user;
	try {
		const parsedEmail = username.toString();
		user = await prisma.user.findUnique({
			where: { email: parsedEmail },
		});
		if (!user) {
			return done(null, false);
		}
	} catch (e) {
		return done(null, e);
	}

	const isValid = bcrypt.compareSync(password.toString(), user.password);
	if (!isValid) {
		return done(null, false);
	} else {
		return done(null, user);
	}
};

passport.serializeUser((user: any, done) => {
	return done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
	try {
		const user = await prisma.user.findFirst({
			where: { id: id },
		});
		return user ? done(null, user) : done(null, null);
	} catch (err) {
		console.log(err);
		return done(err, null);
	}
});

passport.use(new Strategy(authUser));
