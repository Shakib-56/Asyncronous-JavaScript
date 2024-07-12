const countriesContainer = document.querySelector(".countries-container");

const getCountryData = function (countries) {
  const request = new XMLHttpRequest();

  request.open("GET", `https://restcountries.com/v3.1/name/${countries}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const currencyCode = Object.keys(data.currencies)[0]; // Get the first key in the currencies object
    console.log(currencyCode);
    const currencyName = data.currencies[currencyCode].name;
    const languagesCode = Object.values(data.languages)[0];
    const html = `<article>
          <img src="${data.flags.svg}" alt="" class="country__img" />
          <div class="country-data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👪</span>  ${(
              +data.population / 1000000
            ).toFixed(1)}People</p>
            <p class="country__row"><span>🗣️</span>${languagesCode}</p>
            <p class="country__row"><span>💰</span> ${currencyName}</p>
          </div>
        </article>`;
    countriesContainer.insertAdjacentHTML("beforeend", html);
  });
};

getCountryData("bangladesh");
getCountryData("usa");
getCountryData("portugal");
getCountryData("iran");
getCountryData("russia");
getCountryData("china");
getCountryData("germany");
