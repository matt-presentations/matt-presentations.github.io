
function bar(element_id, url, x_column, y_column) 
{
  data = Papa.parse(url, 
  {
    download: true,
    header: true, 
    skipEmptyLines: true,
    trimHeaders: true,
    complete: function(results) { 
      console.log(results);
      var data = results.data;
      data.map(x => console.log(x));
      var x = data.map(x => x[x_column]);
      var y = data.map(x => x[y_column]);
      Plotly.newPlot(element_id, {
        x: x,
        y: y,
        type: "bar"
      });
    }

  })
}
