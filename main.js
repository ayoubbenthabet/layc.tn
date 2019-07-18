var firebaseConfig = {
    apiKey: "AIzaSyD-pOFD-MiCR02ZYH5KkQ1lX40aKxqbEMI",
    authDomain: "fir-e100e.firebaseapp.com",
    databaseURL: "https://fir-e100e.firebaseio.com",
    projectId: "fir-e100e",
    storageBucket: "",
    messagingSenderId: "375253212841",
    appId: "1:375253212841:web:4cdd5c00524672b6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
var messagesRef = firebase.database().ref('myDatabase');


function submitForm(e){
e.preventDefault();
var firstname = document.getElementById('fname').value;
var lastname = document.getElementById('lname').value;
var email = document.getElementById('email').value;
var adress = document.getElementById('adress').value;
var phone = document.getElementById('phone').value; 


saveMessage(firstname,lastname,email,adress,phone);

}

document.getElementById('contactForm').addEventListener('submit',submitForm);

function saveMessage(firstname,lastname,email,adress,phone){
    var newMessagesRef = messagesRef.push();
    newMessagesRef.set({
        firstname: firstname,
        lastname: lastname,
        email: email,
        adress: adress,
        phone: phone
    });
    }

function verif(){

    var a = document.getElementById('fname').value ;
    if( a== '')
    alert("Please Fill the Name Form");
    

    var b = document.getElementById('lname').value ;
    if( b== '')
    alert("Please Fill the Family Name Form");
  

    
    var c = document.getElementById('email').value ;
    if( c== '')
    alert("Please Fill the Email Form");


    var d = document.getElementById('adress').value ;
    if( d== '')
    alert("Please Fill the Adress Form");



    var e = document.getElementById('phone').value ;
    if( e== '')
    alert("Please Fill the phone Form");

    if( (a !='') && (b !='') && (c !='') && (d !='') && (e !='') )
    alert("Jawek Behii") 
}