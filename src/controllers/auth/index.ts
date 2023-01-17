import bcrypt from 'bcryptjs';
import prisma from '../../lib/prisma'
import { Request, Response } from 'express'

export async function registerController(req: Request, res: Response) {

  const { username, password, firstName, lastName } = req.body;
    
  // VALIDATION
  const errors = [];

  // if(password !== passwordConfirmation) errors.push(`Passwords don't match`)
  
  const parsedEmail = username.toString();
  const isEmailTaken = await prisma.user.findUnique({ 
    where: {email: parsedEmail}
  })
  if (isEmailTaken) errors.push(`Email taken!`);
  
  if (errors.length > 0) return res.status(401).send({ msg: errors});

  // REGISTRATION
  const hashedPassword = await bcrypt.hash(password, 12);
  try {
    const data = { 
      email:      parsedEmail, 
      password:   hashedPassword,
      firstName:  firstName,
      lastName:   lastName 
    }
    let newUser = await prisma.user.create({ data });
    console.log("Created newUser:")
    console.log(newUser)
    return res.status(201).send(newUser)
  } catch (err) {
    console.log(err)
    errors.push("Create action failed.")
    return res.status(400).send({ msg: errors})
  }

}