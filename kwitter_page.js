//YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyCJox0E678rG-av-l6cU2FPyvjiQhGClX4",
      authDomain: "medichat-1cf70.firebaseapp.com",
      databaseURL: "https://medichat-1cf70-default-rtdb.firebaseio.com",
      projectId: "medichat-1cf70",
      storageBucket: "medichat-1cf70.appspot.com",
      messagingSenderId: "460894171220",
      appId: "1:460894171220:web:e57614ca6e92b6034d7dc1"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   function send () {
      msg = document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
           name : user_name,
           message:msg,
           like:0 
      });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

               console.log(firebase_message_id);
               console.log(message_data);
               name = message_data['name'];
               message = message_data['message'];
               like = message_data['like'];
               name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
               message_with_tag = "<h4 class='message_h4'>"+ message +"</h4>";
               like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
               span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

               row = name_with_tag+message_with_tag+like_button+span_with_tag;
               document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();


function updateLike(message_id)
{

      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).ariaValueMax;
      updated_likes = Number(likes);
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
           like : updated_likes 
      });

}



function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "kwitter.html";
    }






    