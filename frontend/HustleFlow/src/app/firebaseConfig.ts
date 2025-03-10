import { initializeApp } from "firebase/app";
import {firebaseConfig} from "./environment/environmentDevelopment"

const firebaseConfigs = firebaseConfig.firebase;

// Initialize Firebase
const app = initializeApp(firebaseConfigs);

export default app;
