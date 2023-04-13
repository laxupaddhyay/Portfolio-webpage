// Change header background color on mouseover
const header = document.querySelector('header');
header.addEventListener('mouseover', () => {
  header.style.backgroundColor = '#ffeb3b';
});

// Show message on project click
const projects = document.querySelectorAll('.project');
projects.forEach((project) => {
  const title = project.querySelector('h3');
  title.addEventListener('click', () => {
    alert(`You clicked on ${title.textContent}`);
  });
});
