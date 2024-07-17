"use strict";

//async & await

const getCountryData = async () => {
  const response = await fetch(
    "https://restcountries.com/v3.1/name/bangladesh"
  );
  const data = await response.json();
  return data;
};

getCountryData()
  .then((data) => console.log("resolved", data))
  .catch((err) => {
    console.log("rejected", err);
  });

// getCountryData(); //the test also a Promise

// fetch("https://restcountries.com/v3.1/name/bangladesh")
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();//it returns promises
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });
