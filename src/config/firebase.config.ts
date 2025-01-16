import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: 'AIzaSyBt9o9ScivqeqLrzZheaT50o8ukriX3M0o',
  authDomain: 'revelry-cba1f.firebaseapp.com',
  projectId: 'revelry-cba1f',
  storageBucket: 'revelry-cba1f.firebasestorage.app',
  messagingSenderId: '321782372537',
  appId: '1:321782372537:web:f650a160d08d66150c6368',
  measurementId: 'G-Z5WSLV1CZ8'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Get Firebase services
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app
