import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAGCvrIzrlKZ0hi7MdtvBB4YG_x_iNArA8",
    authDomain: "perfumeaddict-6294b.firebaseapp.com",
    projectId: "perfumeaddict-6294b",
    storageBucket: "perfumeaddict-6294b.appspot.com",
    messagingSenderId: "820766949139",
    appId: "1:820766949139:web:e387fe896c83badcb7e4e6",
    measurementId: "G-N4E2NLPZR9",
    databaseURL: "https://perfumeaddict-6294b-default-rtdb.asia-southeast1.firebasedatabase.app/"
  };
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth;
export const db = firebase.database();