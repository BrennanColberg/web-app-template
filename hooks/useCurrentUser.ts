import firebase from "firebase/app"
import { useEffect, useState } from "react"
import authClient from "firebase/authClient"

export default function useCurrentUser(): firebase.User {
  const [currentUser, setCurrentUser] = useState<firebase.User>()

  useEffect(() => {
    authClient.onAuthStateChanged(setCurrentUser)
  }, [])

  return currentUser
}
