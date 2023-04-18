
// // for (let index = 0; index < liElement.length; index++) {
// //    console.log(liElement[index].textContent) 
// // }


// //declaração de arrays

// let nr1 = [1,2,3,4,5]
// let nr2 = [6,7,8,9,10]
// let nr3 = [nr1,nr2]

// console.log(`Arrays-1: ${nr1}`)
// console.log(`array-2: ${nr2}`)

// console.log(`array-3:${nr3}`)

// // nr3.forEach((itemDoaArray) =>{
// //     console.log(`Array-3 sendo listado ${itemDoaArray}`)
// // })

// nr3.map((numero, key)=>{

//     console.log(`${(key+1)} Itens do array- ${numero}`)
// })


// //convertendo Html em array
// const liElementHTML = document.getElementsByTagName("li")
// const liElementArray = [...liElementHTML]



// liElementArray.map((item, key)=>{
//     if (item.textContent == "item-39"){
//         console.log(`${key+1} - ${item.textContent = "LOCALIZADO"}`)
//     }
// })

// function soma(a,b){
//     console.log(`O resultado será ${a + b}`)

// }
// soma(23, 43)


//arrow function
const mudaCor = () =>{
    //função settimeout
    setTimeout(alert("executou"),1000)
}
muda()
    
