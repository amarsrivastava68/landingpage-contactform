// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEQOsBTrkrfqftgCJcw3YC_gDrKWhvqo0",
  authDomain: "landingpagedata-bb65c.firebaseapp.com",
  projectId: "landingpagedata-bb65c",
  storageBucket: "landingpagedata-bb65c.appspot.com",
  messagingSenderId: "284360165472",
  appId: "1:284360165472:web:b23de1b63e53e555e41b05",
  measurementId: "G-BEGYGF2SEG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);

