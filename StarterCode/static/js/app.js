
// 

var data

function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }
  
  function buildPlot() {
    d3.json(url).then(function(data) {
  
      // Grab values from the data json object to build the plots
      var sample_values = data.dataset.names;
      var otu_labels = data.dataset.metadata;
      var otu_ids = data.dataset.samples;
  
      var trace1 = {
        type: "scatter",
        mode: "lines",
        name: otu_labels,
        x: sample_values,
        y: otu_ids,
        line: {
          color: "#17BECF"
        }
      };
  
      var data = [trace1];
  
      var layout = {
        title: `OTU ids`,
        xaxis: {
          range:
          type:
        },
        yaxis: {
          autorange: true,
          type: "linear"
        }
      };
  
      Plotly.newPlot("plot", data, layout);
  
    });
  }
  
  buildPlot();

  function buildPlot() {
    d3.json(url).then(function(data) {
  
      // Grab values from the data json object to build the plots
      var sample_values = data.dataset.names;
      var otu_labels = data.dataset.metadata;
      var otu_ids = data.dataset.samples;
  
      var trace1 = {
        type: "bubble",
        mode: "circles",
        name: name,
        x: dates,
        y: closingPrices,
        line: {
          color: "#17BECF"
        }
      };
  
      var data = [trace1];
  
      var layout = {
        title: `OTU ids`,
        xaxis: {
          range:
          type:
        },
        yaxis: {
          autorange: true,
          type: "linear"
        }
      };
  
      Plotly.newPlot("plot", data, layout);
  
    });
  }
  
  buildPlot();