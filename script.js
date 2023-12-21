document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.querySelector(".sidebar");

    menuIcon.onclick = function() {
        sidebar.classList.toggle("small-sidebar");
    };
});
