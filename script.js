function fazerPedido() {
    
    let nome = document.querySelector('#nome').value;
    if (nome.trim() === '') {
        alert('Por favor, preencha o nome antes de fazer o pedido.');
        return;
    }

    
    let tamanhoSelecionado = document.querySelector("input[name='tamanho']:checked");
    if (!tamanhoSelecionado) {
        alert('Por favor, selecione o tamanho da pizza.');
        return;
    }
    console.log('Tamanho:', tamanhoSelecionado.value);

    
    let adicionaisSelecionados = document.querySelectorAll("input[name='adicionais']:checked");
    console.log('Quantidade de adicionais:', adicionaisSelecionados.length);

    
    let valorPizza;
    switch (tamanhoSelecionado.value) {
        case 'pequena':
            valorPizza = 25;
            break;
        case 'media':
            valorPizza = 35;
            break;
        case 'grande':
            valorPizza = 50;
            break;
        default:
            valorPizza = 0;
    }

    
    let valorAdicionais = adicionaisSelecionados.length * 5;

   
    let valorTotal = valorPizza + valorAdicionais;

    
    let valorTotalElemento = document.querySelector("#total h2 strong");
    valorTotalElemento.textContent = valorTotal.toFixed(2);

    console.log('Valor total: R$ ' + valorTotalElemento.textContent);
}
    