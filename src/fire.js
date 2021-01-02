import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDmIe5URWyvpAMT6nt397gQ83hBUV6n_Rw",
  authDomain: "brokenfangstore-ed980.firebaseapp.com",
  projectId: "brokenfangstore-ed980",
  storageBucket: "brokenfangstore-ed980.appspot.com",
  messagingSenderId: "761470289658",
  appId: "1:761470289658:web:6881fa643b088da704ab43"
  };
 const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
 