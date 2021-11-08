import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";
import config from "./firebaseConfig";
const app = firebase.initializeApp(config);
const db = getFirestore(app);
export { app, db };
