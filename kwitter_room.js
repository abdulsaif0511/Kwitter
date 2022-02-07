var firebaseConfig = {
      apiKey: "AIzaSyBsuOyuzu0xOBlPWCPY8Rf8cFc3BsqoMKg",
      authDomain: "chatapp-3c479.firebaseapp.com",
      databaseURL: "https://chatapp-3c479-default-rtdb.firebaseio.com",
      projectId: "chatapp-3c479",
      storageBucket: "chatapp-3c479.appspot.com",
      messagingSenderId: "25594188766",
      appId: "1:25594188766:web:acd74abb80d7d93002034f"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
