import {createServer} from 'http';
import {app} from './app';

const port = process.env.PORT || 8090;

(async () => {
 try {

  createServer(app)
    .listen(
      port,
      () => console.info(`Server running on port ${port}`)
    );
 } catch (error) {
   console.error(error);
   
 }
})();

