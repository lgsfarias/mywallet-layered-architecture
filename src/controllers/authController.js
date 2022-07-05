import * as authServices from '../services/authServices.js';

async function signUp(req, res) {
  const { name, email, password } = req.body;
  await authServices.signUp(name, email, password);
  res.sendStatus(201);
}

async function signIn(req, res) {
  const { email, password } = req.body;
  const response = await authServices.signIn(email, password);
  res.send(response);
}

export { signUp, signIn };
