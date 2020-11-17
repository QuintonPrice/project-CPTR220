let buttonResult = document.querySelector("button");

//Holding Values From User Input
var userCountry;
var userState;
var userCity;
var date;
var graph;

//Holding Values For COVID API Data
var active;
var confirmed;
var deaths;

function getDataValuesCallBack(event) {
  event.preventDefault();

  let listCountry = document.getElementsByName("Country");
  let listState = document.getElementsByName("State");
  let listCities = document.getElementsByName("City");
  let listGraph = document.getElementsByName("graph");

  date = document.getElementById("dateValue");

  for(i = 0; i<listCountry.length; i++) {
      if(listCountry[i].checked) {
        userCountry = listCountry[i].value;
      }
  }

  for(i = 0; i<listState.length; i++) {
    if(listState[i].checked) {
      userState = listState[i].value;
    }
  }

  for(i = 0; i<listCities.length; i++) {
    if(listCities[i].checked) {
      userCity = listCities[i].value;
    }
  }

  for(i = 0; i<listGraph.length; i++) {
    if(listGraph[i].checked) {
      graph = listGraph[i].value;
    }
  }
  if (userCity == null && userState == null) {
    fetch(
      "https://covid-19-statistics.p.rapidapi.com/reports?iso=" + userCountry +"&date=" + date.value,
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
  } else if (userCity == null) {
    fetch(
      "https://covid-19-statistics.p.rapidapi.com/reports?region_province=" +
        userState +
        "&iso=" +
          userCountry +"&date=" + date.value,
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
        userState +
        "&iso=" +
       userCountry +
        "&city_name=" +
        userCity +
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
        console.log(data);
        active = data["data"][0]["active"];
        confirmed = data["data"][0]["confirmed"];
        deaths = data["data"][0]["deaths"];
      })
      .catch((err) => {
        console.error(err);
      });
  }

  
}


buttonResult.addEventListener("click", getDataValuesCallBack);


