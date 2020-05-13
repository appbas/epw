import { Options } from "sequelize/types";
import { environment as env } from '@env/database.environments.ts';

export default {
  dialect: 'postgres',
  host: env.host,
  port: env.port,
  username: env.username,
  password: env.password,
  database: env.database,
  schema: 'epw',
  quoteIdentifiers: false,
  define: {
    timestamps: false,
    underscored: false,
    underscoredAll: false,
    paranoid: false,
    freezeTableName: true,
    quoteIdentifiers: false,
    createdAt   : 'dateTimeCreate',
    updatedAt   : 'dateTimeUpdate',
    // tableName: 'user'
  },
} as Options ;
