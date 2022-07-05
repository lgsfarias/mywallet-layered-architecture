import {
  createEvent,
  getEventByUserId,
} from '../repositories/financialRepository.js';

async function newEvent(id, value, type) {
  if (!value || !type) {
    throw {
      status: 422,
      message: 'Missing required fields',
    };
  }

  const financialTypes = ['INCOME', 'OUTCOME'];
  if (!financialTypes.includes(type)) {
    throw {
      status: 422,
      message: 'Invalid type',
    };
  }

  if (value < 0) {
    throw {
      status: 422,
      message: 'Invalid value',
    };
  }

  await createEvent(id, value, type);
}

async function getEvents(id) {
  return await getEventByUserId(id);
}

async function getBalance(id) {
  const events = await getEventByUserId(id);

  const balance = events.reduce(
    (total, event) =>
      event.type === 'INCOME' ? total + event.value : total - event.value,
    0,
  );

  return balance;
}

export { newEvent, getEvents, getBalance };
