


class Devas{

    // CONSTRUCTOR é um método especial para criar e inicializar um objeto criado a partir de uma classe.

    constructor(){
        this.id = 1;
        this.arrayDevas = [];
        this.editId = null;
       

    }
    //Quando clicar no botão salvar vai chamar o método Salvar e método ler dados.
    salvar(){

      let devas = this.lerDados();


      if(this.validaCampos(devas)){

        if(this.editId==null){

            this.adicionar(devas); 

        }else{
            this.atualizar(this.editId, devas)
        }


      }
      
      this.listaTabela();     
      this.cancelar();
      //depois de listar a tabela ele limpa o formulario;
       
    }
    //os dados so chegarão ao método adicionar depois das validações
    adicionar(devas){

        this.arrayDevas.push(devas);
        this.id++;

    }

    //Depois de validar e guardar os dados vou listar na tabela
    listaTabela(){
        let tbody = document.getElementById('tbody')
       
        tbody.innerHTML = '';
         //acessa o tbody e acessa primeiramente vazio para nao add valores duplicados
        for(let i = 0; i<this.arrayDevas.length; i++){
            let tr = tbody.insertRow();
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_skill = tr.insertCell();
            let td_dispon = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayDevas[i].id;
            td_nome.innerText = this.arrayDevas[i].nome;
            td_skill.innerText = this.arrayDevas[i].skill;
            td_dispon.innerText = this.arrayDevas[i].dispon;
            

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/edit.png';

            //JSON passa array convertido em string para edição

            td_id.classList.add('center');

            imgEdit.setAttribute("onclick", "devas.preEdicao("+JSON.stringify(this.arrayDevas[i])+")");

            td_acoes.appendChild(imgEdit);

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.png';

            //abaixo função para deletar no botão
            imgDelete.setAttribute("onclick", "devas.deletar("+this.arrayDevas[i].id+")");


            td_acoes.appendChild(imgDelete);


        }


    } 


    preEdicao(dados){
        this.editId = dados.id;

        document.getElementById('nome').value = dados.nome;
        document.getElementById('skill').value = dados.skill;
        document.getElementById('dispon').text = dados.dispon;


        document.getElementById('btEdit').innerText = 'Atualizar'


    }

    atualizar (id, devas){
        for (let i=0; i<this.arrayDevas.length; i++ ){
            if(this.arrayDevas[i].id==id) {
                this.arrayDevas[i].nome = devas.nome;
                this.arrayDevas[i].skill = devas.skill;
                this.arrayDevas[i].dispon = devas.dispon;


            }
        }


    }



    //Em ler dados criei var devas que recebera os dados la do formulario.

    lerDados(){
        let devas = {}
        devas.id = this.id;
        devas.nome = document.getElementById('nome').value;
        devas.skill = document.getElementById('skill').value;
        
        devas.dispon = document.getElementById('dispon').value;

        return devas;

       
   
    }

    selectText(){
       

    }


    //valiodaCampos recebe os dados da funcao salvar e depois vai fazer as validações
    validaCampos(devas){

        let msg = '';
        if(devas.nome==''){
            msg+='-Informe o nome da Deva!'           
        }

        if(devas.skill==''){
            msg+='-Informe a Skill da Deva!'           
        }

        if(devas.dispon==''){
            msg+='-Informe a disponiblidade da Deva!'           
        }
        if(msg != ''){
            alert(msg);
            return false
        }

        return true;

    }



    cancelar(){

        document.getElementById('nome').value = '';
        document.getElementById('skill').value ='';
        document.getElementById('dispon').value ='';

        document.getElementById('btEdit').innerText = 'Salvar';
        this.editId = null;

    }
    
    deletar(id){

        if(confirm('Deseja realmente deletar o cadastro?'+id)){



            //coloco o tbody dentro da função para deletar a linha;
        let tbody = document.getElementById('tbody')

        for(let i = 0; i<this.arrayDevas.length; i++){
            if (this.arrayDevas[i].id == id){

                //No metodo splices tem que passar dois argumentos: indice e quantos registros quer deletar
                this.arrayDevas.splice(i,1)
                tbody.deleteRow(i)
               
            }         

        }

    
        }


    }
 

}

var devas = new Devas();




