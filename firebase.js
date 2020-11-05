import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';

let app;

const firebaseConfig = {
    apiKey: 'AIzaSyBA9nJM9wFmKMSEK_n4DFS8zfbGXHhsZZQ',
    authDomain: 'zy-dev-proejct.firebaseapp.com',
    databaseURL: 'https://zy-dev-proejct.firebaseio.com',
    projectId: 'zy-dev-proejct',
    storageBucket: 'zy-dev-proejct.appspot.com',
    messagingSenderId: '703388529345',
    appId: '1:703388529345:web:973498fce4c0b25f239a40',
    measurementId: 'G-HBB6S4XJ2W',
};

if (!firebase.apps.length) {
    try {
        app = firebase.initializeApp(firebaseConfig);
    } catch (err) {
        // firebase.initializeApp(firebaseConfig);
        console.log(err);
        app = firebase.app().delete();
    }
} else {
    app = firebase.app();
}

export default app;
