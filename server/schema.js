// CONTAINS TEXT THAT DESCRIBES THE SQL USED TO CREATE THE DB SCHEMA

export const SCHEMA = {
    // PRIMARY ENTITIES (no foreign keys)
    Patient: 'CREATE TABLE IF NOT EXISTS Patient (' +
                'id int PRIMARY KEY NOT NULL AUTO_INCREMENT,' +
                'email VARCHAR(255) UNIQUE NOT NULL,' + 
                'first VARCHAR(255),' +
                'last VARCHAR(255),' +
                'password CHAR(64),' +
                'zipcode int,' + 
                'gender VARCHAR(255),' +
                'dob DATE,' +
                'nickname VARCHAR(255),' +
                'display_email VARCHAR(255),' +
                'phone VARCHAR(12), ' +
                'referral_code VARCHAR(60))',  
    Admin: 'CREATE TABLE IF NOT EXISTS Admin (' +
                'id int PRIMARY KEY NOT NULL,' +
                'email VARCHAR(255) UNIQUE NOT NULL,' +
                'password CHAR(64))',
    Partner: 'CREATE TABLE IF NOT EXISTS Partner (' +
                'id int PRIMARY KEY NOT NULL,' +
                'name VARCHAR(255) UNIQUE NOT NULL)',
    StudyCondition: 'CREATE TABLE IF NOT EXISTS StudyCondition (' +
                'id int PRIMARY KEY NOT NULL,' +
                'name VARCHAR(255) UNIQUE NOT NULL)',
    Characteristic: 'CREATE TABLE IF NOT EXISTS Characteristic (' +
                'id int PRIMARY KEY NOT NULL,' +
                'name VARCHAR(255) UNIQUE NOT NULL)',
    Ethnicity: 'CREATE TABLE IF NOT EXISTS Ethnicity (' +
                'id int PRIMARY KEY NOT NULL,' +
                'name VARCHAR(255) UNIQUE NOT NULL)',
    Location: 'CREATE TABLE IF NOT EXISTS Location (' +
                'zipcode int PRIMARY KEY NOT NULL,' +
                'city VARCHAR(255),' +
                'state CHAR(2))',

    // SECONDARY ENTITIES (have foreign keys)
    Manager: 'CREATE TABLE IF NOT EXISTS Manager (' +
                'id int PRIMARY KEY NOT NULL,' +
                'email VARCHAR(255) UNIQUE NOT NULL,' +
                'password CHAR(64),' +
                'partner int, '+
                'FOREIGN KEY (partner) REFERENCES Partner(id))',
    Study: 'CREATE TABLE IF NOT EXISTS Study (' +
                'nct int PRIMARY KEY NOT NULL,' +
                'name VARCHAR(255),' +
                'description MEDIUMTEXT,' +
                'partner int,' + 
                'FOREIGN KEY (partner) REFERENCES Partner(id))',

    // RELATIONS
    EnrolledIn: 'CREATE TABLE IF NOT EXISTS EnrolledIn (' +
        'patient int,' +
        'study int,' +
        'FOREIGN KEY (patient) REFERENCES Patient(id),' +
        'FOREIGN KEY (study) REFERENCES Study(nct))',
    HasEthnicity: 'CREATE TABLE IF NOT EXISTS HasEthnicity (' +
        'patient int,' +
        'ethnicity int,' +
        'FOREIGN KEY (patient) REFERENCES Patient(id),' +
        'FOREIGN KEY (ethnicity) REFERENCES Ethnicity(id))',
    InterestedIn: 'CREATE TABLE IF NOT EXISTS InterestedIn (' +
        'patient int,' +
        'characteristic int,' +
        'FOREIGN KEY (patient) REFERENCES Patient(id),' +
        'FOREIGN KEY (characteristic) REFERENCES Characteristic(id))',
    HasCondition: 'CREATE TABLE IF NOT EXISTS HasCondition (' +
        'patient int,' +
        'study_condition int,' +
        'FOREIGN KEY (patient) REFERENCES Patient(id),' +
        'FOREIGN KEY (study_condition) REFERENCES StudyCondition(id))',
    ConditionFor: 'CREATE TABLE IF NOT EXISTS ConditionFor (' +
        'study int,' +
        'study_condition int,' +
        'FOREIGN KEY (study) REFERENCES Study(nct),' +
        'FOREIGN KEY (study_condition) REFERENCES StudyCondition(id))',
    CharacteristicFor: 'CREATE TABLE IF NOT EXISTS CharacteristicFor(' +
        'characteristic int,' +
        'study int,' +
        'FOREIGN KEY (characteristic) REFERENCES Characteristic(id),' +
        'FOREIGN KEY (study) REFERENCES Study(nct))',
    LocatedIn: 'CREATE TABLE IF NOT EXISTS LocatedIn(' +
        'study int,' +
        'location int,' +
        'FOREIGN KEY (study) REFERENCES Study(nct),' +
        'FOREIGN KEY (location) REFERENCES Location(zipcode))'
}