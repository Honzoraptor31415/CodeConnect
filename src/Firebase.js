import { API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MSG_SENDER_ID, APP_ID } from '$env/static/private';
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MSG_SENDER_ID,
  appId: APP_ID
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase();