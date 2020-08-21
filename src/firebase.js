import firebase from 'firebase'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD32oIKAT1s1OBLFtsX0AAMukE5RY-CnH4",
  authDomain: "todolistfirebase-project.firebaseapp.com",
  databaseURL: "https://todolistfirebase-project.firebaseio.com",
  projectId: "todolistfirebase-project",
  storageBucket: "todolistfirebase-project.appspot.com",
  messagingSenderId: "129250621232",
  appId: "1:129250621232:web:d7e6c608afb5f924f2baf5"

});

const db = firebaseApp.firestore()

export default db;