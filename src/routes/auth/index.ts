import passport from 'passport';
import { Router } from "express";
import { registerController } from '../../controllers/auth';

const router = Router ();

router.post('/login', passport.authenticate('local'), (req, res) => {
  return res.sendStatus(200)
})

router.post('/register', registerController)

router.get('/status', (req, res) => {
  return req.user 
    ? res.send(req.user) 
    : res.status(401).send({ msg: "Unauthorized" })
})

export default router