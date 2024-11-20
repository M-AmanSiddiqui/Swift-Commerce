import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCe9xSGcgJjeMBFdRz12YV96eRIakHCESA",
  authDomain: "swiftsinvents.firebaseapp.com",
  projectId: "swiftsinvents",
  storageBucket: "swiftsinvents.firebasestorage.app",
  messagingSenderId: "139809792932",
  appId: "1:139809792932:web:0cd5ab691f60deaf471731",
  measurementId: "G-20219N4451"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export {
  app,auth,
}

