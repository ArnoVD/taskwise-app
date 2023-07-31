import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIEWuFtpNG1Dm-VtK1ZdVt4uE7wcL27fg",
  authDomain: "taskwise-app.firebaseapp.com",
  projectId: "taskwise-app",
  storageBucket: "taskwise-app.appspot.com",
  messagingSenderId: "866936285745",
  appId: "1:866936285745:web:67f073d1e0e0ca109d0310",
  measurementId: "G-N2TDJEQ5E4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const app = createApp(App)
// const analytics = getAnalytics(app);

app.use(router)

app.mount('#app')
