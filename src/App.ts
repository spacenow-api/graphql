import express, { Application } from 'express';
import apolloMiddleware from './helpers/middlewares/apollo-middleware';
import loggerMiddleware from './helpers/middlewares/logger-middleware';
import cors from 'cors';

class App {
  public app: Application;
  public port: number;
  public host: string;

  constructor(port: number, host: string) {
    this.app = express();
    this.port = port;
    this.host = host;
    this.initializeCORS();
    this.initializeMiddlewares();
  }

  private initializeCORS(): void {
    this.app.use(cors());
  }

  private initializeMiddlewares(): void {
    this.app.use(loggerMiddleware);
    apolloMiddleware().applyMiddleware({ app: this.app });
  }

  public listen(): void {
    this.app.listen(this.port, this.host, () => {
      console.log(`Server * GraphQL * listening on ${this.host}:${this.port}`);
    });
  }
}

export default App;
