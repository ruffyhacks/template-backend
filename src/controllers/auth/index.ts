import bcrypt from "bcryptjs";
import prisma from "../../lib/prisma";
import { Request, Response } from "express";

export async function registerController(req: Request, res: Response) {
	const { username, password, firstName, lastName } = req.body;

	// Validation: ensure that email and password are valid
	const errors = [];

	// if(password !== passwordConfirmation) errors.push(`Passwords don't match`)

	const parsedEmail = username.toString();
	const isEmailTaken = await prisma.user.findUnique({
		where: { email: parsedEmail },
	});
	if (isEmailTaken) errors.push("Email taken!");

	if (errors.length > 0) return res.status(401).send({ msg: errors });

	// Registration: add the new user to the db
	const hashedPassword = await bcrypt.hash(password, 12);
	try {
		const data = {
			email: parsedEmail,
			password: hashedPassword,
			firstName: firstName,
			lastName: lastName,
		};
		const newUser = await prisma.user.create({ data });
		return res.status(201).send(newUser);
	} catch (err) {
		console.log(err);
		errors.push("Create action failed.");
		return res.status(400).send({ msg: errors });
	}
}
