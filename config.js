exports.db = {
    'connectionString': process.env.DB_URI,
    'connectionOptions': { useNewUrlParser: true },
    'database_name': process.env.DB_NAME
}