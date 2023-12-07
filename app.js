const el = document.querySelector(".blaze-slider");
const config = {
  // items: 5,
  all: {
    loop: false,
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
new BlazeSlider(el, config);

const newests = [
  {
    brandName: "Marka Adı1",
    description:
      "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
    discount: "%20 İNDİRİM",
    oldPrice: "250,90 TL",
    newPrice: "215,90 TL",
    imgUrl: "assets/images/havuc.png",
  },
];

const cardDataArray = [
  {
    brandName: "Marka Adı1",
    description: "Ürün açıklaması 1",
    discountLink: "#",
    oldPrice: "250,90 TL",
    newPrice: "215,90 TL",
  },
  {
    brandName: "Marka Adı2",
    description: "Ürün açıklaması 2",
    discountLink: "#",
    oldPrice: "250,90 TL",
    newPrice: "215,90 TL",
  },
  {
    brandName: "Marka Adı3",
    description: "Ürün açıklaması 3",
    discountLink: "#",
    oldPrice: "250,90 TL",
    newPrice: "215,90 TL",
  },
  // Diğer kart verilerini ekleyebilirsiniz
];

// function createCardElement(cardData) {
//   const cardElement = document.createElement("div");
//   cardElement.classList.add(
//     "card",
//     "flex-column",
//     "justify-content-center",
//     "align-items-center"
//   );
//   cardElement.innerHTML = `
//     <img src="assets/images/havuc.png" alt="havuc" />
//     <p class="brand-name">${cardData.brandName}</p>
//     <p class="description">${cardData.description}</p>
//     <a class="discount" href="${cardData.discountLink}">%20 İNDİRİM</a>
//     <span class="old-price">${cardData.oldPrice}</span>
//     <span class="new-price">${cardData.newPrice}</span>
//   `;
//   return cardElement;
// }


// // Kartları HTML'e ekleme
// const cardContainer = document.querySelector(".blaze-track");
// cardDataArray.forEach((cardData) => {
//   const cardElement = createCardElement(cardData);
//   cardContainer.appendChild(cardElement);
// });
