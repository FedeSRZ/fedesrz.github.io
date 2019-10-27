import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDFm9NblMuSE5NGUI6yw3R0ISkuOHgvRWE",
  authDomain: "myfirstfirestore-1b9c1.firebaseapp.com",
  databaseURL: "https://myfirstfirestore-1b9c1.firebaseio.com",
  projectId: "myfirstfirestore-1b9c1",
  storageBucket: "myfirstfirestore-1b9c1.appspot.com",
  messagingSenderId: "241131382173",
  appId: "1:241131382173:web:23ffca8a7637035a"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
