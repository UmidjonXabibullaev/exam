const country = document.getElementById("Countries");
const aboutCountry = document.querySelector(".country-info")
const regionList = document.querySelector('.form__select-list')
const regions = document.querySelectorAll('.form__country-item')
const updateUI = (data) => {
  const newData = data
  country.innerHTML = "";
  newData.forEach((item) => {
    country.innerHTML += `
    <li class="cards__item">
    <a href="./about.html?davlat-ismi=${item.name.common}">
        <img src="${item.flags.png}" alt="" width="267" height="160">
        <div class="cards__item-inner">
            <h3 class="cards__title">${item.name.common}</h3>
            <p class="population">Population: ${item.population}</p>
            <p class="region">Region: ${item.region}</p>
            <p class="capital">Capital: ${item.capital}</p>
        </div>
    </a>
    </li>
    `;
  });
};

function updateAboutUI(data){
    aboutCountry.innerHTML = `
    <img class="country-info__img" src="${data.flags.png}" alt="${data.flags.alt}" width="560" height="400">
    <div class="country-info__content">
        <h2>${data.name.common}</h2>
        <ul class="country-info__list">
            <li class="country-info__item">
                <p class="name">Native Name <span>${data.name.common}</span></p>
                <p class="population">Population: <span>${data.population}</span></p>
                <p class="region">Region: <span>${data.region}</span></p>
                <p class="capital">Capital: <span>${data.capital}</span></p>
            </li>
            <li class="country-info__item">
                <p class="name">Top Level Domain: <span>.de</span></p>
                <p class="population">Currencies: <span>${data.currencies}</span></p>
                <p class="region">Languages: <span>${data.languages}</span></p>
            </li>
        </ul>
        
    
    </div>
    `
}



export { updateUI , updateAboutUI };
