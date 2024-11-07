const express = require('express');
const { Pool } = require('pg');
const app = express();
const pool = new Pool(
    {
        user: "postgres",
        port: 5432,
        host: "localhost",
        database: "useres",
        password: ""
    }
);

app.get('/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (error) {
        console.error("Error getting users from database", error);
        res.status(500).json({ status: "failed", error: 'Failed to get users' });
        
    }
});

app.listen(3000, () => console.log('Server started on port 3000'));