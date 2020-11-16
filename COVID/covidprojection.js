//Values From User Input
var resultButton = document.querySelector(".submit-button");

// Mandatory Values From User
var iso = document.querySelector("#isoValue");
var date = document.querySelector("#dateValue");

//Optional Values From User
var province = document.querySelector("#provinceValue");
var city = document.querySelector("#cityValue");

//Data Holders For COVID API
var active;
var confirmed;
var deaths;

function covidDataResult() {
  if (city.value.length == 0 && province.value.length == 0) {
    fetch(
      "https://covid-19-statistics.p.rapidapi.com/reports?iso=" + iso.value,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "e4334e991bmsh3fbca92360085c6p133e04jsn483e0d7b0472",
          "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  } else if (city.value.length == 0) {
    fetch(
      "https://covid-19-statistics.p.rapidapi.com/reports?region_province=" +
        province.value +
        "&iso=" +
        iso.value,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "e4334e991bmsh3fbca92360085c6p133e04jsn483e0d7b0472",
          "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        active = data["data"][0]["active"];
        confirmed = data["data"][0]["confirmed"];
        deaths = data["data"][0]["deaths"];
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    fetch(
      "https://covid-19-statistics.p.rapidapi.com/reports?region_province=" +
        province.value +
        "&iso=" +
        iso.value +
        "&city_name=" +
        city.value +
        "&date=" +
        date.value,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "e4334e991bmsh3fbca92360085c6p133e04jsn483e0d7b0472",
          "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        active = data["data"][0]["active"];
        confirmed = data["data"][0]["confirmed"];
        deaths = data["data"][0]["deaths"];
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

resultButton.addEventListener("click", covidDataResult);
