import { type SQLiteDatabase } from 'expo-sqlite';

export async function initializeDataBase(
    database: SQLiteDatabase
) {
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            level 
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            pfp TEXT
            role TEXT NOT NULL DEFAULT 'aluno'
        );
    `);

    await database.runAsync(
        `INSERT OR IGNORE INTO users
        (name, email, password, role)
     VALUES (?, ?, ?, ?)`,
        'Administrador',
        'admin@ouvidoria.com',
        'admin123',
        'admin'
    );
}