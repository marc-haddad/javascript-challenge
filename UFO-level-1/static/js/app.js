// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var inputField = d3.select("#datetime");
var button = d3.select("#filter-btn")

tableData.forEach(function(data) {
    var row = tbody.append("tr");
    Object.entries(data).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});
inputField.on("change", function() {
    var newText = d3.event.target.value;
    var dateFilter = tableData.filter(date => date.datetime === newText);
    var tbody = d3.select("tbody");
    tbody.html("");
    dateFilter.forEach(function(date) {
        var row = tbody.append("tr");
        Object.entries(date).forEach(function([key, value]){
            var cell = row.append("td");
            cell.text(value); 
        }); 
    
    });
  });
  