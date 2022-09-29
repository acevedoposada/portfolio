import admin from 'firebase-admin';
import {
  initializeApp as initializeAdminApp,
  applicationDefault,
} from 'firebase-admin/app';
import { initializeApp } from 'firebase/app';

require('dotenv').config();

const firebaseConfig = {
  apiKey: 'AIzaSyBCKUpi4ZyzpM7Xp7sH0o-nUW8gomyGWDA',
  authDomain: 'portfolio-david-acevedo.firebaseapp.com',
  projectId: 'portfolio-david-acevedo',
  storageBucket: 'portfolio-david-acevedo.appspot.com',
  messagingSenderId: '524541580212',
  appId: '1:524541580212:web:63b2acb4d1cdc37a0598e1',
  measurementId: 'G-0F0L5ZMEQG',
};

if (!admin.apps.length) {
  initializeAdminApp({
    credential: applicationDefault(),
    databaseURL: 'https://portfolio-david-acevedo.firebaseio.com',
  });
}

const db = admin.firestore();

let Firebase: any;

if (!Firebase?.apps?.length) {
  Firebase = initializeApp(firebaseConfig);
}

export { db };
