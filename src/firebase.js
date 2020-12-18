import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAdXuqDdtnNkWA74iLia9XbMk8YwAmDeec",
    authDomain: "diaryapp-92ede.firebaseapp.com",
    projectId: "diaryapp-92ede",
    storageBucket: "diaryapp-92ede.appspot.com",
    messagingSenderId: "184345660567",
    appId: "1:184345660567:web:958e66055a533d1145add2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.database().ref()

export default db










