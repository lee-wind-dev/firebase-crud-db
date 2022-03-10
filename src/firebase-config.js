import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBUmyU8QKOByKVuo6kHxe3od_t3oQ7XkCs",
    authDomain: "dbblogleewind.firebaseapp.com",
    projectId: "dbblogleewind",
    storageBucket: "dbblogleewind.appspot.com",
    messagingSenderId: "358424313431",
    appId: "1:358424313431:web:6a4ff8dba25bb0d6aced12",
    measurementId: "G-XH013QG0HC"
};

const app = initializeApp(firebaseConfig);

export const db  = getFirestore();