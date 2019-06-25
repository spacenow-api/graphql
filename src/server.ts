import { PORT } from './config';

import App from './App';

const app = new App(PORT, '0.0.0.0');

app.listen();
