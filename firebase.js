import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCIisY8sJElmrE9KojcGMKm21ZmkQgpwSU",
  authDomain: "mastervance-bea33.firebaseapp.com",
  projectId: "mastervance-bea33",
  storageBucket: "mastervance-bea33.appspot.com",
  messagingSenderId: "410346885183",
  appId: "1:410346885183:web:039a73985cb7d6338ba88a",
  measurementId: "G-Q6VPDST3GL"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);