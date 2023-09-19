import getData from "./request.js";
import { updateAboutUI } from "./updateUI.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const CountryN = urlParams.get("davlat-ismi");


const API = `https://countries-api-v7sn.onrender.com/countries/slug/${CountryN}`;

getData(API)
  .then((data) => {updateAboutUI(data);})
  .catch((error) => {console.log(error);});
