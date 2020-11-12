import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAvALiS_qft-aHq7osNyrkDHEqcw6gbo5Y",
  authDomain: "facebook-clone-a6068.firebaseapp.com",
  databaseURL: "https://facebook-clone-a6068.firebaseio.com",
  projectId: "facebook-clone-a6068",
  storageBucket: "facebook-clone-a6068.appspot.com",
  messagingSenderId: "227714239063",
  appId: "1:227714239063:web:417d800e7a18f631f5b112",
  measurementId: "G-C9DT7VRT5B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;