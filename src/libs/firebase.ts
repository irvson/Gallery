 import { initializeApp } from 'firebase/app'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBXktyT3DB3xiHMczFb4JsmvvAg4IGjWWw",
  authDomain: "gallerytest-44e3e.firebaseapp.com",
  projectId: "gallerytest-44e3e",
  storageBucket: "gallerytest-44e3e.appspot.com",
  messagingSenderId: "31661546630",
  appId: "1:31661546630:web:ec126407cf0a4009620507"
};

const firebaseApp = initializeApp(firebaseConfig)

export const storage = getStorage(firebaseApp)

