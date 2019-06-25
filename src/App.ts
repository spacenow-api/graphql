import express, { Application } from 'express';
import apolloMiddleware from './helpers/middlewares/apollo-middleware';

class App {
  public app: Application;
  public port: number;
  public host: string;

  constructor(port: number, host: string) {
    this.app = express();
    this.port = port;
    this.host = host;
    this.initializeGraphQL();
  }

  private initializeGraphQL(): void {
    apolloMiddleware().applyMiddleware({ app: this.app });
  }

  public listen(): void {
    this.app.listen(this.port, this.host, () => {
      console.log(`App listening on the port ${this.host}:${this.port}`);
    });
  }
}

export default App;
