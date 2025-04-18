import winston from "winston";
import { getCorrelationId } from "../utils/helpers/request.helpers";
import DailyRotateFile from "winston-daily-rotate-file";

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: "MM-DD-YYYY HH:mm:ss" }),
    winston.format.json(),
    winston.format.printf(({ level, message, timestamp, ...data }) => {
      const output = {
        level,
        message,
        timestamp,
        correlationId: getCorrelationId(),
        data,
      };
      return JSON.stringify(output);
    })
  ),

  transports: [
    new winston.transports.Console(),
    //new winston.transports.File({filename:"logs/app.log"}),
    new DailyRotateFile({
      filename: "logs/%DATE%.log",
      datePattern: "YYYY-MM-DD-HH",
      maxSize: "20m",
      maxFiles: "14d",
    }),
  ],
});

export default logger;
