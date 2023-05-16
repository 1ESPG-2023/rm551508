
//GERANDO DOIS OBJETOS NO LOCALSTORAGE
const usuario1 = {
    nomeUsuario:"predo",
    senhaUsuario:"12345"
}

const usuario2 = {
    nomeUsuario:"anzina",
    senhaUsuario:"12345"
}

let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

localStorage.setItem("listaUser",  JSON.stringify(listaDeUsuarios));



//VAMOS CRIAR UM OBJETO PARA ARMAZENAR O NOSSO USUÁRIO
// const usuario = {
//     nomeUsuario:"",
//     senhaUsuario:""
// }



addEventListener("click",(evento)=>{

    evento.preventDefault();

    if(evento.target.id == "btnSubmit"){
        // let usuario = document.querySelector("#idUser").value;
        // let senha = document.querySelector("#idPass").value;
       
        // RECUPERANDO DOS IMPUTS
        let inputUserValue = document.querySelector("#idUser").value;
        let inputPassValue = document.querySelector("#idPass").value;
        
        const h1Titulo = document.querySelector("#titulo");


        let lista = JSON.parse(localStorage.getItem("listaUser"));



        let UserValidado = {}


        try{
            lista.forEach((usuario)=> {
                //VALIDAÇÃO
                if(inputUserValue == usuario.nomeUsuario && inputPassValue == usuario.senhaUsuario){
                    UserValidado =usuario
                throw "VALIDADO";
                } 
            });

            throw "NÃO VALIDADO";

        }catch(msg){
            if(msg == "VALIDADO"){
                h1Titulo.innerHTML = "<span><strong>Login validado com sucesso</strong></span>";
                h1Titulo.setAttribute("style","color:#00ff00")

                //adicionando um token ao userValidado 
                UserValidado["token"] =  Math.random().toString(16) + Math.random().toString(16);



                localStorage.setItem("UserValidado",  JSON.stringify(UserValidado));
                window.location.href = "../sucesso.html"
            }else{
                h1Titulo.innerHTML = "<span><strong>Login ou senha inválidos</strong></span>";
                h1Titulo.setAttribute("style","color:#ff0000")
                window.location.href = "../erro.html"
            }
        }       
    }
});


try{
    const userBemvindo = document.querySelector("#userWelcome");
    let usuario = JSON.parse(localStorage.getItem("UserValidado"))
    if(usuario.token != ""){
        userBemvindo.innerHTML = usuario.nomeUsuario
    }else{
        window.location.href = "../erro.html"
    }

    const  botaoLogout = document.querySelector("#btnLogout");
    addEventListener("click", ()=>{
        localStorage.removeItem("userValidado");
        window.location.href = "../login.html"
    })


}catch(erro){
    if(userBemvindo != null){
    userBemvindo.innerHTML = JSON.parse(localStorage.getItem("UserValidado")).nomeUsuario

    }
}