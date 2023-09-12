// Javascript for toggle menu
let navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
  navLinks.style.display="block"
}
function hideMenu() {
  navLinks.style.right = "-200px";
  navLinks.style.display="none"
}
// Javascript for toggle menu end

// Javascript for contact us form
function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : document.getElementById('nameid').value,
    Password : "password",
    To : 'yogeshverma1296@gmail.com',
    From : document.getElementById('emailid').value,
    Subject : document.getElementById('subjectid').value,
    Body : document.getElementById('message').value
}).then(
  message => alert(message)
);
}