
function plot_data(element_id, url, column) 
{
  data = Papa.parse(url, 
  {
    download: true,
    header: true, 
    trimHeaders: true,
    complete: function(results) 
    var svgWidth = 500;
    var svgHeight = 300;
    var svg = d3.select(element_id)
        .attr("width", svgWidth)
        .attr("height", svgHeight)
        .attr("class", "bar-chart");{
      var data = results.data 
      var dataset = data.map(x => x[column]);
      var barPadding = 5;
      var barWidth = (svgWidth / dataset.length);
      var barChart = svg.selectAll("rect")
          .data(dataset)
          .enter()
          .append("rect")
          .attr("y", function(d) {
              return svgHeight - d
          })
          .attr("height", function(d) {
              return d;
          })
          .attr("width", barWidth - barPadding)
          .attr("transform", function (d, i) {
               var translate = [barWidth * i, 0];
               return "translate("+ translate +")";
          });
    }

  })
}
