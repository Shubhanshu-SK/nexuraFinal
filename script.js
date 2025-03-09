document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll('.btnn');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.btn');
        const answerDiv = item.querySelector('.card');

        questionButton.addEventListener('click', () => {
            const isVisible = answerDiv.style.display === 'block';
            answerDiv.style.display = isVisible ? 'none' : 'block';

        })
    })

})
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const hamli=document.querySelector(".hamli");
const hamlj=document.querySelector(".hamlj");
const hamlk=document.querySelector(".hamlk");
const hamll=document.querySelector(".hamll");
const hamlm=document.querySelector(".hamlm");
const hamln=document.querySelector(".hamln");
const hamlo=document.querySelector(".hamlo");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  hamli.classList.toggle("active");
  hamlj.classList.toggle("active");
  hamlk.classList.toggle("active");
  hamll.classList.toggle("active");
  hamlm.classList.toggle("active");
  hamln.classList.toggle("active");
  hamlo.classList.toggle("active");
});

