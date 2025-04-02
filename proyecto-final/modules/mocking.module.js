const bcrypt = require('bcrypt');

const nombres = ['Sofía', 'Mateo', 'Lucía', 'Juan', 'Valentina', 'Santiago', 'Camila', 'Agustín', 'Martina', 'Lautaro'];
const apellidos = ['Gómez', 'Rodríguez', 'López', 'Fernández', 'Pérez', 'García', 'Martínez', 'Díaz', 'Sosa', 'Rojas'];
const calles = ['Av. Corrientes', 'Calle San Martín', 'Av. 9 de Julio', 'Calle Belgrano', 'Av. Rivadavia'];

const generarUsuariosFalsos = (cantidad) => {
    const usuarios = [];
    for (let i = 0; i < cantidad; i++) {
        const nombre = nombres[Math.floor(Math.random() * nombres.length)];
        const apellido = apellidos[Math.floor(Math.random() * apellidos.length)];
        const usuario = {
            nombre: nombre,
            apellido: apellido,
            email: `${nombre.toLowerCase()}.${apellido.toLowerCase()}@ejemplo.com`,
            contraseña: bcrypt.hashSync('coder123', 10),
            rol: i % 2 === 0 ? 'usuario' : 'admin',
            mascotas: [],
            direccion: `${calles[Math.floor(Math.random() * calles.length)]} ${Math.floor(Math.random() * 5000) + 100}`,
            fechaCreacion: new Date().toISOString(),
            telefono: `+54 9 11 ${Math.floor(Math.random() * 9000000) + 1000000}`
        };
        usuarios.push(usuario);
    }
    return usuarios;
};

const generarMascotasFalsas = (cantidad) => {
    const mascotas = [];
    for (let i = 0; i < cantidad; i++) {
        const nombreDueno = nombres[Math.floor(Math.random() * nombres.length)];
        const apellidoDueno = apellidos[Math.floor(Math.random() * apellidos.length)];
        const mascota = {
            nombre: `Mascota ${i + 1}`,
            especie: i % 2 === 0 ? 'Perro' : 'Gato',
            edad: Math.floor(Math.random() * 15) + 1,
            dueno: `${nombreDueno} ${apellidoDueno}`,
            vacunado: Math.random() > 0.3
        };
        mascotas.push(mascota);
    }
    return mascotas;
};

module.exports = { generarUsuariosFalsos, generarMascotasFalsas };