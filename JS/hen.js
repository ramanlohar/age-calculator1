const headinput_name = document.querySelector(".headinput_name");
const headinput_name1 = localStorage.setItem("headinput_name",headinput_name);

headinput_name = headinput_name1;

if(headinput_name.innerHTML = "12345"){
    window.location.href = "https://github.com/ramanlohar/age-calculator1"
}