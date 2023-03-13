var firebaseConfig = {
  apiKey: "AIzaSyBUMinvLJhAvOWz9KT4PcaY9C349IleCZE",
  authDomain: "trial1-71020.firebaseapp.com",
  databaseURL: "https://trial1-71020-default-rtdb.firebaseio.com",
  projectId: "trial1-71020",
  storageBucket: "trial1-71020.appspot.com",
  messagingSenderId: "224545362240",
  appId: "1:224545362240:web:61328d8f9e6b0351b2aaa5",
  measurementId: "G-1WE8LJTT03"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database()

function save() {
  var length = document.getElementById('length').value
  var bredth = document.getElementById('bredth').value
  var height = document.getElementById('height').value
 
  console.log("length :"+length)
  console.log("bredth :"+bredth)
  console.log("height :"+height)

  database.ref('values/' + length).set({
    length : length,
    bredth : bredth,
    height : height,

  
})
alert('Saved')
}

function update() {
  var length = document.getElementById('length').value
  var bredth = document.getElementById('bredth').value
  var height = document.getElementById('height').value

  var updates = {
    length : length,
    bredth : bredth,
    height : height
  }

  database.ref('values/' + length).update(updates)

}

function remove() {
  var username = document.getElementById('username').value

  database.ref('values/' + username).remove()

  alert('deleted')
}
