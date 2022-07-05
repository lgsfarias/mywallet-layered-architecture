import bcrypt from 'bcrypt';
import { getUserByEmail, createUser } from '../repositories/authRepository.js';

async function signUp(name, email, password) {
  if (!name || !email || !password) {
    throw {
      status: 422,
      message: 'Missing required fields',
    };
  }

  const existingUsers = await getUserByEmail(email);
  if (existingUsers.length > 0) {
    throw {
      status: 409,
      message: 'User already exists',
    };
  }

  const hashedPassword = bcrypt.hashSync(password, 12);
  await createUser(name, email, hashedPassword);
}

async function signIn(email, password) {
  if (!email || !password) {
    throw {
      status: 422,
      message: 'Missing required fields',
    };
  }

  const [user] = await getUserByEmail(email);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw {
      status: 401,
      message: 'Invalid credentials',
    };
  }

  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET,
  );

  return {
    token,
  };
}

export { signUp, signIn };
