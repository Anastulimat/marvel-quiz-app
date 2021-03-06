import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

//Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCA7I0T2WxxYPJKBY517WF44TfqGwwlBsA",
    authDomain: "marvel-quiz-3c767.firebaseapp.com",
    databaseURL: "https://marvel-quiz-3c767.firebaseio.com",
    projectId: "marvel-quiz-3c767",
    storageBucket: "marvel-quiz-3c767.appspot.com",
    messagingSenderId: "920077675926",
    appId: "1:920077675926:web:05fbcdb17aa7cdee2a01b7"
};

class Firebase {
    /**
     * Firebase constructor
     */
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    /**
     * Registration
     * @param email
     * @param password
     */
    signUpUser = (email, password) => {
        return this.auth.createUserWithEmailAndPassword(email, password);
    }

    /**
     * Login
     * @param email
     * @param password
     */
    loginUser = (email, password) => {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    /**
     * Sign out
     */
    signOutUser = () => {
        return this.auth.signOut();
    }

    /**
     *
     * @param email
     * @returns {Promise<void>}
     */
    passwordReset = (email) => {
        return this.auth.sendPasswordResetEmail(email);
    }

    /**
     *
     * @param uid
     */
    userCollection = (uid) =>  {
        return this.db.doc(`users/${uid}`);
    }


}

export default Firebase;
