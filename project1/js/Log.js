let nome = [];
let senha = [];



function login(){
  
    let names = document.getElementById('nome').value.trim()
    let pass = document.getElementById('senha').value.trim()
    //trim()valida espaços em branco

    console.log(names, pass)

    if (names === "" || pass=== ""){

       alert('Preencha os campos corretamente!')      
    }
    if (names!= 'Patricia' || pass!= 'lala'){

        alert('Senha e usuario incorretos!')

       }else{
       
        location.href = "home.html"

    }

    
}

