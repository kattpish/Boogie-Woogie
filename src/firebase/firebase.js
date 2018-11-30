import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBDvx6snGE9ucn0SyQmce-adClKqltTrME",
  authDomain: "boogiewoogie-bab99.firebaseapp.com",
  databaseURL: "https://boogiewoogie-bab99.firebaseio.com",
  projectId: "boogiewoogie-bab99",
  storageBucket: "boogiewoogie-bab99.appspot.com",
  messagingSenderId: "578325550898"
}
firebase.initializeApp(config)

const db = firebase.database()

export {
  firebase,
  db
}