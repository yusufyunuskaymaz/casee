document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector(".blaze-slider");
  const config = {
    all: {
      slidesToShow: 4,
      transitionTimingFunction: "linear",
    },
    "(max-width: 900px)": {
      slidesToShow: 2,
    },
    "(max-width: 500px)": {
      slidesToShow: 1,
    },
  };
  const cardDataArray = [
    {
      brandName: "Marka Adı1",
      description: "Ürün açıklaması 1",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl: "assets/images/havuc.png",
    },
    {
      brandName: "Marka Adı2",
      description: "Ürün açıklaması 2",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl: "assets/images/havuc.png",
    },
    {
      brandName: "Marka Adı3",
      description: "Ürün açıklaması 3",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl: "assets/images/havuc.png",
    },
    {
      brandName: "Marka Adı4",
      description: "Ürün açıklaması 1",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl: "assets/images/havuc.png",
    },
    {
      brandName: "Marka Adı5",
      description: "Ürün açıklaması 2",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl: "assets/images/havuc.png",
    },
    {
      brandName: "Marka Adı6",
      description: "Ürün açıklaması 3",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl: "assets/images/havuc.png",
    },
    {
      brandName: "Marka Adı7",
      description: "Ürün açıklaması 1",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl: "assets/images/havuc.png",
    },
    {
      brandName: "Marka Adı8",
      description: "Ürün açıklaması 2",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl: "assets/images/havuc.png",
    },
    {
      brandName: "Marka Adı9",
      description: "Ürün açıklaması 3",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl: "assets/images/havuc.png",
    },
    
  ];
  const cardDataArray2 = [
    {
      brandName: "FarklıMarka Adı1",
      description: "Ürün açıklaması 1",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl: "assets/images/havuc.png",
    },
    {
      brandName: "FarklıMarka Adı2",
      description: "Ürün açıklaması 2",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl: "assets/images/havuc.png",
    },
    {
      brandName: "FarklıMarka Adı3",
      description: "Ürün açıklaması 3",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl: "assets/images/havuc.png",
    },
    {
      brandName: "FarklıMarka Adı4",
      description: "Ürün açıklaması 1",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl: "assets/images/havuc.png",
    },
    {
      brandName: "FarklıMarka Adı5",
      description: "Ürün açıklaması 2",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl: "assets/images/havuc.png",
    },
    {
      brandName: "FarklıMarka Adı6",
      description: "Ürün açıklaması 3",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl: "assets/images/havuc.png",
    },
    {
      brandName: "FarklıMarka Adı7",
      description: "Ürün açıklaması 1",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl: "assets/images/havuc.png",
    },
    {
      brandName: "FarklıMarka Adı8",
      description: "Ürün açıklaması 2",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl: "assets/images/havuc.png",
    },
    {
      brandName: "FarklıMarka Adı9",
      description: "Ürün açıklaması 3",
      discountLink: "#",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl: "assets/images/havuc.png",
    },
    
  ];

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
      <img src="${cardData.imgUrl}" alt="havuc" />
      <p class="brand-name">${cardData.brandName}</p>
      <p class="description">${cardData.description}</p>
      <a class="discount" href="${cardData.discountLink}">%20 İNDİRİM</a>
      <span class="old-price">${cardData.oldPrice}</span>
      <span class="new-price">${cardData.newPrice}</span>
    `;
    return cardElement;
  }


  // Kartları html e ekleme

  const cardContainer = document.querySelector(".blaze-track");
  cardDataArray2.forEach((cardData) => {
    const cardElement = createCardElement(cardData);
    cardContainer.appendChild(cardElement);
  });

  new BlazeSlider(el, config);
});
