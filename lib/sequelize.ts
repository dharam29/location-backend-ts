import {Sequelize} from 'sequelize-typescript';
import { Location } from './models/location';

const sequelize = new Sequelize("ddj8eekbkbq1q2","obshfybgymvctv","2ab13aad96747deb6cdd159c003905820e8585793262822f92b62b63ff380620", {
  host: "ec2-52-204-72-14.compute-1.amazonaws.com",
  // port: "5432",
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see new error
      rejectUnauthorized: false // This line will fix new error  
    }
  },
  pool: {
    // idleTimeoutMillis: 10000,
    min: 2,
    max: 5,
    evict: 10000,
  },
  define: {
    // timestamp: false,
    freezeTableName: true,
  },
  // logging: false
});

sequelize.addModels([Location]);

export {sequelize};
