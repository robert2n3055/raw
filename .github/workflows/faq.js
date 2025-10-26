const questions = document.querySelectorAll('.faq-question');
function toggleMenu() {
  const menu = document.getElementById('menu');
  const hamburger = document.querySelector('.hamburger');
  menu.classList.toggle('active');
  hamburger.classList.toggle('active');
}



questions.forEach(q => {
  q.addEventListener('click', () => {
    const answer = q.nextElementSibling;
    answer.classList.toggle('open');
    q.classList.toggle('open'); // lägger till klass för att rotera pilen
  });
});
