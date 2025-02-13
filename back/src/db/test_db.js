const connection = require('./db');

connection.query('SELECT 1 + 1 AS resultado', (err, results) => {
    if (err) {
        console.error('Erro na consulta:', err);
        return;
    }
    console.log('Conexão bem-sucedida, resultado:', results[0].resultado);
    connection.end();
});
