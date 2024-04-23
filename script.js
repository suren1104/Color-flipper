const color=document.getElementById("color")
const box=document.getElementById("box")
const btn=document.getElementById("btn")

const val=[0,1,2,3,4,5,6,7,8,9,"A","b","c","d","e","f"]

btn.addEventListener("click",change)

function change(){
    let hexvalue="#"
    for(let i=1;i<=6;i++){
        hexvalue=hexvalue + randomval()
    }
    console.log(hexvalue)

    box.style.backgroundColor=hexvalue

    color.innerHTML=hexvalue
    color.style.color=hexvalue
}

function randomval(){
    let randomval=Math.floor(Math.random()*16)
    return val[randomval]

}
console.log(randomval())