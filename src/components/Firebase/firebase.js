import app from 'firebase/app';

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
    }

}

export default Firebase;
