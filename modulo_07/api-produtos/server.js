const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const produtoRoutes = require('./routes/produtoRoutes');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/produtos', produtoRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});