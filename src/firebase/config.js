
import { initializeApp } from "firebase/app";

const firebaseConfig = {
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);