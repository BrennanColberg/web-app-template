import firebase from "firebase/app"
if (!firebase.apps.length) firebase.initializeApp({})
export default firebase
