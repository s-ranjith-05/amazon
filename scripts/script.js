//to load side-navbar.
var sideBar=document.querySelector(".side-bar");
var hamburgerBtn=document.querySelector(".hamburger-btn");

hamburgerBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    sideBar.style.top="50px";
})

var productSection=document.querySelector(".pdt-section");
var html='';
products.forEach((product)=>{
     html += `<div class="product">
            <div class="pdt-image">
                <img src="${product.image}" alt="">
            </div>
            <div class="pdt-details">
                <p class="pdtname">${product.name}</p>
                <div class="rating-start">
                <div class="rating">
                    <img src="${product.rating.stars}" alt="">
                    <p><a href="">${product.rating.people}</a></p>
                </div>
                <p class="pdt-cost">$ ${((product.cost)/100).toFixed(2)}</p>
                <div class="select-qty">
                <select name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select></div>
                <button>Add To Cart</button>
            </div></div>
        </div>`;
});

productSection.innerHTML=html;

