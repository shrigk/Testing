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

// // Chips functionality
// const dummyTags = ["Java", "Spring", "Hibernate", "Java Beans", "SQL", "Python"];

// const chipsContainer = document.getElementById('chipsContainer');
// const chipInput = document.getElementById('chipInput');

// let selectedChips = [];

// function renderChips() {
//   chipsContainer.innerHTML = '';

//   let displayChips = selectedChips.slice(0, 4);
//   let extraCount = selectedChips.length - 4;

//   displayChips.forEach((chip, index) => {
//     const chipEl = document.createElement('div');
//     chipEl.className = 'chip';
//     chipEl.innerHTML = `${chip} <span class="close-btn" onclick="removeChip(${index})">&times;</span>`;
//     chipsContainer.appendChild(chipEl);
//   });

//   if (extraCount > 0) {
//     const badge = document.createElement('div');
//     badge.className = 'badge';
//     badge.innerText = `${extraCount}+`;
//     chipsContainer.appendChild(badge);
//   }
// }

// function removeChip(index) {
//   selectedChips.splice(index, 1);
//   renderChips();
// }

// chipInput.addEventListener('keydown', function (e) {
//   if (e.key === 'Enter' && chipInput.value.trim() !== '') {
//     e.preventDefault();
//     if (!selectedChips.includes(chipInput.value.trim())) {
//       selectedChips.push(chipInput.value.trim());
//     }
//     chipInput.value = '';
//     renderChips();
//   }
// });

// setTimeout(() => {
//   selectedChips = dummyTags.slice(0, 5);
//   renderChips();
// }, 300);

// function updateLabelState() {
//     const chipContainer = document.querySelector('.chip-container');
//     const chips = document.querySelectorAll('.chip');
    
//     if (chips.length > 0) {
//       chipContainer.classList.add('has-value');
//     } else {
//       chipContainer.classList.remove('has-value');
//     }
//   }
  
//   // Call this function whenever you add/remove chips
//   updateLabelState();
  