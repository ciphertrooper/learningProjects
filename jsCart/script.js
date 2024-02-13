var cart = [];

var products = [
  {
    name: "Classic Camera",
    headline: "An old classic camera",
    price: "1,00,000",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Running Shoe",
    headline: "Best shoes for running",
    price: "6,000",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Hand Bag",
    headline: "Classic handbag",
    price: "10,000",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Analog Watch",
    headline: "Classic analog wrist watch",
    price: "40,000",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
  },
];

var popularProducts = [
  {
    name: "Rolex Submariner",
    headline: "Analog watch",
    price: "24,00,000",
    image:
      "https://images.unsplash.com/photo-1662384197911-e82189f4dc60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHJvbGV4fGVufDB8fDB8fHww",
  },
  {
    name: "ANC Headphones",
    headline: "Best-in-class",
    price: "25,000",
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lfGVufDB8fDB8fHww",
  },
  {
    name: "Semi formal Shoe",
    headline: "Cloth Shoes",
    price: "20,000",
    image:
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHJvbGV4JTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Relaxed Fit Trousers",
    headline: "Solid Gray",
    price: "4,000",
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvdXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

function addPopularProducts() {
  var clutter = "";
  popularProducts.forEach(function (product) {
    clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
            <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover" src="${product.image}" alt="" />
            </div>
            <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">
                ${product.headline}
            </h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
            </div>
        </div>`;
  });
  document.querySelector(".populars").innerHTML = clutter;
}

function addProduct() {
  var clutter = "";
  products.forEach(function (product, index) {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
            <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                <img class = "w-full h-full object-cover" src = "${product.image}"/>
            </div>
            <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">
                ${product.name}
            </h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                <h3 class="font-semibold opacity-20">${product.headline}</h3>
                <h4 class="font-semibold mt-2">	&#8377; ${product.price}</h4>
                </div>
                <button data-index = "${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
                <i data-index = "${index}" class="add ri-add-line"></i>
                </button>
            </div>
            </div>
        </div>`;
  });
  document.querySelector(".products").innerHTML = clutter;
}

function addToCart() {
    document.querySelector(".products").addEventListener("click", function(dets) {
        if(dets.target.classList.contains("add")) {
            cart.push(products[dets.target.dataset.index]);
        }
    })
};

function showCart() {
    var showingCart = false;
    document.querySelector(".carticon").addEventListener("click", function() {
        if(!showingCart) {
            document.querySelector(".cartexpnd").style.display = "block";
            showingCart = true;
            var clutter = "";
            cart.forEach(function(prod, index) {
                clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
                    <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                        <img class = "w-full h-full object-cover" src = "${prod.image}"/>
                    </div>
                    <div>
                        <h3 class="font-semibold">${prod.name}</h3>
                        <h5 class="text-sm font-semibold opacity-80"> &#8377; ${prod.price}</h5>
                    </div>
                </div>`;
            });
            document.querySelector(".cartexpnd").innerHTML = clutter;
        }
        else {
            document.querySelector(".cartexpnd").innerHTML = "";
            document.querySelector(".cartexpnd").style.display = "hidden";
            showingCart = false;
        }
    });
}

showCart();
addPopularProducts();
addProduct();
addToCart();