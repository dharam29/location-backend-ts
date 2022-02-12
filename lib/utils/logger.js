const { createLogger, format, transports } = require('winston');
const path = require('path');
const moment = require('moment');

const winston = require('winston');
// require('winston-daily-rotate-file');

const { DATE_FORMAT } = require('./constant');

const getLabel = (callingModule) => {
  const parts = callingModule.split('/');
  return `${parts[parts.length - 2]}/${parts.pop()}`;
};

const Logger = (filename) => {
  return createLogger({
    // const logger =  createLogger({
    level: 'info',
    format: winston.format.combine(
      format.timestamp({
        format: moment().format(DATE_FORMAT.DATE_FORMAT_YYYY_MM_DD), // CONSTANTS.DATE_FORMAT_YYYY_MM_DD
      }),
      format.printf((info) => `${filename} ${info.timestamp} ${info.level}: ${info.message}`),
      format.printf((info) => `${moment().format(DATE_FORMAT.DATE_FORMAT_YYYY_MM_DD)} ${info.level}: ${info.message}`),
      format.json()
    ),
    label: path.basename(module.filename),
    transports: [
      new transports.Console({
        label: getLabel(filename), // path.basename(module.filename),
        level: 'debug',
        format: winston.format.combine(
          format.colorize(),

          format.printf((debug) => `${filename} ${debug.timestamp} ${debug.level}: ${debug.message}`),
          format.printf(
            (debug) =>
              `${moment().format(DATE_FORMAT.DATE_FORMAT_YYYY_MM_DD)} ${getLabel(filename)} ${debug.level}: ${
                debug.message
              }`
          ),
          // format.label({ label: path.basename(process.mainModule.filename) })
          format.label({ label: getLabel(filename) })
        ),
      }),
      // dailyRotateFileTransport(filename)
    ],
  });
};

module.exports = Logger;
// export { Logger };
// level -- error > warn > info > verbose > debug > silly
