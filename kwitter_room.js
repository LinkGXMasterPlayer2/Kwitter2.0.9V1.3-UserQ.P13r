
//ADD YOUR FIREBASE LINKS HERE
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
    username = localStorage.getItem("username");
    document.getElementById("user_name").innerHTML = "Welcome " + username + "! 🎉 ";

    function addRoom(){

      roomName = document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomName).update({

            purpose: "adding Room Name"
      });

      localStorage.setItem("roomName", roomName);
      window.location = "kwitter_page.html";


    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class= 'roomName' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row; 

      //End code
      });});}
getData();

function redirectToRoomName(name){


      console.log(name);
      localStorage.setItem("room_name");
      window.location = "kwitter_page.html";

}


function logOut(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}

