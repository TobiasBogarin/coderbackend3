const express = require('express');
const routerMocks = require('./routes/mocks.router.js');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
});

app.use('/api/mocks', routerMocks);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ mensaje: 'Algo salió mal en el servidor.' });
});

const PUERTO = 3000;
app.listen(PUERTO, () => {
    console.log(`Servidor iniciado correctamente en el puerto ${PUERTO}.`);
});