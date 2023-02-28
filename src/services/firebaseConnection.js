import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


let firebaseConfig = {
  apiKey: "AIzaSyCcBb_nyW41MUHA2M0438b1Qs_Jj0w40Mw",
  authDomain: "sistemadechamados-ca58a.firebaseapp.com",
  projectId: "sistemadechamados-ca58a",
  storageBucket: "sistemadechamados-ca58a.appspot.com",
  messagingSenderId: "1089657084671",
  appId: "1:1089657084671:web:58b88b1d2115019ab90aca",
  
};


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);

}

export default firebase;

