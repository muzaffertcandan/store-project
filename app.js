const wrapper = document.querySelector(".slider-wrapper");
const menuItems = document.querySelectorAll(".menu-item");


const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "/img/air2.png",
        },
      ],
      description: "Air Force or Marine",
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "/img/jordan.png",
        },
        {
          code: "green",
          img: "/img/jordan2.png",
        },
      ],
      description: "Who is your president Michael Jordan ",
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "/img/blazer.png",
        },
        {
          code: "green",
          img: "/img/blazer2.png",
        },
      ],
      description: "My Blazor Razor",
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "/img/crater.png",
        },
        {
          code: "lightgray",
          img: "/img/crater2.png",
        },
      ],
      description: "Crater is the best",
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
      description: "Hippie shoes XD",
    },
  ];
  
  let choosenProduct = products[0];
  
  const currentProductImg = document.querySelector(".product-img");
  const currentProductTitle = document.querySelector(".product-title");
  const currentProductPrice = document.querySelector(".product-price");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");
  const currentProductDescription = document.querySelector(".product-description")

  menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      //change the current slide
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
  
      //change the choosen product
      choosenProduct = products[index];
  
      //change texts of currentProduct
      currentProductTitle.textContent = choosenProduct.title;
      currentProductDescription.textContent = choosenProduct.description;
      currentProductPrice.textContent = "$" + choosenProduct.price;
      currentProductImg.src = choosenProduct.colors[0].img;
  
      //assing new colors
      currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
      });
    });
  });

  
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});


currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});
