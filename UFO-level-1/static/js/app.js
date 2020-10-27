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



var button = d3.select("#filter-btn");
// var form = d3.select("#filters");
var table = d3.select("#ufo-table");

// Create event handlers 
button.on("click", runEnter);
// form.on("submit", runEnter);


// Complete the event handler function for the form
function runEnter() {
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    tbody.remove();
    tbody = table.append("tbody");

    // Filter date using datetime
    var filteredDate = tableData.filter(function(date){
        return date.datetime == inputValue});
    console.log(filteredDate)


    //append filtered infomation to show the result
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

}