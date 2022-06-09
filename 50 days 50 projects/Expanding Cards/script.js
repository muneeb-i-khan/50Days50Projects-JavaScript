const cards = document.querySelectorAll('.card');

function RemoveActiveClass() {
    cards.forEach(card => card.classList.remove('active'));
}

cards.forEach((card) =>
    card.addEventListener('click',
        function () {
            RemoveActiveClass();
            card.classList.add('active');
        }));
