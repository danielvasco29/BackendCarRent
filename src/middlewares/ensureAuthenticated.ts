import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayLoad {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error('Token missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(
      token,
      'b1c24ad0595a238c6986db133366e53b'
    ) as IPayLoad;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findByID(user_id);

    if (!user) {
      throw new Error('Users does not exists');
    }

    req.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new Error('Invalid token');
  }
}
