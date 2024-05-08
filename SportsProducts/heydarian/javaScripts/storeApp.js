//Variables
let productArray = [
  { productName: "SoccerBall", productInfo: "a test message like lorem to fill it", productPrice: 5000, productImg:"/images/sp3488-90_2022_05_1.jpg", numProduct:1},
  { productName: "VollyBall", productInfo: "a test message like lorem to fill it", productPrice: 2000, productImg:"images/Volleyball-1.png", numProduct:1},
  { productName: "product3", productInfo: "a test message like lorem to fill it", productPrice: 6668, productImg:"/images/sp3488-90_2022_05_1.jpg", numProduct:1},
  { productName: "product4", productInfo: "a test message like lorem to fill it", productPrice: 7895, productImg:"/images/sp3488-90_2022_05_1.jpg", numProduct:1},
]

let searchBoxElem = document.getElementById("search");
let productsDivListElem = document.getElementsByClassName("products")
let containerBasket = document.getElementsByClassName("product-bassket-container")
let productbasketElem = document.getElementsByClassName("product-basket")
let finalPriceElem = document.getElementById("finalprice")
productArray.forEach(function (products) {
  const product = document.createElement('div'); product.classList.add('product');
  const upSection = document.createElement('div'); upSection.classList.add('up-section');
  const img = document.createElement('img'); img.src = products.productImg; img.id = 'product-img'; img.alt = '';
  const productTitle = document.createElement('span'); productTitle.classList.add('product-title'); productTitle.innerText = products.productName;
  const productInfo = document.createElement('span'); productInfo.classList.add('product-info'); productInfo.innerHTML = products.productInfo;
  upSection.appendChild(img); upSection.appendChild(productTitle); upSection.appendChild(productInfo);
  const bottomSection = document.createElement('div'); bottomSection.classList.add('bottom-section');
  const buyBtn = document.createElement('button'); buyBtn.classList.add('buybtn'); buyBtn.innerText = 'Buy';
  bottomSection.appendChild(buyBtn);
  const priceElem = document.createElement('div'); priceElem.classList.add('priceElem');
  const price = document.createElement('h3'); price.id = 'price'; price.innerText = "$" +products.productPrice;
  priceElem.appendChild(price);
  product.appendChild(upSection); product.appendChild(bottomSection); product.appendChild(priceElem);
  productsDivListElem[0].appendChild(product);

  buyBtn.addEventListener("click", function(){
    addtobasket(products)
    calcFinalPrice(products.productPrice)
  })
})





// <div class="product">
//               <div class="up-section">
//                 <img
//                   src="/images/sp3488-90_2022_05_1.jpg"
//                   id="product-img"
//                   alt=""
//                 />
//                 <span class="product-title">Product1</span>
//                 <span class="product-info"
//                   >Lorem ipsum dolor sit amet consectetur <br />
//                   adipisicing elit. Error, accusantium.</span
//                 >
//               </div>
//               <div class="bottom-section">
//                 <button class="buybtn">Buy</button>
//               </div>
//             </div>





//SearchBox
let searchMaxLength = parseInt(searchBoxElem.getAttribute("maxlength"));

searchBoxElem.addEventListener("keyup", function (event) {
  let searchboxValue = event.target.value.length;
  if (searchboxValue + 1 >= searchMaxLength) {
    searchBoxElem.style.border = '3px solid red';
  } else {
    searchboxValue++;
  }
  if (searchboxValue < searchMaxLength) {
    searchBoxElem.style.border = 'none';
  }
});

function addtobasket(products){
  const itemsDiv = document.createElement('div');
  itemsDiv.className = 'items';
  let svgDiv = document.createElement("div")
  svgDiv.classList.add("svg")
  const close = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  close.id = 'close'
  close.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  close.setAttribute("viewBox", "0 0 24 24");
  close.setAttribute("fill", "currentColor");
  close.setAttribute("class", "w-6 h-6");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill-rule", "evenodd");
  path.setAttribute("d", "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z");
  path.setAttribute("clip-rule", "evenodd");

  close.appendChild(path);
  svgDiv.appendChild(close)
  document.body.appendChild(svgDiv);
  
  //////////


  const heart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  heart.id = "heart"
  heart.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  heart.setAttribute("viewBox", "0 0 24 24");
  heart.setAttribute("fill", "currentColor");
  heart.setAttribute("class", "w-6 h-6");

  const pathheart = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathheart.setAttribute("d", "m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.");
  pathheart.setAttribute("clip-rule", "evenodd");

  heart.appendChild(pathheart);
  svgDiv.appendChild(heart)


  //////////////


  const basketImg = document.createElement('img');
  basketImg.src = products.productImg;
  basketImg.id = 'basketimage';
  basketImg.alt = '';
  
  const productNameBasket = document.createElement('div');
  productNameBasket.className = 'productnamebasket';
  
  const bn = document.createElement('div');
  bn.className = 'bn';
  bn.innerHTML = products.productName;
  
  const bi = document.createElement('div');
  bi.className = 'bi';
  bi.innerHTML = 'White';
  
  productNameBasket.appendChild(bn);
  productNameBasket.appendChild(bi);
  
  const numContainer = document.createElement('div');
  numContainer.className = 'numCountainer';
  
  const plus = document.createElement('h3');
  plus.id = 'plus';
  plus.innerHTML = '+';
  const quantity = document.createElement('h3');
  quantity.id = 'quantity';
  quantity.innerHTML = products.numProduct;
  
  const minus = document.createElement('h3');
  minus.id = 'minus';
  minus.innerHTML = '-';
  
  numContainer.appendChild(plus);
  numContainer.appendChild(quantity);
  numContainer.appendChild(minus);
  
  const productBasketPrice = document.createElement('div');
  productBasketPrice.className = 'productbasketprice';
  
  const bp = document.createElement('h3');
  bp.className = 'bp';
  bp.innerHTML = "$" + products.productPrice;
  
  productBasketPrice.appendChild(bp);
  
  itemsDiv.appendChild(svgDiv);
  itemsDiv.appendChild(basketImg);
  itemsDiv.appendChild(productNameBasket);
  itemsDiv.appendChild(numContainer);
  itemsDiv.appendChild(productBasketPrice);
  
  productbasketElem[0].appendChild(itemsDiv);



  close.addEventListener("click", function(event){
    itemsDiv.remove()
  })

  heart.addEventListener("click", function(event){
    heart.classList.toggle("active")
  })





  plus.addEventListener("click", function(){
    products.numProduct++
    quantity.innerHTML = products.numProduct
    let finalPrice = products.numProduct * products.productPrice
    bp.innerHTML = "$" + finalPrice
    calcFinalPrice(finalPrice)
  })
  minus.addEventListener("click", function(){
    products.numProduct--
    quantity.innerHTML = products.numProduct
    var finalPrice = products.numProduct * products.productPrice
    bp.innerHTML = "$" + finalPrice
    calcFinalPrice(finalPrice)
  })
}


function calcFinalPrice(finalprice){
  let sum = 0
  sum = sum + finalprice
  finalPriceElem.innerHTML = "$" + finalprice
}