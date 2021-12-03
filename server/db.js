import mysql from "mysql2/promise";
import 'dotenv/config';

import { SCHEMA } from './schema.js'

const HOST = process.env.HOST;
const USER = process.env.USER;
const PW = process.env.PW;
const DB = process.env.DB;


// Creates a connection
async function createCon() {
    return await mysql.createConnection({
        host: HOST,
        user: USER,
        password: PW,
        database: DB
    });
}

// Test Connection
export async function testCon() {
    const conn = await createCon();
    await conn.connect();
    await conn.end();
    return "Success";
}

// Creates a pool
function createPool() {
    return mysql.createPool({
        host: HOST,
        user: USER,
        password: PW,
        database: DB
    }); 
}

// Creates the Initial Database Using a Connection Pool
export async function createSchema() {
    // First, create the pool
    const pool = createPool();
    // Write pool queries for primary entities, then secondary entities, then relations
    await Promise.all([
        pool.query(SCHEMA.Patient),
        pool.query(SCHEMA.Admin),
        pool.query(SCHEMA.Partner),
        pool.query(SCHEMA.StudyCondition),
        pool.query(SCHEMA.Characteristic),
        pool.query(SCHEMA.Ethnicity),
        pool.query(SCHEMA.Location)
    ]);
    await Promise.all([
        pool.query(SCHEMA.Manager),
        pool.query(SCHEMA.Study),
    ]);
    await Promise.all([
        pool.query(SCHEMA.EnrolledIn),
        pool.query(SCHEMA.HasEthnicity),
        pool.query(SCHEMA.InterestedIn),
        pool.query(SCHEMA.HasCondition),
        pool.query(SCHEMA.ConditionFor),
        pool.query(SCHEMA.CharacteristicFor),
        pool.query(SCHEMA.LocatedIn)
    ]);

    await pool.end();

    return "Success";
}

// Deletes the Schema

export async function deleteSchema() {
    const pool = createPool();
    // To prevent foreign constraint errors, first drop relations
    // Then drop entities with foreign keys, then drop primary entities
    await Promise.all([
        pool.query('DROP TABLE IF EXISTS HasEthnicity'),
        pool.query('DROP TABLE IF EXISTS EnrolledIn'),
        pool.query('DROP TABLE IF EXISTS InterestedIn'),
        pool.query('DROP TABLE IF EXISTS HasCondition'),
        pool.query('DROP TABLE IF EXISTS ConditionFor'),
        pool.query('DROP TABLE IF EXISTS CharacteristicFor'),
        pool.query('DROP TABLE IF EXISTS LocatedIn')
    ]);
    await Promise.all([
        pool.query('DROP TABLE IF EXISTS Study'),
        pool.query('DROP TABLE IF EXISTS Manager'),
    ]);
    await Promise.all([
        pool.query('DROP TABLE IF EXISTS Location'),
        pool.query('DROP TABLE IF EXISTS Ethnicity'),
        pool.query('DROP TABLE IF EXISTS Characteristic'),
        pool.query('DROP TABLE IF EXISTS StudyCondition'),
        pool.query('DROP TABLE IF EXISTS Partner'),
        pool.query('DROP TABLE IF EXISTS Admin'),
        pool.query('DROP TABLE IF EXISTS Patient'), 
    ]);
    await pool.end();
    return "Success";
}

// DICTIONARY TO STRINGS
// Input: A dictionary
// Output: A string of the keys and a string of the values
export function dictToString(dict) {
    let fields = '';
    let values = ''
    for (const [key,value] of Object.entries(dict)) {
        fields += `${key},`
        values += `'${value}',`
    }
    // Remove additional comma added on at the end
    return [fields.slice(0,-1), values.slice(0,-1)];
}

// CREATES A NEW PATIENT IN THE DB
// Input: A dictionary with any subset of patient information
export async function createPatient(info) {
    const [fields, values] = dictToString(info);
    const conn = await createCon();
    await conn.execute(
        `INSERT INTO Patient (${fields}) VALUES (${values})`
    );
    await conn.end();
    return "Success";
}

// RETRIEVES PATIENT INFO FROM THE DB
// Input, all patient info provided
// Output, a dictionary with the patient information
export async function getPatient(email) {
    const conn = await createCon();
    const [result, fields] = await conn.execute(`SELECT * FROM Patient WHERE email = '${email}'`).catch(err => {
        return err;
    });
    await conn.end();
    return result[0];
}

export async function getPatientById(id) {
    const c = await createCon();
    const [result, fields] = await c.execute(`SELECT * FROM Patient WHERE id = '${id}'`).catch(err => {
        return err;
    });
    await c.end();
    return result[0];
}