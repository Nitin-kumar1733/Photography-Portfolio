function validation(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    
    if(name.length<3){
        document.getElementById('name').innerHTML = "Please enter the valid name";
        return false;
    }
    if(phone.length != 10){
        document.getElementById('mobile').innerHTML = "Please enter the valid Mobile number";
        return false;
    }
    if(email.length>20){
        document.getElementById('email').innerHTML = "Please enter the valid eamil";
        return false;
    }
    
}




function gotowhatsapp() {
    
    var name = document.getElementById("name").value;
    var phone = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var url = "https://wa.me/7599663501?text=" 
    + "Name: " + name + "%0a"
    + "Phone: " + phone + "%0a"
    + "Email: " + email  + "%0a"
    + "Subject: " + subject  + "%0a"
    + "Message: " + message;

    window.open(url, '_blank').focus();
}








const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});

/* Lightbox */
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });