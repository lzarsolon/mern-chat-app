import app from './app';
import config from './config';

const { PORT } = config;
const port = PORT || 5000;

app.listen(port, () => console.log(`Server started on PORT ${port}`));