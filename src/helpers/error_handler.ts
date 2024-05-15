import Logger from '../providers/logger';
import { Request, Response, NextFunction, response } from 'express';

export const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  Logger.error(err.message);
  res.status(err.status || 500);

  if (err.status === 422) {
    err.status = 400;
    res.status(400);
    return res.send({
      status: err.status,
      success: false,
      error: err.message.split('.'),
      data: {},
    });
  }
  res.send({
    status: err.status || 500,
    success: false,
    error: [err.message],
    data: {},
  });
};
