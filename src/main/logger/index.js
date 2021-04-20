import winston from 'winston'
// Logger configuration
const logConfiguration = {
  transports: [
    new winston.transports.Console({
      level: 'warn',
      format: winston.format.combine(
        winston.format.label({
          label: `⛔ `,
        }),
        winston.format.timestamp({
          format: 'MMM-DD-YYYY HH:mm:ss',
        }),
        winston.format.printf(
          warn =>
            `${warn.level}: ${warn.label}: ${[warn.timestamp]}: ${
              warn.message
            }`,
        ),
      ),
    }),
    new winston.transports.File({
      level: 'error',
      // Create the log directory if it does not exist
      filename: 'src/main/logger/index.log',
    }),
    new winston.transports.File({
      level: 'info',
      //Create a format
      format: winston.format.combine(
        winston.format.label({
          label: `💡`,
        }),
        winston.format.timestamp({
          format: 'MMM-DD-YYYY HH:mm:ss',
        }),
        winston.format.printf(
          info =>
            `${info.level}: ${info.label}: ${[info.timestamp]}: ${
              info.message
            }`,
        ),
      ),
      // Create the log directory if it does not exist
      filename: 'src/main/logger/index.log',
    }),
    new winston.transports.File({
      level: 'debug',
      // Create the log directory if it does not exist
      filename: 'src/main/logger/index.log',
    }),
  ],
}
const logger = winston.createLogger(logConfiguration)

export default logger
