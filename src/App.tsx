import express, { Application } from "express";
import loggerMiddleware from "./helpers/middlewares/logger-middleware";
import errorMiddleware from "./helpers/middlewares/error-middleware";
import apolloMiddleware from "./helpers/middlewares/apollo-middleware";

class App {
  public app: Application;
  public port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.initializeMiddlewares();
    this.initializeErrorHandling();
    this.initializeGraphQL();
  }

  private initializeMiddlewares(): void {
    this.app.use(loggerMiddleware);
  }

  private initializeErrorHandling(): void {
    this.app.use(errorMiddleware);
  }

  private initializeGraphQL(): void {
    apolloMiddleware().applyMiddleware({ app: this.app })
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
