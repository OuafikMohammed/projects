// To access to element we use query selector wich selects the id's of the elemts and we must declare them as const or let
const usernameEL = document.querySelector("#username");
const emailEL = document.querySelector("#email");
const passwordEL = document.querySelector('#password');
const confirmPasswordEL = document.querySelector('#confirm-password');

const form = document.querySelector('#sign-up');

form.addEventListener('click' , function(e){
    e.preventDefault();
    
})