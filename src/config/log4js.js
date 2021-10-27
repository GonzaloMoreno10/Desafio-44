export const log4jsConfig = {
    appenders: {
      fileWarnAppender: { type: "file", filename: "./logs/warn.log" },
      fileErrorAppender: { type: "file", filename: "./logs/error.log" },
      consola: { type: "console" },
    },
    categories: {
      default: { appenders: ["fileWarnAppender"], level: "warn" },
      consoleLogger: { appenders: ["consola"], level: "info" },
      errorLogger: { appenders: ["fileErrorAppender"], level: "error" },
    },
  };