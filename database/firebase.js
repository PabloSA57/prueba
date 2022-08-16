import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC1yeO1VP4TqQNTu0qvTkY90bYMJpBusqw",
    authDomain: "prueba-b29c8.firebaseapp.com",
    projectId: "prueba-b29c8",
    storageBucket: "prueba-b29c8.appspot.com",
    messagingSenderId: "1002308512495",
    appId: "1:1002308512495:web:035f022303fb1cf117c91a"
  };
  
  // Initialize Firebase
   const app = initializeApp(firebaseConfig);

  const db = getFirestore();
  export default {
      
      db
  }