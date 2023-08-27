function addColorClass(event) {
  const skill = event.currentTarget;
  const icon = skill.querySelector('i');
  const skillName = skill.querySelector('.skill-name');

  if (skill.classList.contains('color-html')) {
    icon.style.color = '#E44D26'; 
  } else if (skill.classList.contains('color-css')) {
    icon.style.color = '#2965f1'; 
  } else if (skill.classList.contains('color-js')) {
    icon.style.color = '#F0DB4F'; 
  } else if (skill.classList.contains('color-node')) {
    icon.style.color = '#689f63'; 
  } else if (skill.classList.contains('color-php')) {
    icon.style.color = '#777bb4';
  } else if (skill.classList.contains('color-mysql')) {
    icon.style.color = '#4479A1';
  } else if (skill.classList.contains('color-azure')) {
    icon.style.color = '#0089D6'; 
  } else if (skill.classList.contains('color-figma')) {
    icon.style.color = '#F24E1E'; 
  } else if (skill.classList.contains('color-git')) {
    icon.style.color = '#F05032'; 
  }
  
  skillName.style.color = '#1d1d1d'; 
}

function removeColorClass(event) {
  const skill = event.currentTarget;
  const icon = skill.querySelector('i');
  const skillName = skill.querySelector('.skill-name');

  icon.style.color = '#000'; 
  skillName.style.color = '#555'; 
}

const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
  skill.addEventListener('mouseenter', addColorClass);
  skill.addEventListener('mouseleave', removeColorClass);
});

function toggleMenu() {
  var menuOverlay = document.querySelector('.menu-overlay');
  menuOverlay.style.display = menuOverlay.style.display === 'block' ? 'none' : 'block';
}

var menuIcon = document.querySelector('.fa-bars');
menuIcon.addEventListener('click', toggleMenu);

var navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
  link.addEventListener('click', toggleMenu);
});

