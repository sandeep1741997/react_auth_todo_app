import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDgqJ83d22j355Jx7eGBQfWczoaGgGYNNs",
    authDomain: "authtodoapp-ce2f8.firebaseapp.com",
    projectId: "authtodoapp-ce2f8",
    storageBucket: "authtodoapp-ce2f8.appspot.com",
    messagingSenderId: "825771355416",
    appId: "1:825771355416:web:b03d9631cfd77d1441026d"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire