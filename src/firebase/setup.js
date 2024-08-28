import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAUAh7jY3Od0G4LPzhZow2q4B9QaiKQVcM",
    authDomain: "clone-news-c7ca1.firebaseapp.com",
    projectId: "clone-news-c7ca1",
    storageBucket: "clone-news-c7ca1.appspot.com",
    messagingSenderId: "330824006694",
    appId: "1:330824006694:web:806de9e574302b8d02fae7"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();