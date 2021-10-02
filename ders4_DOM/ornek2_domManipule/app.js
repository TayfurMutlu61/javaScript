//ara butonuna tıklandığında çalan telefon çıksın,zil çalsın
let resim =document.querySelector(".resim"); //resim e ulaştım
let ring =document.querySelector(".ses"); //audio ya ulaştım 
//ara butonuna ulaştım
document.querySelector(".on").onclick=function(){ 
resim.src="./img/img.gif";//resim değiştirdim
ring.play(); //sesi çalıştırdım play yaptım

}

//baglat butonuna basinca gif gelsin ses kesilsin

document.querySelector(".off").onclick=function(){
    resim.src="./img/telbagla.gif";
    ring.pause(); //
}
//konus butonuna basinca yeni gif gelsin

document.querySelector(".speak").onclick=function(){
    resim.src="./img/telfirlat.gif";
    
}

//ekle butonuna basildiginda yeni bir li eklentisi
const liste= document.querySelector(".liste");
document.querySelector(".ekle").onclick=function(){
    
    const giris= document.querySelector(".dil");

    liste.innerHTML=liste.innerHTML+`<li>${giris.value}</li>`;
    giris.value="";
}
//sil butonuna tiklandiginda li elemani silinsin 
document.querySelector(".Sil").onclick=function(){
    liste.removeChild(liste.lastElementChild);
}

const parag=document.querySelector(".forH1");
parag.innerHTML=`<h1>${"Proglamlama Diller"}</h1>`;

//klavyeden bir tusa basildiginda buyusun kuculsun
document.querySelector(".textbox").onkeyup=function(){
    const checkbox=document.querySelector(".checkbox");
    const textbox=document.querySelector(".textbox");
    if (checkbox.checked) {
        textbox.value=textbox.value.toUpperCase();
    }else{
        textbox.value=textbox.value.toLowerCase();
    }

}

//mause resmin ustune geldiginde aslan kukresin

resim.onmouseover=function(){
    resim.src="./img/aslan2.jpeg"
}
//2.ama gicik yol
// resim.addEventListener("mouseout",function(){
//     resim.src="./img/aslan2.jpeg"
// })









//mause resmin ustunden ayrildiginda
resim.onmouseout=function(){
    resim.src="./img/aslan1.jpeg"
}

//enter=13,delete=46

//onkeydown= klavyedeki tuşa basıp elinizi çektiğinizde

document.querySelector(".dil").onkeydown=function(klavye) {

    if( klavye.keyCode==13    ) { // enter ı çağırdık
    
       document.querySelector(".ekle").onclick();
    
    }if (klavye.keyCode==46) //delete yi çağırdık 
    {
    document.querySelector(".Sil").onclick();
    
    }
    };
