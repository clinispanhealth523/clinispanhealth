import mysql from 'mysql2'
import sum from './db.js';
jest.useFakeTimers();
 
describe('sum function', () => {
  it('sums up two integers', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});

console.error = message => {
    throw new Error(message);
}