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
 document.getElementById('total-price').innerText = total.toFixed(2);
 document.getElementById('purchase-btn').removeAttribute('disabled');
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
 document.getElementById('total-price').innerText = total.toFixed(2);
 document.getElementById('purchase-btn').removeAttribute('disabled');
 
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
 document.getElementById('total-price').innerText = total.toFixed(2);
 document.getElementById('purchase-btn').removeAttribute('disabled');
}
//  apply section
const applyButton = document.getElementById("Apply"); 
document.getElementById('CouponAdd').addEventListener('input', function(event){
   const totalPrice = event.target.value; 
    if (total >= 200 && totalPrice =='SELL200'){
        applyButton.removeAttribute('disabled');
    }
    else{
        applyButton.setAttribute("disabled", 'disabled');
    }
})
applyButton.addEventListener('click', function(){
    const couponDiscount = document.getElementById("CouponAdd").value;
    if(total >= 200 && couponDiscount =='SELL200'  ){
    const  discountAmount = ((total * 20) / 100);
     const finalTotal  = (total - discountAmount);
     const  totalPrice = document.getElementById('total-Discount');
    totalPrice.innerText = discountAmount.toFixed(2);
  const  finalPrice = document.getElementById('total-Division');
  finalPrice.innerText = finalTotal.toFixed(2);
    }
})
 document.getElementById('refreshPage').addEventListener('click', function(){
    window.location.href = 'index.html'
})
