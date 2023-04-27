const menuItems = document.querySelectorAll('.menu-items a');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    document.getElementById('toggle').checked = false;
  });
});
