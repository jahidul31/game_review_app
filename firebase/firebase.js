import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: YOUR_APP_KEY
  authDomain: YOUR_DOMAIN
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
const firebaseApp = initializeApp(firebaseConfig);
const mystorage = getStorage(firebaseApp);

export { mystorage };
