// Load google charts
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Study", 8],
    ["Eat", 2],
    ["Code", 4],
    ["Social Media", 2],
    ["Sleep", 8],
  ]);

  // Optional; add a title and set the width and height of the chart
  var options = {
    title: "My Average Day",
    width: 550,
      height: 400,
    colors: ['#000000', '#111111', '#222222', '#333333', '#444444']
  };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}
