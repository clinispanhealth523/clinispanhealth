// Testing connection with mySQL
const mysql = require('mysql2');

// CREATES A CONNECTION (given a user, host, pw, and db)
// Returns that connection
export function createCon(host, user, pw, db) {
    return new Promise(function(resolve, reject) {
        const con = mysql.createConnection({
            host: host,
            user: user,
            password: pw,
            database: db
        });

        resolve(con);
    })
}



// ESTABLISHES A CONNECTION, given a connection
export function testConnection(con) {
    // Wrap everything in a promise
    return new Promise(function(resolve, reject) {
        // Establish the connection and return a result message
        con.connect(function(err) {
            const result = err ? err : "Success";
            resolve(result);
        });

        // Close the connection
        con.end();
    });
}


// GENERAL SQL EXECUTION
function executeSQL(sql) {
    con.connect((err) => {
        if (err) throw err;
        con.query(sql, (err, result) => {
            if (err) throw err;
        });
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

// RESET THE DATABASE
function resetDB() {
    dropRelations();
    dropEntities();
    createEntities();
    createRelations();
}

// Drops all entity tables
function dropEntities() {
    // Tables with foreign keys need to be removed first
    executeSQL('DROP TABLE IF EXISTS Location');
    executeSQL('DROP TABLE IF EXISTS Ethnicity');
    executeSQL('DROP TABLE IF EXISTS Characteristic');
    executeSQL('DROP TABLE IF EXISTS StudyCondition');
    executeSQL('DROP TABLE IF EXISTS Study');
    executeSQL('DROP TABLE IF EXISTS Manager');
    executeSQL('DROP TABLE IF EXISTS Partner');
    executeSQL('DROP TABLE IF EXISTS Admin');
    executeSQL('DROP TABLE IF EXISTS Patient');  
}

// Drops all relation tables
function dropRelations() {
    executeSQL('DROP TABLE IF EXISTS HasEthnicity');
    executeSQL('DROP TABLE IF EXISTS EnrolledIn');
    executeSQL('DROP TABLE IF EXISTS InterestedIn');
    executeSQL('DROP TABLE IF EXISTS HasCondition');
    executeSQL('DROP TABLE IF EXISTS ConditionFor');
    executeSQL('DROP TABLE IF EXISTS CharacteristicFor');
    executeSQL('DROP TABLE IF EXISTS LocatedIn');
}

// CREATES THE INITIAL ENTITY TABLES IN THE DB
// Returns success unless an error arises
function createEntities() {

    return new Promise(function(resolve,reject) {
        // Connect first
        con.connect();
        try {
            // Patient Table
            executeSQL('CREATE TABLE IF NOT EXISTS Patient (' +
            'id int PRIMARY KEY NOT NULL,' +
            'email VARCHAR(255) UNIQUE NOT NULL,' + 
            'password CHAR(64),' +
            'zipcode int,' + 
            'gender VARCHAR(255),' +
            'dob DATE,' +
            'nickname VARCHAR(255),' +
            'display_email VARCHAR(255),' +
            'phone int, ' +
            'referral_code VARCHAR(60))'
            );

            // Admin Table
            executeSQL('CREATE TABLE IF NOT EXISTS Admin (' +
                'id int PRIMARY KEY NOT NULL,' +
                'email VARCHAR(255) UNIQUE NOT NULL)'
            );

            // Partner Table
            executeSQL('CREATE TABLE IF NOT EXISTS Partner (' +
                'id int PRIMARY KEY NOT NULL,' +
                'name VARCHAR(255) UNIQUE NOT NULL)'
            );

            // Study Manager Table
            executeSQL('CREATE TABLE IF NOT EXISTS Manager (' +
                'id int PRIMARY KEY NOT NULL,' +
                'email VARCHAR(255) UNIQUE NOT NULL,' +
                'partner int, '+
                'FOREIGN KEY (partner) REFERENCES Partner(id))'
            );

            // Study Table
            executeSQL('CREATE TABLE IF NOT EXISTS Study (' +
                'nct int PRIMARY KEY NOT NULL,' +
                'name VARCHAR(255),' +
                'description MEDIUMTEXT,' +
                'partner int,' + 
                'FOREIGN KEY (partner) REFERENCES Partner(id))'
            );

            // Patient/Study Condition Table
        executeSQL('CREATE TABLE IF NOT EXISTS StudyCondition (' +
                'id int PRIMARY KEY NOT NULL,' +
                'name VARCHAR(255) UNIQUE NOT NULL)'
            );

            // Study Characteristic Table
            executeSQL('CREATE TABLE IF NOT EXISTS Characteristic (' +
                'id int PRIMARY KEY NOT NULL,' +
                'name VARCHAR(255) UNIQUE NOT NULL)'
            );

            // Ethnicity Table
            executeSQL('CREATE TABLE IF NOT EXISTS Ethnicity (' +
                'id int PRIMARY KEY NOT NULL,' +
                'name VARCHAR(255) UNIQUE NOT NULL)'
            );

            // Location Table
            executeSQL('CREATE TABLE IF NOT EXISTS Location (' +
                'zipcode int PRIMARY KEY NOT NULL,' +
                'city VARCHAR(255),' +
                'state CHAR(2))'
            );
        }
        catch(error) {
            resolve(error);
        }
        resolve("Success");
        
        // End the connection
        con.end();
    });
}

// CREATES THE RELATIONAL TABLES IN SQL
function createRelations() {
    executeSQL('CREATE TABLE IF NOT EXISTS EnrolledIn (' +
        'patient int,' +
        'study int,' +
        'FOREIGN KEY (patient) REFERENCES Patient(id),' +
        'FOREIGN KEY (study) REFERENCES Study(nct))'
    );

    executeSQL('CREATE TABLE IF NOT EXISTS HasEthnicity (' +
        'patient int,' +
        'ethnicity int,' +
        'FOREIGN KEY (patient) REFERENCES Patient(id),' +
        'FOREIGN KEY (ethnicity) REFERENCES Ethnicity(id))'
    );


    executeSQL('CREATE TABLE IF NOT EXISTS InterestedIn (' +
        'patient int,' +
        'characteristic int,' +
        'FOREIGN KEY (patient) REFERENCES Patient(id),' +
        'FOREIGN KEY (characteristic) REFERENCES Characteristic(id))'
    );

    executeSQL('CREATE TABLE IF NOT EXISTS HasCondition (' +
        'patient int,' +
        'study_condition int,' +
        'FOREIGN KEY (patient) REFERENCES Patient(id),' +
        'FOREIGN KEY (study_condition) REFERENCES StudyCondition(id))'
    );

    executeSQL('CREATE TABLE IF NOT EXISTS ConditionFor (' +
        'study int,' +
        'study_condition int,' +
        'FOREIGN KEY (study) REFERENCES Study(nct),' +
        'FOREIGN KEY (study_condition) REFERENCES StudyCondition(id))'
    );

    executeSQL('CREATE TABLE IF NOT EXISTS CharacteristicFor(' +
        'characteristic int,' +
        'study int,' +
        'FOREIGN KEY (characteristic) REFERENCES Characteristic(id),' +
        'FOREIGN KEY (study) REFERENCES Study(nct))'
    );

    executeSQL('CREATE TABLE IF NOT EXISTS LocatedIn(' +
        'study int,' +
        'location int,' +
        'FOREIGN KEY (study) REFERENCES Study(nct),' +
        'FOREIGN KEY (location) REFERENCES Location(zipcode))'
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

