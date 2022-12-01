const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'docker',
    database: 'mycontacts'
})

client.connect()

/* A função DB_QUERY, sempre vai retornar um rows, que é um array. */
exports.query = async (query, values) => {
    const { rows } = await client.query(query, values)
    return rows
}


