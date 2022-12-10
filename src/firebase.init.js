// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIk2kD18fCK3jhbaJyo4YIKV5ANGdqrRQ",
  authDomain: "iotroomautomationweb.firebaseapp.com",
  projectId: "iotroomautomationweb",
  storageBucket: "iotroomautomationweb.appspot.com",
  messagingSenderId: "440531878603",
  appId: "1:440531878603:web:0e045558452870a70f114e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, app, analytics };
