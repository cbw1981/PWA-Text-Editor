import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to db');
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readwrite');
  //transation w read/write
  const store = tx.objectStore('jate');
  //request to store content
  const request = store.put({ id: 1, value: content });
  const result = await request; 
  // returns request
  console.log('🚀 - data saved to the database', result.value);
  };

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from db');
  // opens database
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const result = store.get(1);
  result
    ? console.log('🚀 - data retrieved from the database', result.value)
    : console.log('🚀 - data not found in the database');
  return result?.value;
};

initdb();
