import express from 'express';
import BookReviewRouter from './routes/review';
import BookRouter from './routes/book';
import Database from './db/db';
import dotenv from 'dotenv';
import Logger from './providers/logger';
import { notFoundHandler } from './helpers/not_found_handler';
import { errorHandler } from './helpers/error_handler';
import cors from 'cors';
import morganMiddleware from './providers/morgan';

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morganMiddleware);
app.use(cors());

Database.init();

app.use('/api/reviews', BookReviewRouter );
app.use('/api/books', BookRouter);

app.use('*', notFoundHandler);
app.use(errorHandler);

app.listen(port, () => {
    Logger.info('Express server listening on port ' + port);
});