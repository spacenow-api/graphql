import express, { Application } from "express";
import cookieParse from "cookie-parser";
import bodyParser from "body-parser";
import loggerMiddleware from "./helpers/middlewares/logger-middleware";
import errorMiddleware from "./helpers/middlewares/error-middleware";
import apolloMiddleware from "./helpers/middlewares/apollo-middleware";

class App {
  public app: Application;
  public port: number;

  constructor(controllers: any, port: number) {
    this.app = express();
    this.port = port;
    this.initializeMiddlewares();
    this.initializeErrorHandling();
    this.initializeGraphQL();
  }

  private initializeMiddlewares(): void {
    this.app.use(loggerMiddleware);
    this.app.use(bodyParser.json());
    this.app.use(cookieParse());
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
