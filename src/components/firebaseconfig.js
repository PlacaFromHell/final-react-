import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {

  apiKey: "AIzaSyDpT_vmtMFBVOScMV9JhPulUwPuebHQwho",

  authDomain: "olorapijs.firebaseapp.com",

  projectId: "olorapijs",

  storageBucket: "olorapijs.appspot.com",

  messagingSenderId: "608402806241",

  appId: "1:608402806241:web:01900611dc47242f5d6ea0"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)