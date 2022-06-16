import pkg from 'pg';
import "dotenv/config"

const { Pool } = pkg;

const pool = new Pool({
    user: process.env.DatabaseUser,
    host: process.env.DatabaseHost,
    database: process.env.DatabaseName,
    password: process.env.DatabasePassword,
    port: process.env.DatabasePort,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

export default {
    getUsers,
}
