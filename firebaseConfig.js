import * as firebase from 'firebase/app';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCs4rdqh_aqmGwQ8l_u-uddGL9ec2cZtHE",
    authDomain: "react-firestore-4af03.firebaseapp.com",
    databaseURL: "https://react-firestore-4af03.firebaseio.com",
    projectId: "react-firestore-4af03",
    storageBucket: "react-firestore-4af03.appspot.com",
    messagingSenderId: "552353998707",
    appId: "1:552353998707:web:f14ffecefb46b2bb868706"
};
firebase.initializeApp(firebaseConfig);


export  const db = firebase.firestore();