//================================================================ =====
//                   GETELEMENTID

const paragraf = document.getElementById("para").style;
paragraf.backgroundColor = "black";
paragraf.color = "white";
paragraf.fontSize = "20px";


const buton=document.getElementById("btn");

buton.style.width="100px";
buton.style.color="red";
buton.style.fontSize="18px";

buton.textContent="ARA";
//textContent= tag lerin icerigindeki yaziyi degistirmek istersek kullaniriz

//********GETELEMENTBYTAGNAME */
//bu kullanim tercih edilmiyor 

const resim= document.getElementsByTagName("img");

resim[0].style.width="300px";
resim[0].style.height="300px";
resim[1].style.border="3px solid red";

//*****GETELEMENTSBYCLASSNAME */

const baslik=document.getElementsByClassName("h1");

baslik[0].style.textAlign="center";


//*****************QUERYSELECTOR */
//! en cok kullanilan cagirma yolu

document.querySelector(".arama").textContent="DOM DELECTOR KAVRAMI ☠️";

document.querySelector("#govde").style.backgroundImage="linear-gradient(green,blue,pink)"



//*************EVENT******* */
//(onmouseover,onmouseout,=fare ustune gelince ayrilinca )
const h= document.querySelector(".h1");
h.onmouseover=function(){
    h.style.color="red";
    h.style.backgroundColor="white";
}
h.onmouseout=function(){
    h.style.backgroundColor="blue"
    h.style.color="green";
}

//1.resme tikladiginda img ler yer degistirsin

document.querySelector(".bir").onclick=function(){
    document.querySelector(".bir").src="./img/logo2.png";
    document.querySelector(".iki").src="./img/js_logo.png";
}