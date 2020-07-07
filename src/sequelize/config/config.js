require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DEV_DATABASE_USER_NAME,
    password: process.env.DEV_DATABASE_PASSWORD,
    database: process.env.DEV_DATABASE_NAME,
    host: process.env.DEV_DATABASE_HOST,
    dialect: "mysql",
    charset: "utf8",
    collate: "utf8_general_ci",
    operatorsAliases: false,
    define: {
      underscored: true
    }
  },
  development_light: {
    username: process.env.DEV_DATABASE_USER_NAME,
    password: process.env.DEV_DATABASE_PASSWORD,
    database: process.env.DEV_DATABASE_NAME,
    host: process.env.DEV_DATABASE_HOST,
    dialect: "mysql",
    charset: "utf8",
    collate: "utf8_general_ci",
    operatorsAliases: false,
    define: {
      underscored: true
    }
  },
  test: {
    username: process.env.PROD_DATABASE_USER_NAME,
    password: process.env.PROD_DATABASE_PASSWORD,
    database: process.env.PROD_DATABASE_NAME,
    host: process.env.PROD_DATABASE_HOST,
    dialect: "mysql",
    charset: "utf8",
    collate: "utf8_general_ci",
    operatorsAliases: false,
    define: {
      underscored: true
    }
  },
  production: {
    username: process.env.PROD_DATABASE_USER_NAME,
    password: process.env.PROD_DATABASE_PASSWORD,
    database: process.env.PROD_DATABASE_NAME,
    host: process.env.PROD_DATABASE_HOST,
    dialect: "mysql",
    charset: "utf8",
    collate: "utf8_general_ci",
    operatorsAliases: false,
    define: {
      underscored: true
    }
  }
};
