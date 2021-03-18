import firebase from 'firebase';
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDSiDwG3exJuZXZ0cQDsKuPxghM181RmWQ",
    authDomain: "booksanta-2cac9.firebaseapp.com",
    projectId: "booksanta-2cac9",
    storageBucket: "booksanta-2cac9.appspot.com",
    messagingSenderId: "30104568440",
    appId: "1:30104568440:web:9aea5d7fba48f16a2ba38d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();