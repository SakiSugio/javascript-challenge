// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// YOUR CODE HERE!
function createDefault() {
    data.forEach(datas => {
        row = tbody.append("tr")
        row.append("td").text(datas.datetime);
        row.append("td").text(datas.city);
        row.append("td").text(datas.state);
        row.append("td").text(datas.country);
        row.append("td").text(datas.shape);
        row.append("td").text(datas.durationMinutes);
        row.append("td").text(datas.comments);
    });
}
createDefault();


var dataSearchField = d3.select("#datetime");
var dataSearchButton = d3.select("#filter-btn");
var table = d3.select("#ufo-table");

dataSearchButton.on("click", () => {
    var dataSearchFor = dataSearchField.property("value");
    console.log(dataSearchFor);
    tbody.remove();
    tbody = table.append("tbody");

    // Filter date using datetime
    var filteredDate = tableData.filter(function(date){
        return date.datetime == dataSearchFor});
    console.log(filteredDate)

    // filteredDate.forEach(date => {
    //         row.append("td").text(date.datetime);
    //         row.append("td").text(date.city);
    //         row.append("td").text(date.state);
    //         row.append("td").text(date.country);
    //         row.append("td").text(date.shape);
    //         row.append("td").text(date.durationMinutes);
    //         row.append("td").text(date.comments);
    // })
    filteredDate.forEach(datas => {
            var row = tbody.append("tr");
            row.append("td").text(datas.datetime);
            row.append("td").text(datas.city);
            row.append("td").text(datas.state);
            row.append("td").text(datas.country);
            row.append("td").text(datas.shape);
            row.append("td").text(datas.durationMinutes);
            row.append("td").text(datas.comments);
        });

})