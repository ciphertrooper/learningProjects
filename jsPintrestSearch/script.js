var arr = [
  {
    name: "Mountains",
    image:
      "https://images.unsplash.com/photo-1682687220208-22d7a2543e88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "jupiter",
    image:
      "https://images.unsplash.com/photo-1707056790571-54d8612d6368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Under the water",
    image:
      "https://images.unsplash.com/photo-1682686581580-d99b0230064e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "cold roads",
    image:
      "https://images.unsplash.com/photo-1707070530152-1fc8f45ec3c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "the porsche",
    image:
      "https://images.unsplash.com/photo-1707438587276-2828a4576c52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "man in mountain",
    image:
      "https://images.unsplash.com/photo-1682905926517-6be3768e29f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4MXx8fGVufDB8fHx8fA%3D%3D",
  },
];

function showCards() {
  var clutter = "";
  arr.forEach(function (obj) {
    clutter += `<div class="box">
            <img class="cursor-pointer" src="${obj.image}" alt="image">
            <div class="caption">Lorem ipsum </div>
        </div>`;
  });
  document.querySelector(".container").innerHTML = clutter;
}

function handleSearchFunctionality() {
  var input = document.querySelector("#searchinput");
  input.addEventListener("focus", function () {
    document.querySelector(".overlay").style.display = "block";
  });
  input.addEventListener("blur", function () {
    document.querySelector(".overlay").style.display = "none";
  });
  input.addEventListener("input", function () {
    const filteredArray = arr.filter((obj) =>
      obj.name.toLowerCase().startsWith(input.value)
    );
    var clutter = "";
    filteredArray.forEach(function (obj) {
      clutter += `<div class="res flex px-8 py-3">
                <i class="ri-search-line font-semibold mr-5"></i>
                <h3 class="font-semibold">${obj.name}</h3>
            </div>`;
    });
    document.querySelector(".searchdata").style.display = "block";
    document.querySelector(".searchdata").innerHTML = clutter;
  });
}

handleSearchFunctionality();
showCards();
