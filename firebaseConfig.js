import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyD_Ypl9nrAuAF4Aqqy85KtypKnx06md-gI",
    authDomain: "financial-app-531bd.firebaseapp.com",
    databaseURL: "https://financial-app-531bd-default-rtdb.firebaseio.com",
    projectId: "financial-app-531bd",
    storageBucket: "financial-app-531bd.appspot.com",
    messagingSenderId: "914763814948",
    appId: "1:914763814948:web:c035b4fa621bda11f960b1",
    measurementId: "G-3VVYSPTXR5"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);
  
  export { database };