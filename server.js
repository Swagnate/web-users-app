const express = require('express');
const path = require('path');
const { sequelize } = require('./models');
const routes = require('./routes'); // подключаем маршруты
const { url } = require('inspector');

const app = express()

// Устанавливаем порт для сервера.
const PORT = 3000 || process.env.PORT

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Настройка для обслуживания статических файлов из папки 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware для парсинга данных
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);

// Синхронизация базы данных с использованием Sequelize
sequelize.sync({ force: false }) // force: false - таблицы не будут созданы, если уже существуют
    .then(() => {
        console.log('Database synced!');
        // Запускаем сервер и слушаем указанный порт
        app.listen(PORT, () => {
            console.log(`Server started on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error syncing database:', err); // Обработка ошибок
    });
