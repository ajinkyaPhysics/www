if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyCl4C1bj122aTjTzNByWk6YPS0ZTndvoDk",
  "authDomain": "ajinkya-physics.firebaseapp.com",
  "databaseURL": "https://ajinkya-physics.firebaseio.com",
  "messagingSenderId": "343340253264",
  "projectId": "ajinkya-physics",
  "storageBucket": "ajinkya-physics.appspot.com"
});