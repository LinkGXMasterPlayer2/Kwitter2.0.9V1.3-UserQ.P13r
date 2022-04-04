//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBJJprtDZjN8CUJx0k-j0igQ7LGTl_-oSg",
      authDomain: "kwitter-c7a0a.firebaseapp.com",
      databaseURL: "https://kwitter-c7a0a-default-rtdb.firebaseio.com",
      projectId: "kwitter-c7a0a",
      storageBucket: "kwitter-c7a0a.appspot.com",
      messagingSenderId: "962224638465",
      appId: "1:962224638465:web:400ee29b1de426df554e00"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig); 

    userName = localStorage.getItem("username");
    roomName = localStorage.getItem("roomName");

    function send(){

      msg = document.getElementById("msg").value;
      firebase.database().ref(roomName).push({

            name: userName,
            message: msg,
            like:0

      });
      document.getElementById("msg").value = "";


    }

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         massage = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'> </h4> ";
         message_with_tag = "<h4 class = 'message_h4'> " + message + "</h4>";
         like_btn = "<button class = 'btn btn-warning' id = " + firebase_message_id + " value = " + like + "onclick = 'updateLike(this.id)'> ";
         span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> LIKE: " + like + "</span></button><hr>";
         row = name_with_tag + message_with_tag + like_btn + span_with_tag;
         document.getElementById("output").innerHTML += row;

//Start code

//End code
      } });  }); }
getData();



function updateLike(message_id){


      console.log("clicked on like button (👆🏽) - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updatedLikes = Number(likes) + 1;
      console.log(updatedLikes);
      firebase.database().ref(roomName).child(message_id).update({

            like: updatedLikes;
      });

      
}
