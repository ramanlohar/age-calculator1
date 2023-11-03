const headinput_name = document.querySelector(".headinput_name");

// Set the initial value from local storage
headinput_name.value = localStorage.getItem("Header_input_name");

window.onload = function () {
    // location.reload();
    headinput_name.value = localStorage.getItem("Header_input_name");
};

headinput_name.addEventListener("input", () => {
    // Convert the input value to lowercase for case-insensitive comparison
    const inputValue = headinput_name.value.toLowerCase();
    if (inputValue.charAt(0) === "#") {
        if (inputValue === "#google@1234#") {
            window.location.href = "https://www.google.com/";
        } else if (inputValue === "#yt@1234#") {
            setTimeout(() => {
                window.location.href = "https://www.youtube.com/";
            }, 100);
        }
    }
});

headinput_name.addEventListener("change", () => {
    // Convert the input value to lowercase for case-insensitive comparison
    const inputValue = headinput_name.value.toLowerCase();
    
    if (inputValue.charAt(0) === "#") {
        if (inputValue === "#google@1234#") {
            window.location.href = "https://www.google.com/";
        } else if (inputValue === "#yt@1234#") {
            setTimeout(() => {
                window.location.href = "https://www.youtube.com/";
            }, 100);
        }
    } else {
        // Save the input value to local storage
        localStorage.setItem("Header_input_name", inputValue);

        // if (inputValue === "") {
        //     // If the input is empty, remove the value from local storage
        //     localStorage.removeItem("Header_input_name");
        // }
    }
});

// Get the initial value from local storage
const head_name = localStorage.getItem("Header_input_name");