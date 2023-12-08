document.addEventListener("DOMContentLoaded", function () {

  // Bu proje Bootstrap 4 Grid Yapısı ve Vanilla Js ile yapıldı
  // Düz css kullanıldı
  // Slider için Blaze Slider kütüphanesi kullanıldı

  // 3 ayrı tab için 3 slider oluşturmak yerine tek slider oluşturuldu ve tab değiştiğinde bu slider a giden veri değişiyor sebebi ise uzun uzun html yazmamak, clean code olması ve yeniden kullanılabilir olması. Slider verisi sanki backend den alınıyormuş gibi yapıldı. 

  const ROUTE_IMG_URL = "https://raw.githubusercontent.com/yusufyunuskaymaz/casee/main/assets/images/"
  const NEWEST = [
    {
      name: "Havuçlu Makarna",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount:20,
      oldPrice: 250.90,
      newPrice: 250.90,
      mealImg: `${ROUTE_IMG_URL}havuc.png`,
      sauceImg: `${ROUTE_IMG_URL}img4.png`,
      
    },
    {
      name: "Pizza",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}pizza.png`,
      sauceImg: `${ROUTE_IMG_URL}img1.png`,
    },
    {
      name: "Et Biftek",
      description: "Ürün açıklaması 3",
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}et.png`,
      sauceImg: `${ROUTE_IMG_URL}img2.png`,
      outOfStock:true,
      discount:null
    },
    {
      name: "Yoğurtlu Makarna",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount:15,
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}makarna.png`,
      sauceImg: `${ROUTE_IMG_URL}img3.png`,
      bookMark:true
    },
    {
      name: "Marka Adı5",
      description: "Ürün açıklaması 2",
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}havuc.png`,
      sauceImg: `${ROUTE_IMG_URL}img4.png`,
      outOfStock:true,
    },
    {
      name: "Marka Adı6",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount:20,
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}makarna.png`,
      sauceImg: `${ROUTE_IMG_URL}img4.png`,
      bookMark:true

    },
    {
      name: "Marka Adı7",
      description: "Ürün açıklaması 1",
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}et.png`,
      sauceImg: `${ROUTE_IMG_URL}img4.png`,
    },
    {
      name: "Marka Adı8",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      outOfStock:true,
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}makarna.png`,
      sauceImg: `${ROUTE_IMG_URL}img4.png`,
      bookMark:true
    },
    {
      name: "Marka Adı9",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}havuc.png`,
      sauceImg: `${ROUTE_IMG_URL}img4.png`,
    },
  ];
  const DISCOUNTS = [
    {
      name: "Et Biftek",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      discount:15,
      mealImg: `${ROUTE_IMG_URL}et.png`,
      sauceImg: `${ROUTE_IMG_URL}img1.png`,
      bookMark:true
    },
    {
      name: "Yoğurtlu Makarna",
      description: "Ürün açıklaması 2",
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}havuc.png`,
      sauceImg: `${ROUTE_IMG_URL}img4.png`,
      outOfStock:true
    },
    {
      name: "Havuçlu Makarna",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      discount:30,
      mealImg: `${ROUTE_IMG_URL}pizza.png`,
      sauceImg: `${ROUTE_IMG_URL}img2.png`,
      bookMark:true
    },
    {
      name: "Pizza",
      description: "Ürün açıklaması 1",
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}makarna.png`,
      sauceImg: `${ROUTE_IMG_URL}img3.png`,
      outOfStock:true
    },
    {
      name: "FarklıMarka Adı5",
      description: "Ürün açıklaması 2",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}et.png`,
      sauceImg: `${ROUTE_IMG_URL}img4.png`,
    },
    {
      name: "FarklıMarka Adı6",
      description: "Ürün açıklaması 3",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}havuc.png`,
      sauceImg: `${ROUTE_IMG_URL}img4.png`,
    },
    {
      name: "FarklıMarka Adı7",
      description: "Ürün açıklaması 1",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}pizza.png`,
      sauceImg: `${ROUTE_IMG_URL}img4.png`,
      bookMark:true
    },
    {
      name: "FarklıMarka Adı8",
      description: "Ürün açıklaması 2",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}makarna.png`,
      sauceImg: `${ROUTE_IMG_URL}img4.png`,
    },
    {
      name: "FarklıMarka Adı9",
      description: "Ürün açıklaması 3",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}havuc.png`,
      sauceImg: `${ROUTE_IMG_URL}img4.png`,
    },
  ];
  const OUTLET = [
    {
      name: "Pizza",
      description: "Ürün açıklaması 1",
      oldPrice: "250,90 TL",
      discount:20,
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}et.png`,
      sauceImg: `${ROUTE_IMG_URL}img4.png`,
      bookMark:false,
    },
    {
      name: "Et Biftek",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}pizza.png`,
      sauceImg: `${ROUTE_IMG_URL}img1.png`,
      bookMark:true,
      outOfStock:false
    },
    {
      name: "Havuçlu Makarna",
      description: "Ürün açıklaması 3",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}makarna.png`,
      sauceImg: `${ROUTE_IMG_URL}img4.png`,
      outOfStock:true

    },
    {
      name: "Yoğurtlu Makarna",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      discount:20,
      mealImg: `${ROUTE_IMG_URL}havuc.png`,
      sauceImg: `${ROUTE_IMG_URL}img3.png`,
      bookMark:true
    },
    {
      name: "OUTLETMarka Adı5",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}et.png`,
      sauceImg: `${ROUTE_IMG_URL}img2.png`,
    },
    {
      name: "OUTLETMarka Adı5",
      description: "Ürün açıklaması 1",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}pizza.png`,
      sauceImg: `${ROUTE_IMG_URL}img1.png`,
    },
    {
      name: "OUTLETMarka Adı5",
      description: "Ürün açıklaması 1",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}makarna.png`,
      sauceImg: `${ROUTE_IMG_URL}img4.png`,
    },
    {
      name: "OUTLETMarka Adı5",
      description: "Ürün açıklaması 1",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}havuc.png`,
      sauceImg: `${ROUTE_IMG_URL}img3.png`,
    },
    {
      name: "OUTLETMarka Adı5",
      description: "Ürün açıklaması 1",
      oldPrice: "250,90 TL",
      newPrice: "215,90 TL",
      mealImg: `${ROUTE_IMG_URL}et.png`,
      sauceImg: `${ROUTE_IMG_URL}img2.png`,
    },
  ];
  

  const CATEGORIES = [NEWEST, DISCOUNTS, OUTLET];
  let defaultSliderData = CATEGORIES[0];
