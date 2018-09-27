
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
      data = {
        x: x,
        y: y,
        type: "bar"
      }
      console.log(data);
      Plotly.plot(element_id, [data]);
    }

  })
}


window.onload = function () 
{
  var elements = document.getElementsByClassName("chart")
  var f = function (elem) 
  {
    var plot = eval(elem.getAttribute("plot"))
    var src = elem.getAttribute("src")
    var x = elem.getAttribute("x")
    var y = elem.getAttribute("y")
    plot(elem.id, src, x, y);
  };
  for (var i = 0; i<elements.length; i++) 
  {
    f(elements[i]);
  }
}
