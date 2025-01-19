const { Sequelize } = require('sequelize');

// Configuración de Sequelize
const sequelize = new Sequelize('Certificade_GS', null, null, {
  dialect: 'mssql',
  dialectOptions: {
    options: {
      trustedConnection: true,
    },
  },
  host: 'CEBAGO//SQLEXPRESS', // Cambia por tu servidor SQL
  port: 1433, // Cambia si usas otro puerto
  logging: console.log, // Puedes desactivarlo si no necesitas ver las consultas
  define: {
    freezeTableName: true, // Evita pluralizar nombres de tablas
  },
});

// Probar la conexión
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente con Sequelize.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
})();
