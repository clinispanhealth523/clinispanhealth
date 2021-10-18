// Testing connection with mySQL
import mysql from 'mysql2'

const USER = 'bd9f90002d4bf7'
const PW = 'b49b72fb'
const HOST = 'us-cdbr-east-04.cleardb.com'
const DB = 'heroku_2a1887659f30667'

// CONNECTS TO THE DATABASE
var con = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PW,
    database: DB
});

// GENERAL SQL EXECUTION
function executeSQL(sql) {
    con.connect((err) => {
        if (err) throw err;
        console.log("Connected");
        con.query(sql, (err, result) => {
            if (err) throw err;
            console.log("Success");
        })
    });
}

// General execution for SQL queries that require a results field
function SQLRead(sql) {
    con.connect((err) => {
        if (err) throw err;
        console.log("Connected");
        con.query(sql, (err, result, fields) => {
            if (err) throw err;
            console.log(result);
        })
    });
}

// CREATES THE INITIAL USER TABLE
function createUserTables() {
    executeSQL('CREATE TABLE IF NOT EXISTS Patient (' +
        'id int PRIMARY KEY NOT NULL,' +
        'email VARCHAR(255) UNIQUE NOT NULL,' + 
        'password CHAR(60),' +
        'zipcode int,' + 
        'gender VARCHAR(255),' +
        'dob DATE,' +
        'nickname VARCHAR(255),' +
        'display_email VARCHAR(255),' +
        'phone int)'
    );
}

// INSERTS A ROW INTO THE PATIENT TABLE from the create profile
function createPatient(email, password, zipcode, phone) {
    executeSQL("INSERT INTO Patient (email, password, zipcode, phone)" +
        `VALUES ('${email}' ,'${password}' , '${zipcode}', '${phone}')`
    );
}

// RETRIEVES ALL ROWs FROM the Patient table
function getPatients() {
    SQLRead('SELECT * FROM Patient');
}

/*
createPatient('jdoe@gmail.com','puppylover123','27514','9191234567');
getPatients();
*/

