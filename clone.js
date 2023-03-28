// Select the elements we'll be working with
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('header');
const hamcollapse = document.querySelector('.hamcollapse');

// Add an event listener to the hamburger button
hamburger.addEventListener('click', function() {
  // When the hamburger is clicked, toggle the "active" class on both the headerbar and menu
  header.classList.toggle('active');
  hamcollapse.classList.toggle('active');
  
  // If the headerbar is currently active, set its height to 30vh; otherwise, set it back to its default height
  if (header.classList.contains('active')) {
    header.style.height = '30vh';
  } else {
    header.style.height = '';
  }
});
