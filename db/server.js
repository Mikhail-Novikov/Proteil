const express = require('express');
const cors = require('cors');
const pool = require('./index');

const corsOptions = {
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.post('/api/register', async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;

    if (!firstName || !email) {
      return res.status(400).json({ message: 'Все поля обязательны!' });
    }

    // Запись данных в таблицу
    await pool.query('INSERT INTO users(first_name, last_name, email) VALUES($1, $2, $3)', [
      firstName,
      lastName,
      email,
    ]);

    res.sendStatus(200);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Сервер запущен на порте ${PORT}`));
