const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/api/users', userRoutes);

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