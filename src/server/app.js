const express = require("express")
const session = require('express-session')
const os = require("os")
const app = express()

const router = require('./router')

const admin = require("firebase-admin")
const firebase = require("firebase")

const serviceAccount = require("./serviceAccountKey.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://boogiewoogie-bab99.firebaseio.com"
})

const config = {
    apiKey: "AIzaSyBDvx6snGE9ucn0SyQmce-adClKqltTrME",
    authDomain: "boogiewoogie-bab99.firebaseapp.com",
    databaseURL: "https://boogiewoogie-bab99.firebaseio.com",
    storageBucket: "boogiewoogie-bab99.appspot.com"
  }

firebase.initializeApp(config)

app.use

app.listen(8080, () => console.log("Listening on port 8080!"))