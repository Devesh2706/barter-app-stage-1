import firebase from 'firebase';
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw-DG5ZLmzLidC2smfIoa7rXtRv8wVwhE",
  authDomain: "barter-app-aaf3e.firebaseapp.com",
  databaseURL: "https://barter-app-aaf3e.firebaseio.com",
  projectId: "barter-app-aaf3e",
  storageBucket: "barter-app-aaf3e.appspot.com",
  messagingSenderId: "775004933579",
  appId: "1:775004933579:web:1e500a9b574d57b3787a4e",
  measurementId: "G-TXTLC4T7Z1"
};
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
