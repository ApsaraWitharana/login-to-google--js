// import "./style.css"
// import "./appwrite"
// import { account } from "./appwrite"

// const loginBtn = document.getElementById('login-btn')
// const logoutBtn = document.getElementById("logout-btn")
// const profileScreen = document.getElementById("profile-screen")
// const loginScreen = document.getElementById("login-screen")

// async function handleLogin(){

//     account.create0Auth2Session(
//          'google',
//         'http://',
//         'http://'
//     )
       
    
// }

// async function getUser(){

//     try{
//         const user = await account.get()
//         renderProfileScreen(user)
//     }catch(error){
//         renderLoginScreen()
//     }
// }

// function renderLoginScreen(){
//     loginScreen.classList.remove("hidden")
// }

// async function renderProfileScreen(user){
//     document.getElementById("user-name").textContent=user.name
//     profileScreen.classList.remove("hidden")
// }

// async function handleLogout(){
//     account.deleteSession("current")
//     profileScreen.classList.add("hidden")
//     renderLoginScreen()
// }

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $("#name").text(profile.getName());
  $("#email").text(profile.getEmail());
  $("#image").alert("src",profile.getimageUrl());
  $(".data").css("display","block");
  $(".g-signin2").css("display","none");

}

 function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert("You have been signed out successfully!!");
        $(".g-signin2").css("display","block");
        $(".data").css("display","none");
    });
  }