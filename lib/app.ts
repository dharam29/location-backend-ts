import * as cors from 'cors';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as errorhandler from 'strong-error-handler';
import router from './routes/locationRoutes';
import { join } from 'path';

export const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const API = '/api/v1';

app.use(API, router)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Cache-Control, Pragma, Origin, Authorization, Content-Type, Content-Disposition, X-Requested-With'
  );
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
  return next();
});

app.use(express.static(join(__dirname,"../", "client")));

// // build mode
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "../", "client/index.html"));
});

app.use(errorhandler({
  debug: process.env.ENV !== 'prod',
  log: true,
}));
