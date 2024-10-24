const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.use(bodyParser.json());

const API_URL = 'http://localhost:3000';

app.get('/books', async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/books`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});