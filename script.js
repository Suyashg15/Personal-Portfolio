const header = document.querySelector("header")

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 120);
});

let menu = document.querySelector("#menu-icon");
let navlist  = document.querySelector(".navlist");

menu.onclick = () =>{
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("active");
}
window.onscroll = () =>{
    menu.classList.remove("bx-x");
    navlist.classList.remove("active");
}

// function SendMail(){
//     var params = {
//         from_name:document.getElementById("fullname").value,
//         email_id:document.getElementById("email_id").value,
//         message:document.getElementById("message").value
//     }
//     emailjs.send("service_gdbcp9s","template_ak3x06h",params).then(function(res){
//         alert("Message Sent Successfully! "+ res.status);
//     })
// }
