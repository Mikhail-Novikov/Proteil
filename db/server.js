const express = require('express');
const pool = require('./index');

const app = express();
app.use(express.json());

// Включение CORS глобально
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

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
