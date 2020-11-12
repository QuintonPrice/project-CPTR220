//Input From User
var graphBtnShow = document.querySelector("button");
var checkbox;

var chart;

//Limit to only one box to be checked
function selectOnlyThis(id) {
  for (var i = 1; i <= 3; i++) {
    document.getElementById("Check" + i).checked = false;
  }
  document.getElementById(id).checked = true;
}
//Grabs Type of Graph
graphBtnShow.addEventListener("click", () => {
  checkbox = document.querySelector('input[type="checkbox"]:checked');
});

function displayResults() {
  if(chart != null) {
      chart.destroy();
  }
  let myChart = document.getElementById("myChart").getContext("2d");
  //ENTER ERROR CHECKING FOR ACTIVE, CONFIRMED, AND DEATH
  let totalPopulation = active + confirmed;
  chart = new Chart(myChart, {
    type: checkbox.value, // bar, horizontalBar, line, pie, polarArea, doughnut, radar
    data: {
      labels: ["San Jose", "Santa Clara", "Santa Cruz", "test"],
      datasets: [
        {
          label: "Infected",
          data: [totalPopulation, active, confirmed, deaths],
          //backgroundColor: 'green'
          backgroundColor: ["red", "blue", "green", "orange"],
          borderWidth: 2,
          borderColor: "black",
          hoverBorderWidth: 3,
          hoverBorderColor: "yellow",
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "COVID CASES",
        fontSize: 25,
      },
      legend: {
        position: "bottom",
      },
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        bottom: 0,
        top: 0,
      },
    },
    tooltips: {
      enabled: true,
    },
  });
  chart.update();
}
graphBtnShow.addEventListener("click", displayResults);
