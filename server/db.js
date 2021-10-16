// Testing connection with mySQL
import mysql from 'mysql2'

const USER = 'bd9f90002d4bf7'
const PW = 'b49b72fb'
const HOST = 'us-cdbr-east-04.cleardb.com'
const DB = 'heroku_2a1887659f30667'

function connectToDB() {

    var con = mysql.createConnection({
        host: HOST,
        user: USER,
        password: PW,
        database: DB
    });
    
    con.connect((err) => {
            if (err)
                throw err;
            console.log("Connected");
            console.log("Hello");
    });
}

connectToDB();

export default connectToDB;


