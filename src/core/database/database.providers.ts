import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/user.entity';
import { DotHour } from '../models/dothour.entity';
import { Parameter } from '../models/parameter.entity';
import { environment } from '@src/environments/database.environments';

export const databaseProviders = [
  {
    
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        dialectOptions: {
          ssl: environment.ssl ? { require: environment.ssl, rejectUnauthorized: false} : false,
          // ssl: {
          //   require: environment.ssl as boolean,
          //   rejectUnauthorized: false // <<<<<<< YOU NEED THIS
          // },
        }, 
        host: environment.host,
        port: environment.port as number,
        username: environment.username,
        password: environment.password,
        database: environment.database,
        // native: true,
        // ssl: true,
        // ssl: environment.ssl as boolean,
        quoteIdentifiers: false,
        logging: console.log,
        define: {
          timestamps: false,
          underscored: false,
          paranoid: false,
          freezeTableName: true,
          createdAt   : 'dateTimeCreate',
          updatedAt   : 'dateTimeUpdate',
          schema: 'epw'
        },

        pool: {
            max: 20,
            min: 0,
            idle: 5000
        }

      });
      sequelize.addModels([User, DotHour, Parameter]);
      await sequelize.sync({
        schema: 'epw', force: false, alter: false

      })
      return sequelize;
    },
  },
  
];





// import { Sequelize } from 'sequelize';

// import { User } from '../../users/user.model';

// import databaseConfig from './config/database';


// const models = [ User ];

// class Database {
  
  

//   constructor() {
//     this.init();
//   }

//   init() {
//     const connection = new Sequelize(databaseConfig);

//     models
//     .map(model => model.init(connection, databaseConfig))
//     .map(model => model.associate && model.associate(connection.models));
//   }
// }

// export default new Database();
