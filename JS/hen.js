const headinput_name = document.querySelector(".headinput_name");

headinput_name.value = localStorage.getItem("Header_input_name");

headinput_name.addEventListener("input", () => {
    if (headinput_name.value === "#yt1234") {
        setTimeout(() => {
            window.location.href = "https://www.youtube.com/";
        }, 100);
    }
    else{        
        localStorage.setItem("Header_input_name", headinput_name.value);
    }
});