const render =()=>{

    const formularioA= document.querySelector("#formularioA");
    const formularioB= document.querySelector("#formularioB");
    const chat= document.querySelector("#chat");

    formularioA.addEventListener("submit", (e)=>{
        e.preventDefault(); //no hace el redireccionamiento
        e.target.usu1.value;
        const burbujaAzul=document.createElement("p");
        burbujaAzul.classList.add("texto")
        chat.appendChild(burbujaAzul);
        burbujaAzul.innerHTML=e.target.usu1.value;;
    });

    formularioB.addEventListener("submit", (e)=>{
        e.preventDefault(); //no hace el redireccionamiento
        e.target.usu2.value;
        const burbujaRoja=document.createElement("p");
        burbujaRoja.classList.add("texto2");
        chat.appendChild(burbujaRoja);
        burbujaRoja.innerHTML=e.target.usu2.value;;
    });

}
document.addEventListener("DOMContentLoaded", render);