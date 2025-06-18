import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQSjDbuWCRR2g_0ql6-hj6XwvslCiU8OI",
  authDomain: "internetshop-89ec2.firebaseapp.com",
  projectId: "internetshop-89ec2",
  storageBucket: "internetshop-89ec2.firebasestorage.app",
  messagingSenderId: "688230899996",
  appId: "1:688230899996:web:b3475f211db53147461ad9"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
