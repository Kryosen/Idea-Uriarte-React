import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBa61OGrtZbVsv17rY-VUYA7itthTOUEC4",
  authDomain: "mensajeria-la-reja.firebaseapp.com",
  projectId: "mensajeria-la-reja",
  storageBucket: "mensajeria-la-reja.appspot.com",
  messagingSenderId: "631085305835",
  appId: "1:631085305835:web:cc50e6d31245584817d3ae",
};

const app = initializeApp(firebaseConfig);

export default function getFirestore() {
  return app;
}
