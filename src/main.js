import { createApp } from 'vue'
import App from './App.vue'
import router from './router'





import firebase from "firebase/app";
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXVZekaSYi90sc8m3Sou3cJi-XfGMDoVY",
    authDomain: "testvue-ad06c.firebaseapp.com",
    projectId: "testvue-ad06c",
    storageBucket: "testvue-ad06c.appspot.com",
    messagingSenderId: "483980938866",
    appId: "1:483980938866:web:0028db783c05270a5a3ceb"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()


createApp(App).use(router).mount('#app')
