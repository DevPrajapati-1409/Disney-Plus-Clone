import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAmq7uvw81kjzV8f9ox-ybaBqJXjqfO7kk",
  authDomain: "disney-clone-fa09b.firebaseapp.com",
  projectId: "disney-clone-fa09b",
  storageBucket: "disney-clone-fa09b.appspot.com",
  messagingSenderId: "160935637301",
  appId: "1:160935637301:web:6062a78425265c72585c7c",
  measurementId: "G-9MG1E9TD5F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
