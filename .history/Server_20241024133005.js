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


app.post('/register', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }
    const sql = 'INSERT INTO login (mail, pass) VALUES (?, ?)';
    db.query(sql, [email, password], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Error registering user' });
        }
        res.status(201).json({ message: 'User registered successfully' });
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
