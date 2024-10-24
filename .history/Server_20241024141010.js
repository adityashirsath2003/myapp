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


app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const sql = 'INSERT INTO login (mail, pass) VALUES (?, ?)';
        const [results] = await pool.query(sql, [email, password]);
        res.status(201).json({ message: 'User registered successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error registering user' });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }
  
   
        const [rows] = await pool.query('SELECT * FROM login WHERE mail = ?', [email]);
        if (rows.length === 0) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const user = rows[0];
        res.status(200).json({ message: 'Login successful' });
    
});

app.post('/addreview', async (req, res) => {
    const { email, title, rate } = req.body;
    if (!email || !title || !rate) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const sql = 'INSERT INTO review (mail, rate,title) VALUES (?, ?, ?)';
        const [results] = await pool.query(sql, [email, rate, title]);
        res.status(201).json({ message: 'Review registered successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error registering user' });
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
