function cadAnimal(nome, raca, sexo) {

    var tb = document.getElementById('cadastro_animais');
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);

    var cellCodigo = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellRaca = linha.insertCell(2);
    var cellSexo = linha.insertCell(3);

    cellCodigo.innerHTML = qtdLinhas;
    cellNome.innerHTML = nome;
    cellRaca.innerHTML = raca;
    cellSexo.innerHTML = sexo;

}