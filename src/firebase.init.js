// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF3AXkFYJRi0k-EglCauzqbzH-rehccW8",
  authDomain: "warehouse-management-834e2.firebaseapp.com",
  projectId: "warehouse-management-834e2",
  storageBucket: "warehouse-management-834e2.appspot.com",
  messagingSenderId: "857098665708",
  appId: "1:857098665708:web:4c7e6f4529fb945aa86fc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;