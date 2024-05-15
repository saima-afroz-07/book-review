import { Request, Response } from 'express';

export const notFoundHandler = (_req: Request, res: Response) => {
  res.status(404);
  return res.json({ success: false, message: 'Invalid API call', data: {} });
};
