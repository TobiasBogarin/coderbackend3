const { Router } = require('express');
const { generarUsuariosFalsos, generarMascotasFalsas } = require('../modules/mocking.module.js');
const router = Router();

router.get('/mockingpets', (req, res) => {
    const cantidad = parseInt(req.query.cantidad) || 5;
    if (cantidad < 1 || cantidad > 100) {
        return res.status(400).json({ mensaje: 'La cantidad debe estar entre 1 y 100.' });
    }
    const mascotas = generarMascotasFalsas(cantidad);
    res.json(mascotas);
});

router.get('/mockingusers', (req, res) => {
    const rolFiltro = req.query.rol;
    const usuarios = generarUsuariosFalsos(50);
    const usuariosConId = usuarios.map((usuario, index) => ({
        _id: `idFicticio${index + 1}`,
        ...usuario,
    }));
    if (rolFiltro && ['usuario', 'admin'].includes(rolFiltro)) {
        const usuariosFiltrados = usuariosConId.filter(usuario => usuario.rol === rolFiltro);
        return res.json(usuariosFiltrados);
    }
    res.json(usuariosConId);
});

module.exports = router;