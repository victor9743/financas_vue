var knex = require('knex')(
    {
        client: 'pg',
        connection:{
            host: 'localhost',
            user: 'postgres',
            password: '1234',
            database: 'orcamento'
        }
    }
)

module.exports = knex;