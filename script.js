var lista = document.querySelector('ul');
var raca = document.querySelector('#raca');
var botao = document.querySelector('#btn');

botao.addEventListener('click', addRaca);

function addRaca() {
    var item = '<li>' + raca.value;
    lista.innerHTML += item;
    raca.value = '';
    raca.focus();

}

raca.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        addRaca()
    }

})