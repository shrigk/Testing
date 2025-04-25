// ---------------------------------- Tool tip 
var tooltips = document.querySelectorAll('.tool_tip span');

window.onmousemove = function (e) {
    var x = (e.clientX + 0) + 'px',
        y = (e.clientY + 24) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
};

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const layout = document.getElementById('layout');
    sidebar.classList.toggle('collapsed');
    layout.classList.toggle('collapsed');
  }