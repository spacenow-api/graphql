import express, { Application } from "express";
import cors from "cors";

import apolloMiddleware from "./helpers/middlewares/apollo-middleware";
import loggerMiddleware from "./helpers/middlewares/logger-middleware";

class App {

  private app: Application;

  private port: number;

  private host: string;

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