// tab indexine göre tab değiştiğinde slider a giden veriyi değiştirmek için
  const tabs = document.querySelectorAll(".category-item");
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      defaultSliderData = CATEGORIES[index];

      // tab rengini değiştirmek için
      tabs.forEach((t) => t.classList.remove("selected"));

      tab.classList.add("selected");

      startSlider(false);

      createSliderContainer(defaultSliderData);
    });
  });

  function createCardElement(cardData) {
    // ekrana basılacak olan slider kartı
    const cardElement = document.createElement("div");
    cardElement.classList.add(
      "card",
      "flex-column",
      "justify-content-start",
      "align-items-center"
    );
    cardElement.innerHTML = `
    <a href="https://www.ideasoft.com.tr/" target="_blank" style="position:relative">
      <img id="firstImg" src="${cardData.mealImg}" alt="${cardData.name}" />
      <img id="secondImg" src="${cardData.sauceImg}" alt="${cardData.name}" />
      ${cardData?.outOfStock ? `<span class="outOfStock">Tükendi</span>` : ""}
      </a>
      <a href="https://www.ideasoft.com.tr/" target="_blank">
      <p class="brand-name">${cardData.name}</p>
      </a>
      <p class="description">${cardData.description}</p>
      ${cardData.discount ? `<p class="discount">%${cardData.discount} İNDİRİM</p>` : ""}
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
    if (cardContainer.firstChild) cardContainer.innerHTML = "";
    
    data.forEach((cardData) => {
      const cardElement = createCardElement(cardData);
      cardContainer.appendChild(cardElement);
    });
  };
  
  createSliderContainer();

  const blazeElement = document.querySelector(".blaze-slider");
  // slider ayarları
  const sliderConfig = {
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

  const slider = new BlazeSlider(blazeElement, sliderConfig);

  const startSlider = (value = true) => {
    // tab değiştiğinde önceki slider ın pagination daki yerini diğer tab a aktarmaması için slider ı yeniliyor
    if (!value) slider.refresh();
    
  };
  startSlider();
});
