const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const middlewares = require('./middlewares');
const logs = require('./api/logs');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use('/api/logs', logs);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

app.use(express.json());
