const db = require('../db/db');
const bcrypt = require('bcrypt')

class User {
    static async createUser(name, email, password) {
        try {
            const hash = await bcrypt.hash(password, 2)
            const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
            console.log("🚀 Tentando cadastrar:", { name, email, password: hash });
            const [result] = await db.execute(sql, [name, email, hash]);
            console.log("✅ Resultado da inserção:", result);

            if (!result || result.affectedRows === 0) {
                throw new Error("⚠️ Nenhuma linha foi inserida. Pode ser uma restrição UNIQUE ou problema na query.");
            }

            return result;
        } catch (error) {
            console.error("❌ Erro ao inserir usuário no banco:", error);
            throw error;
        }
    }

    static async findUserByEmail(email) {
        try {
            const sql = 'SELECT * FROM users WHERE email = ?';
            const [rows] = await db.execute(sql, [email]);
            return rows.length > 0 ? rows[0] : null;
        } catch (error) {
            console.error("❌ Erro no findUserByEmail:", error);
            throw error;
        }
    }
}

module.exports = User;
