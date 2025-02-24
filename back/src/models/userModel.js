const db = require('../db/db');
const bcrypt = require('bcrypt');

class User {
    static async createUser(name, email, password) {
        const hash = await bcrypt.hash(password, 10);
        const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        const [result] = await db.execute(sql, [name, email, hash]);
        return result;
    }

    static async findUserByEmail(email) {
        const sql = 'SELECT * FROM users WHERE email = ?'
        const [rows] = await db.execute(sql, [email])
        return rows[0];
    }
}

module.exports = User;
