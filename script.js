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