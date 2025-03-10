// firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

// Only initialize Firebase in the client-side
let app: any;
let db: any;
let analytics: any;

if (typeof window !== 'undefined') {
  const firebaseConfig = {
    apiKey: "AIzaSyBJPsqkfJwumD9HsXqPLqowmfSklQU5jcE",
    authDomain: "car-showcase-project.firebaseapp.com",
    projectId: "car-showcase-project",
    storageBucket: "car-showcase-project.firebasestorage.app",
    messagingSenderId: "12479332559",
    appId: "1:12479332559:web:252413c3a8240db1dcf7ba",
    measurementId: "G-LP0R2MH46Z"
  };

  // Initialize Firebase only if running in the client environment
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  analytics = getAnalytics(app);
}

export { db, addDoc, collection };