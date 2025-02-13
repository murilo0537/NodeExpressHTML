const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if(err) {
        console.error("não foi possivel conectar-se", err);
        return;
    }
    console.log(`
    
        🌟 Servidor rodando na Porta ${PORT} 🌟
    `);
});