import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCPqfCAn14RYHnh5CA_Uqcj9oDZXii4Tos",
  authDomain: "gamerhub-39ec8.firebaseapp.com",
  projectId: "gamerhub-39ec8",
  storageBucket: "gamerhub-39ec8.appspot.com",
  messagingSenderId: "668807926744",
  appId: "1:668807926744:web:719c61614e4e699ccc58ad",
};
const firebaseApp = initializeApp(firebaseConfig);
const mystorage = getStorage(firebaseApp);

export { mystorage };
