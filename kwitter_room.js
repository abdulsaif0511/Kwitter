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
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       
      //End code
      });});}
getData();



function addRoom(){
  room_name=document.getElementById("room_name").ariaValueMax;
  firebase.database().ref("/").child(room_name).updata({
        purpose:"adding room name"
  });
   localStorage.setItem("room_name",room_name);
   window.location="kwitter_page.html"
}

function redirectToRoomName(name)

{

      console.log(name);
      localStorage.setItem("room_name",name);
        window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}