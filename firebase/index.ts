const firebaseConfig = {
  // TODO create a new Firebase project
  // TODO make a "Web App" within your Firebase project
  // TODO put the firebaseConfig for your Web App here
}

import firebase from "firebase/app"
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)
export default firebase
