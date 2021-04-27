/*
    - quando eu clicar, deve pegar a classe wrapper e tirar o invisible
    - quando teclar esc, deverá colocar a classe invisible novamente
    - evento de click
    - pegar o botão pelo id
*/

const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function() {
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'

    if(isEscKey) {
        modalWrapper.classList.add('invisible')
    }
})