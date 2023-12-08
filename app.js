document.addEventListener("DOMContentLoaded", function () {
  const NEWESTS = [
    {
      brandName: "Havuçlu Makarna",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount:"%20 İNDİRİM",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/havuc.png",
      imgUrl2: "assets/images/img4.png",
      
    },
    {
      brandName: "Pizza",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/pizza.png",
      imgUrl2: "assets/images/img1.png",
    },
    {
      brandName: "Et Biftek",
      description: "Ürün açıklaması 3",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/et.png",
      imgUrl2: "assets/images/img2.png",
      outOfStock:true
    },
    {
      brandName: "Yoğurtlu Makarna",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount:"%15 İNDİRİM",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/makarna.png",
      imgUrl2: "assets/images/img3.png",
      bookMark:true
    },
    {
      brandName: "Marka Adı5",
      description: "Ürün açıklaması 2",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/havuc.png",
      imgUrl2: "assets/images/pizza.png",
      outOfStock:true,
    },
    {
      brandName: "Marka Adı6",
      description: "Ürün açıklaması 3",
      discount:"%20 İNDİRİM",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/pizza.png",
      imgUrl2: "assets/images/img3.png",
      bookMark:true

    },
    {
      brandName: "Marka Adı7",
      description: "Ürün açıklaması 1",

      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/et.png",
      imgUrl2: "assets/images/pizza.png",
    },
    {
      brandName: "Marka Adı8",
      description: "Ürün açıklaması 2",
      outOfStock:true,
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/makarna.png",
      imgUrl2: "assets/images/pizza.png",
      bookMark:true
    },
    {
      brandName: "Marka Adı9",
      description: "Ürün açıklaması 3",

      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/pizza.png",
      imgUrl2: "assets/images/pizza.png",
    },
  ];
  const DISCOUNTS = [
    {
      brandName: "Et Biftek",
      description: "Ürün açıklaması 1",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/et.png",
      imgUrl2: "assets/images/img1.png",
      bookMark:true
    },
    {
      brandName: "Yoğurtlu Makarna",
      description: "Ürün açıklaması 2",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/makarna.png",
      imgUrl2: "assets/images/img2.png",
      outOfStock:true
    },
    {
      brandName: "Havuçlu Makarna",
      description: "Ürün açıklaması 3",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/havuc.png",
      imgUrl2: "assets/images/img3.png",
      bookMark:true
    },
    {
      brandName: "Pizza",
      description: "Ürün açıklaması 1",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/pizza.png",
      imgUrl2: "assets/images/img4.png",
      outOfStock:true
    },
    {
      brandName: "FarklıMarka Adı5",
      description: "Ürün açıklaması 2",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/et.png",
      imgUrl2: "assets/images/img1.png",
    },
    {
      brandName: "FarklıMarka Adı6",
      description: "Ürün açıklaması 3",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/makarna.png",
      imgUrl2: "assets/images/img2.png",
    },
    {
      brandName: "FarklıMarka Adı7",
      description: "Ürün açıklaması 1",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/havuc.png",
      imgUrl2: "assets/images/img3.png",
      bookMark:true
    },
    {
      brandName: "FarklıMarka Adı8",
      description: "Ürün açıklaması 2",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/pizza.png",
      imgUrl2: "assets/images/img4.png",
    },
    {
      brandName: "FarklıMarka Adı9",
      description: "Ürün açıklaması 3",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/makarna.png",
      imgUrl2: "assets/images/img1.png",
    },
  ];
  const OUTLET = [
    {
      brandName: "Pizza",
      description: "Ürün açıklaması 1",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/pizza.png",
      imgUrl2: "assets/images/img1.png",
    },
    {
      brandName: "Et Biftek",
      description: "Ürün açıklaması 2",

      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/et.png",
      imgUrl2: "assets/images/img2.png",
      bookMark:true
    },
    {
      brandName: "Havuçlu Makarna",
      description: "Ürün açıklaması 3",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/havuc.png",
      imgUrl2: "assets/images/img3.png",
      outOfStock:true

    },
    {
      brandName: "Yoğurtlu Makarna",
      description: "Ürün açıklaması 1",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/makarna.png",
      imgUrl2: "assets/images/img4.png",
      bookMark:true
    },
    {
      brandName: "OUTLETMarka Adı5",
      description: "Ürün açıklaması 1",

      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/pizza.png",
      imgUrl2: "assets/images/img1.png",
    },
    {
      brandName: "OUTLETMarka Adı5",
      description: "Ürün açıklaması 1",

      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/et.png",
      imgUrl2: "assets/images/img2.png",
    },
    {
      brandName: "OUTLETMarka Adı5",
      description: "Ürün açıklaması 1",

      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/havuc.png",
      imgUrl2: "assets/images/img3.png",
    },
    {
      brandName: "OUTLETMarka Adı5",
      description: "Ürün açıklaması 1",

      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/makarna.png",
      imgUrl2: "assets/images/img4.png",
    },
    {
      brandName: "OUTLETMarka Adı5",
      description: "Ürün açıklaması 1",

      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      imgUrl1: "assets/images/pizza.png",
      imgUrl2: "assets/images/img1.png",
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
      "justify-content-start",
      "align-items-center"
    );
    cardElement.innerHTML = `
    <a href="https://www.ideasoft.com.tr/" target="_blank" style="position:relative">
      <img id="firstImg" src="${cardData.imgUrl1}" alt="havuc" />
      <img id="secondImg" src="${cardData.imgUrl2}" alt="havuc" />
      ${cardData?.outOfStock ? `<span class="outOfStock">Tükendi</span>` : ""}
      </a>
      <a href="https://www.ideasoft.com.tr/" target="_blank">
      <p class="brand-name">${cardData.brandName}</p>
      </a>
      <p class="description">${cardData.description}</p>
      ${cardData.discount ? `<p class="discount">${cardData.discount}</p>` : ""}
      ${cardData.oldPrice ? `<span class="old-price">${cardData.oldPrice}</span>` : ""}
      
      <p class="new-price justify-self-end mt-auto ">${cardData.newPrice}</p>
      <div class="bookmarkDiv">
      ${cardData.bookMark ? `<div class="bookmarkRibbon">YENİ</div>
      <div class="bookmarkRibbon2">HEDİYELİ</div>` : ""}
      </div>
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
      loop: false,
    },
    "(max-width: 900px)": {
      slidesToShow: 2,
    },
    "(max-width: 500px)": {
      slidesToShow: 1,
    },
  };

  const slider = new BlazeSlider(el, config);

  const startSlider = (value = true) => {
    // tab değiştiğinde önceki slider ın pagination daki yerini diğer tab a aktarmaması için slider ı yeniliyor
    if (!value) {
      slider.refresh();
    }
  };
  startSlider();
});
