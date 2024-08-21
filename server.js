const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Cambia esto por tu usuario de MySQL
  password: 'ROOT2024l3.', // Cambia esto por tu contraseña de MySQL
  database: 'losnardos', // Cambia esto por el nombre de tu base de datos
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('Connected to MySQL');
});


app.get('/api/flores', (req, res) => {
  const query = 'SELECT * FROM products WHERE tipoArreglo = 1 AND activo <> 0;';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    res.json(results);
  });
});

app.get('/api/funebres', (req, res) =>{
  const query = 'SELECT * FROM products WHERE tipoArreglo = 2 AND activo <> 0;';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    res.json(results);
  });
});

app.get('/api/globos', (req, res) =>{
  const query = 'SELECT * FROM products WHERE tipoArreglo = 3 AND activo <> 0;';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    res.json(results);
  });
});

// Ruta para obtener los productos
app.get('/api/products', (req, res) => {
  const query = 'SELECT * FROM products WHERE tipoArreglo = 4 AND activo <> 0;';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    res.json(results);
  });
});



// Ruta para agregar un producto
app.post('/api/products', (req, res) => {
  const { img, title, description, price } = req.body;
  const query = 'INSERT INTO products (img, title, description, price, tipoArreglo) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [img, title, description, price], (err, results) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    res.status(201).json({ id: results.insertId, img, title, description, price });
  });
});

// Ruta para servir el archivo HTML principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
