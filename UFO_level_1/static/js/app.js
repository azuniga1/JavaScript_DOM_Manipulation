
// YOUR CODE HERE!
var tbody = d3.select("tbody")


data.forEach(function(ufosighting) {
    console.log(ufosighting);
    var row = tbody.append("tr");

    Object.entries(ufosighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

var ufosighting = data;

var button = d3.select("#filter-btn");

button.on("click", function() {

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = ufosighting.filter(dates => dates.datetime === inputValue);

    //console.log(filteredData);

    d3.selectAll("tr").remove();

    filteredData.forEach(function(filterdates) {
        console.log(filterdates)
        var row = tbody.append("tr");

        Object.entries(filterdates).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });

    
});