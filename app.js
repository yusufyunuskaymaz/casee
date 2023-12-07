document.addEventListener("DOMContentLoaded", function () {
  const NEWESTS = [
    {
      brandName: "Marka Adı1",
      description: "Ürün açıklaması 1",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/havuc.png",
      imgUrl2: "assets/images/img4.png",
    },
    {
      brandName: "Marka Adı2",
      description: "Ürün açıklaması 2",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/pizza.png",
imgUrl2: "assets/images/img1.png",
    },
    {
      brandName: "Marka Adı3",
      description: "Ürün açıklaması 3",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/et.png",
imgUrl2: "assets/images/img2.png",
    },
    {
      brandName: "Marka Adı4",
      description: "Ürün açıklaması 1",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/makarna.png",
imgUrl2: "assets/images/img3.png",
    },
    {
      brandName: "Marka Adı5",
      description: "Ürün açıklaması 2",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/havuc.png",
imgUrl2: "assets/images/pizza.png",
    },
    {
      brandName: "Marka Adı6",
      description: "Ürün açıklaması 3",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/havuc.png",
imgUrl2: "assets/images/pizza.png",
    },
    {
      brandName: "Marka Adı7",
      description: "Ürün açıklaması 1",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/havuc.png",
imgUrl2: "assets/images/pizza.png",
    },
    {
      brandName: "Marka Adı8",
      description: "Ürün açıklaması 2",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/havuc.png",
imgUrl2: "assets/images/pizza.png",
    },
    {
      brandName: "Marka Adı9",
      description: "Ürün açıklaması 3",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/havuc.png",
imgUrl2: "assets/images/pizza.png",
    },
  ];
  const DISCOUNTS = [
    {
      brandName: "FarklıMarka Adı1",
      description: "Ürün açıklaması 1",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/pizza.png",
    },
    {
      brandName: "FarklıMarka Adı2",
      description: "Ürün açıklaması 2",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/pizza.png",
    },
    {
      brandName: "FarklıMarka Adı3",
      description: "Ürün açıklaması 3",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/pizza.png",
    },
    {
      brandName: "FarklıMarka Adı4",
      description: "Ürün açıklaması 1",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/pizza.png",
    },
    {
      brandName: "FarklıMarka Adı5",
      description: "Ürün açıklaması 2",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/pizza.png",
    },
    {
      brandName: "FarklıMarka Adı6",
      description: "Ürün açıklaması 3",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/pizza.png",
    },
    {
      brandName: "FarklıMarka Adı7",
      description: "Ürün açıklaması 1",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/pizza.png",
    },
    {
      brandName: "FarklıMarka Adı8",
      description: "Ürün açıklaması 2",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/pizza.png",
    },
    {
      brandName: "FarklıMarka Adı9",
      description: "Ürün açıklaması 3",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/pizza.png",
    },
  ];
  const OUTLET = [
    {
      brandName: "OUTLETMarka Adı1",
      description: "Ürün açıklaması 1",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/et.png",
    },
    {
      brandName: "OUTLETMarka Adı2",
      description: "Ürün açıklaması 2",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/et.png",
    },
    {
      brandName: "OUTLETMarka Adı3",
      description: "Ürün açıklaması 3",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/et.png",
    },
    {
      brandName: "OUTLETMarka Adı4",
      description: "Ürün açıklaması 1",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/et.png",
    },
    {
      brandName: "OUTLETMarka Adı5",
      description: "Ürün açıklaması 1",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/et.png",
    },
    {
      brandName: "OUTLETMarka Adı5",
      description: "Ürün açıklaması 1",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/et.png",
    },
    {
      brandName: "OUTLETMarka Adı5",
      description: "Ürün açıklaması 1",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/et.png",
    },
    {
      brandName: "OUTLETMarka Adı5",
      description: "Ürün açıklaması 1",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/et.png",
    },
    {
      brandName: "OUTLETMarka Adı5",
      description: "Ürün açıklaması 1",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/et.png",
    },
  ];

  const CATEGORIES = [NEWESTS, DISCOUNTS, OUTLET];
  let defaultSliderData = CATEGORIES[0];

  const tabs = document.querySelectorAll(".category-item");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      defaultSliderData = CATEGORIES[index];

      tabs.forEach((t) => t.classList.remove("selected"));

      tab.classList.add("selected");

      startSlider(false);

      createSliderContainer(defaultSliderData);
    });
  });

  function createCardElement(cardData) {
    // örnek kart
    const cardElement = document.createElement("div");
    cardElement.classList.add(
      "card",
      "flex-column",
      "justify-content-center",
      "align-items-center"
    );
    cardElement.innerHTML = `
      <img id="firstImg" src="${cardData.imgUrl1}" alt="havuc" />
      <img id="secondImg" src="${cardData.imgUrl2}" alt="havuc" />
      <p class="brand-name">${cardData.brandName}</p>
      <p class="description">${cardData.description}</p>
      <a class="discount" href="${cardData.discountLink}">%20 İNDİRİM</a>
      <span class="old-price">${cardData.oldPrice}</span>
      <span class="new-price">${cardData.newPrice}</span>
    `;
    return cardElement;
  }

  // Kartları html e ekleme

  const createSliderContainer = (data = CATEGORIES[0]) => {
    const cardContainer = document.querySelector(".blaze-track");

    // tab değiştirildiğinde önceki slider ları silmek için
    if (cardContainer.firstChild) {
      cardContainer.innerHTML = "";
    }
    data.forEach((cardData) => {
      const cardElement = createCardElement(cardData);
      cardContainer.appendChild(cardElement);
    });
  };
  createSliderContainer();

  
  const el = document.querySelector(".blaze-slider");
  // slider ayarları
  const config = {
    all: {
      slidesToShow: 4,
      transitionTimingFunction: "linear",
      loop: true,
    },
    "(max-width: 900px)": {
      slidesToShow: 2,
    },
    "(max-width: 500px)": {
      slidesToShow: 1,
    },
  };

  const slider = new BlazeSlider(el, config);

  const startSlider = (value=true) => {
    
    // tab değiştiğinde önceki slider ın pagination daki yerini diğer tab a aktarmaması için
    if (!value) {
      slider.refresh()
    }
  };
  startSlider();
});
