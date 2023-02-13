const input_busca = document.getElementById('input-busca');
const tabela_principal = document.getElementById('tbody');

input_busca.addEventListener('keyup', ()=>{
    let expressao = input_busca.value.toLowerCase();
    let linhas = tabela_principal.getElementsByTagName('tr');
     

    for (let pos in linhas){
        if (true===isNaN(pos)){
            continue;
        }

        let conteudo = linhas[pos].innerHTML.toLowerCase();
        if (true === conteudo.includes(expressao)){
            linhas[pos].style.display = '';
        }else{
            linhas[pos].style.display = 'none';
        }
    }

});