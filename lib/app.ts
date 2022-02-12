import * as cors from 'cors';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as errorhandler from 'strong-error-handler';
import router from './routes/locationRoutes';
import { join } from 'path';

export const app = express();

app.use(cors());
// middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// middleware for json body parsing
app.use(bodyParser.json({limit: '5mb'}));

// enable corse for all origins
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Expose-Headers", "x-total-count");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type,authorization");

  next();
});

app.use(router)

app.use(express.static(join(__dirname,"../", "client")));

// // build mode
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "../", "client/index.html"));
});

app.use(errorhandler({
  debug: process.env.ENV !== 'prod',
  log: true,
}));
