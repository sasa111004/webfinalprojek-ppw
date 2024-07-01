// Initialize ScrollReveal
ScrollReveal().reveal('.navbar', {
    duration: 1000,
    origin: 'top',
    distance: '50px'
  });
  ScrollReveal().reveal('.jumbotron', {
    duration: 1500,
    origin: 'bottom',
    distance: '50px'
  });
  ScrollReveal().reveal('#about h2, #programs h2, #events h2, #contact h2', {
    duration: 1000,
    origin: 'left',
    distance: '50px',
    interval: 200
  });
  ScrollReveal().reveal('#about p, #contact form', {
    duration: 1000,
    origin: 'right',
    distance: '50px',
    interval: 200
  });
  ScrollReveal().reveal('#programs .card', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    interval: 200
  });
  ScrollReveal().reveal('#events .list-group-item', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    interval: 200
  });
  