
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

  userplayer=localStorage.getItem("The idoitic user");
  document.getElementById("useridoiit").innerHTML="Welcome "+userplayer+"!";

  function addd()
  {
    roomnam= document.getElementById("iminurhouse").value;
    firebase.database().ref("/").child(roomnam).update({
        man: "get in IDOIT"
    });
    localStorage.setItem("Room name:", roomnam);
    window.location="kwitter_page.html";
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names);
      row="<div class='iminurhouse' id="+Room_names+"onclick='redirect(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirect(name)
{
  console.log(name);
  localStorage.setItem("Room name: ",name);
  window.location="kwitter_page.html";
}

function logoutt()
{
  localStorage.removeItem("The idoitic user");
  localStorage.removeItem("Room name: ");
  window.location="index.html";
}