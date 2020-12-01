import firebase from "."
import "firebase/analytics"
export default typeof window === "undefined" ? null : firebase.analytics()
