import {createServer} from 'http';
import {app} from './lib/app';
import {sequelize} from './lib/sequelize';

const port =  8090;

(async () => {
  await sequelize.sync({force: true});

  createServer(app)
    .listen(
      port,
      () => console.info(`Server running on port ${port}`)
    );
})();

