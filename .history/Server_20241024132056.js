// server.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Aditya@9595',
    database: 'cournode',
});

app.get('/getallbooks', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT id, title, name, isbn FROM books');
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching books' });
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
