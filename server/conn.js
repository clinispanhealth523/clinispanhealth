// Testing connection with mySQL
import mysql from 'mysql2'
import 'dotenv/config'


// CONNECTS TO THE DATABASE
export const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PW,
    database: process.env.DB
});