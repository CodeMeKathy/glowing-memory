import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAifabxru17BiZ6Nt6v0sVvRtB83GHOcMQ',
	authDomain: 'shoppinglistapp-783fc.firebaseapp.com',
	projectId: 'shoppinglistapp-783fc',
	storageBucket: 'shoppinglistapp-783fc.appspot.com',
	messagingSenderId: '831850332087',
	appId: '1:831850332087:web:5a3500e0edf8e3f557f232',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// **Provided** via Firebase
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAifabxru17BiZ6Nt6v0sVvRtB83GHOcMQ",
//   authDomain: "shoppinglistapp-783fc.firebaseapp.com",
//   projectId: "shoppinglistapp-783fc",
//   storageBucket: "shoppinglistapp-783fc.appspot.com",
//   messagingSenderId: "831850332087",
//   appId: "1:831850332087:web:5a3500e0edf8e3f557f232"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
