// index.js (Backend)
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Configuración del Pool de Conexiones a MySQL Workbench
const pool = mysql.createPool({
  host: 'localhost',
  port: 3306, // Puerto por defecto de tu MySQL Workbench
  user: 'root',
  password: '1234', 
  database: 'publications'
});

// Endpoint para obtener los clientes de la base de datos
app.get('/api/customers', async (req, res) => {
  try {
    console.log("Petición recibida en /api/customers");
    const [rows] = await pool.query('SELECT name, isbn FROM customers');
    res.json(rows);
  } catch (error) {
    console.error("Error al consultar la base de datos:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
});

// Iniciar servidor en el puerto 3001
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});