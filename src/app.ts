import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

// routes
import { solvedRouter } from './routers';

// create a express aplication insatnce
const app = express();

// body parser to work with json files
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.json());

// set cors with origin '*' and credentials
app.use(cors({ origin: true, credentials: true }));

// use morgan for monitoring requests
app.use(morgan('dev'));

// use routes
app.use('/api', solvedRouter);

export default app;