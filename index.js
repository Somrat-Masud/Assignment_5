 let total = 0;
 function cardHomeCookerNameShow(target){
    const HomeCooker = document.getElementById('Home-Cooker');
const show = (target.childNodes[5].innerText);
const li = document.createElement("li");
li.innerText = show;
 document.getElementById('Home-Cooker').innerText;
 HomeCooker.appendChild(li);

 const check = (target.childNodes[7].innerText.split(" ")[0]);
 total = parseInt(total) + parseInt(check);
 document.getElementById('total-price').innerText = total;
 }

function cardSportsCatesNameShow (target){
    const SportsCatesK = document.getElementById('Sports-catesK');
    const shows = (target.childNodes[5].innerText);
    const newli = document.createElement("li");
    newli.innerText = shows;
     document.getElementById('Sports-catesK').innerText;
     SportsCatesK.appendChild(newli);
 const check = (target.childNodes[7].innerText.split(" ")[0]);
 total = parseInt(total) + parseInt(check);
 document.getElementById('total-price').innerText = total;
}
function cardChickenCookerNameShow (target){
    const ChickenCooker = document.getElementById('Chicken-Cooker');
    const CookerShows = (target.childNodes[5].innerText);
    const newli = document.createElement("li");
    newli.innerText = CookerShows;
     document.getElementById('Chicken-Cooker').innerText;
     ChickenCooker.appendChild(newli);
 const check = (target.childNodes[7].innerText.split(" ")[0]);
 total = parseInt(total) + parseInt(check);
 document.getElementById('total-price').innerText = total;

 

}

// discount 
const  totalPrice= document.getElementById('total-Discount');
const  discountAmount = ((total * 20) / 100);
const areaShow = document.getElementById(discountAmount);
  areaShow.innerText = discountAmount;



//  apply section 

document.getElementById("Apply").addEventListener('click', function(totalPrice){
    const couponDiscount = document.getElementById("CouponAdd").value;
    
    if(couponDiscount === 'SELL200'  ){
        couponDiscount.removeAttribute('disabled')
        const  totalPrice= document.getElementById('total-Discount');
const  discountAmount = ((total * 20) / 100);
const areaShow = document.getElementById(discountAmount);
  areaShow.innerText = discountAmount;

    }else{
        couponDiscount.setAttribute();
    }
})
// make pursase
// function cardChickenCookerPurchaseBtn(){
//     const purchaseBtn = document.getElementById("purchase-btn");
//     if( total >= 0){
//         purchaseBtn.removeAttribute('disabled')
//     }else{
//         purchaseBtn.setAttribute('disabled', true);
//     }
// }



// Purchase Button
// const purchaseButton = document.getElementById("purchase-btn");
// purchaseButton.disabled = totalPrice <= 0;

// function redirectModal() {
//   window.location.href = "#modal";
// }

// purchaseButton.addEventListener("click", redirectModal);

// if (total == 0 ){
//     submittable.removeAttribute('disabled')
// }else{
//     submittable.setAttribute('disabled', true);
// }