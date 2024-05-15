import morgan, { StreamOptions } from 'morgan';

import Logger from './logger';

const stream: StreamOptions = {
  write: (message) => Logger.http(message),
};

const skip = () => {
  const env = process.env.PORT;
  return env !== 'development';
};

const morganMiddleware = morgan(':method :url :status :res[content-length] - :response-time ms', {
  stream,
  skip,
});

export default morganMiddleware;
