
var firebaseConfig = {
    apiKey: "AIzaSyDyftrWJ8HwXZh2mlWPzL2vohK9BlVgm_w",
    authDomain: "kwitter-325d7.firebaseapp.com",
    databaseURL: "https://kwitter-325d7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kwitter-325d7",
    storageBucket: "kwitter-325d7.appspot.com",
    messagingSenderId: "1002758633499",
    appId: "1:1002758633499:web:3fdb7ccdf6e53dffa3a0be",
    measurementId: "G-DSNRKM5ZZ2"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUSer()
{
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
});
}