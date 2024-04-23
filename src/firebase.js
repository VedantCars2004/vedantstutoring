// firebase.js
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

const firebaseConfig = {
  // Your Firebase configuration details
  apiKey: "AIzaSyABaCjz5hz9JQmiXE72dGAfTiN5PmA6Pp0",
  authDomain: "vedantstutoring.firebaseapp.com",
  projectId: "vedantstutoring",
  storageBucket: "vedantstutoring.appspot.com",
  messagingSenderId: "293606034792",
  appId: "1:293606034792:web:70847dc60779fff5e91add",
  measurementId: "G-HLCS6Y80K3"
};

firebase.initializeApp(firebaseConfig);

export default firebase;