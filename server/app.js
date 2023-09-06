import dotenv from 'dotenv';
import app from './server';

dotenv.config();

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Welcome to EuroWings API ${port}`));

export default app;
