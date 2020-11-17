var chart;


function displayResults() {
  toggleLoaderOff();
  if(chart != null) {
      chart.destroy();
  }
  let myChart = document.getElementById("myChart").getContext("2d");
  //ENTER ERROR CHECKING FOR ACTIVE, CONFIRMED, AND DEATH
  let totalPopulation = active + confirmed;
  chart = new Chart(myChart, {
    type: graph, // bar, horizontalBar, line, pie, polarArea, doughnut, radar
    data: {
      labels: ["Population", "Active", "Confirmed", "Deaths"],
      datasets: [
        {
          label: "Infected",
          data: [totalPopulation, active, confirmed, deaths],
          //backgroundColor: 'green'
          backgroundColor: ["Green", "Red", "Yellow", "Black"],
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

buttonResult.addEventListener("click", function() {
  toggleLoaderOn();
  setTimeout(displayResults, 2000);
});

