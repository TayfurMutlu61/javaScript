/*=======================================================
FONKSIYONLAR
*/

//! 1.YONTEM:Fonction Declaration
// declaration yontemi  ile fonksiyonun tanimlanmasi ve cagirilmasinin siriasi onemli degil once yada sonra olabilir

//fonksiyonun tanimlanmasi 

function yazdirAd() {
    console.log("Hakan");
    
}
//fonksiyonun cagirilmasi
yazdirAd();//hakan 

//klavyeden girilen sayinin tek mi cift mi oldugunu gosteren bir fonksiyon yaziniz

const sayiniz = prompt("sayi giriniz");


console.log(tekCift(sayiniz));



function tekCift(sayimiz) {
return sayimiz%2==0?`${sayimiz}cifttir`:`${sayimiz}tektir`
}



//! 2.YONTEM: function expression(by yontem daha yaygin)
//ornek1
const tekCift1 = function (sayi) {
  return  sayi%2==0?"cift":"tek";
}
 console.log(tekCift1(4));

 //ornek2 en buyuk sayiyi bulma

 let buyukBul= function (x,y,z){

    let enBuyuk;
    if (x>y && x>z) {
        enBuyuk=x;

        
    }else if (y>z && y>x){
        enBuyuk=y;
    }else{
        enBuyuk=z;
    }return enBuyuk;



 }
 console.log(buyukBul(5,8,9));


 //! 3.YONTEM : function arrow(ok)

 const ciftMi = (sayii)=>(sayii%2==0 ?"cift":"tek");
console.log("sayi "+ciftMi(7));

//ornek

const taban=prompt("taban gir");
const us=prompt("us gir");

const ustAl=(t,u)=>t**u;

console.log(ustAl(taban,us));