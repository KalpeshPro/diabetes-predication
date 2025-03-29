document.getElementById("openApp").addEventListener("click", function () {
    window.open("https://your-app.streamlit.app", "_blank");
});
window.onload = function () {
    // Keep preloader visible for 3 seconds
    setTimeout(() => {
        document.querySelector(".preloader").classList.add("preloader-hidden");
    }, 3000); // 3000ms = 3 seconds
};
