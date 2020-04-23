import * as firebase from "firebase";

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDffYxl01lLTR4OAHOoiEXYP0mX0lMwJNE",
    authDomain: "quizer-5bb95.firebaseapp.com",
    databaseURL: "https://quizer-5bb95.firebaseio.com",
    projectId: "quizer-5bb95",
    storageBucket: "quizer-5bb95.appspot.com",
    messagingSenderId: "154892451896",
    appId: "1:154892451896:web:11117ba893f8a89f03a6cd"
};

firebase.initializeApp(firebaseConfig);

export default firebase;