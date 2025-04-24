// ---------------------------------- Tool tip 
var tooltips = document.querySelectorAll('.tool_tip span');

window.onmousemove = function (e) {
    var x = (e.clientX + 0) + 'px',
        y = (e.clientY + 48) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
};


// ---------------------------------- Modal open and close
document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("modalBackground");
    var openBtn = document.getElementById("openModal");
    var closeBtn = document.querySelector(".close");

    // Open Modal
    openBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    // Close Modal
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close Modal on Outside Click
    window.addEventListener("click", function (event) {
        if (event.target === modalBackground) {
            modal.style.display = "none";
        }
    });
});
