const express = require('express');
const path = require('path');
const { sequelize } = require('./models');
const routes = require('./routes');
const { url } = require('inspector');

const app = express()

const PORT = 3000 || process.env.PORT

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware для парсинга JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synced!');
        app.listen(PORT, () => {
            console.log(`Server started on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error syncing database:', err);
    });
