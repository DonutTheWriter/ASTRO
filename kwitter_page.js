const firebaseConfig = {
      apiKey: "AIzaSyCU7h9wwFXsFcKa4GuLdiqbNmeiZ9F39Cc",
      authDomain: "fir-783d5.firebaseapp.com",
      databaseURL: "https://fir-783d5-default-rtdb.firebaseio.com",
      projectId: "fir-783d5",
      storageBucket: "fir-783d5.appspot.com",
      messagingSenderId: "926215936139",
      appId: "1:926215936139:web:a5a0b1bf0bcc9cc2711c8e"
    };
    
    
    firebase.initializeApp(firebaseConfig);
  
    namee=localStorage.getItem("The idoitic user");
    rome=localStorage.getItem("Room name: ");

    function send()
    {
      mgs=document.getElementById("msg").value;
      firebase.database().ref(rome).push({
         name:namee,
         message:mgs,
         like:0
      });
      document.getElementById("msg").value="";
 }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logggout()
{
  localStorage.removeItem("The idoitic user");
  localStorage.removeItem("Room name: ");
  window.location="index.html";
}