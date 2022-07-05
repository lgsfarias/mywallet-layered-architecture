import * as financialServices from '../services/financialServices.js';

async function newEvent(req, res) {
  const { user } = res.locals;
  const { value, type } = req.body;
  await financialServices.newEvent(user.id, value, type);
  res.sendStatus(201);
}

async function getEvent(req, res) {
  const { user } = res.locals;
  const events = await financialServices.getEvents(user.id);
  res.send(events);
}

async function getBalance(req, res) {
  const { user } = res.locals;
  const balance = await financialServices.getBalance(user.id);
  res.send({ balance });
}

export { newEvent, getEvent, getBalance };
