
// // // for (let index = 0; index < liElement.length; index++) {
// // //    console.log(liElement[index].textContent) 
// // // }


// // //declaração de arrays

// // let nr1 = [1,2,3,4,5]
// // let nr2 = [6,7,8,9,10]
// // let nr3 = [nr1,nr2]

// // console.log(`Arrays-1: ${nr1}`)
// // console.log(`array-2: ${nr2}`)

// // console.log(`array-3:${nr3}`)

// // // nr3.forEach((itemDoaArray) =>{
// // //     console.log(`Array-3 sendo listado ${itemDoaArray}`)
// // // })

// // nr3.map((numero, key)=>{

// //     console.log(`${(key+1)} Itens do array- ${numero}`)
// // })


// // //convertendo Html em array
// // const liElementHTML = document.getElementsByTagName("li")
// // const liElementArray = [...liElementHTML]



// // liElementArray.map((item, key)=>{
// //     if (item.textContent == "item-39"){
// //         console.log(`${key+1} - ${item.textContent = "LOCALIZADO"}`)
// //     }
// // })

// // function soma(a,b){
// //     console.log(`O resultado será ${a + b}`)

// // }
// // soma(23, 43)


// function soma(p1,p2,p3) {
//     nr1 = p1;
//     nr2 = p2;
//     resultado = parseInt(nr1) + parseInt(nr2) + parseInt(p3)
//     console.log(`O Resultado é : ${resultado}.`)
//     return (resultado)
//     // console.log(`Resultado : ${parseInt(nr1) + parseInt(nr2) + parseInt(parametro)}`);
//     // console.log(`Este é o parâmetro que foi passado : ${parametro}`);
// }

// //ARROW FUNCTION
// const mudaCor = ()=>{
    
//     //FUNÇÃO SET-TIME-OUT
//     setTimeout(soma, 5000, 100,100,100);
// }

// mudaCor()


function mudaCor(){

    let r = ""
    let g = ""
    let b = ""

    //math - random= que gera números aleatórios entre 0 e 1 
    //ceil, floor e round que arredondam o número para cima, para baixo ou aleatóriamente  
    
    //determinando para a variavel R um valor entre 0 e 255
    r = Math.round(Math.random() * 255) 
    g = Math.round(Math.random() * 255) 
    b = Math.round(Math.random() * 255) 
    
    const cabecalho = document.querySelector(".cabecalho")
    cabecalho.setAttribute("style", `background-color:rgb( ${r}, ${g}, ${b})`)

    tmp = setTimeout(mudaCor,1000)
}

function mudaBanner(){

    let nr= Math.round(Math.random() * 3)
    let caminho = `./img/banner-lateral-${nr}.png` 
    
    const img1 = document.querySelector(".l-e > img")
    img1.src = caminho
}
mudaBanner()