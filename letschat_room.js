
const firebaseConfig = {
      apiKey: "AIzaSyAdYikA77hq0CFed9O9vG3t9LaKR9P6sto",
      authDomain: "kwitter-6a9d8.firebaseapp.com",
      databaseURL: "https://kwitter-6a9d8-default-rtdb.firebaseio.com",
      projectId: "kwitter-6a9d8",
      storageBucket: "kwitter-6a9d8.appspot.com",
      messagingSenderId: "622368014116",
      appId: "1:622368014116:web:fb298e4c9748b34e6c7db1"
    };
    
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
