// from data.js
var tableData = data;

// Use D3 to select the table
var table = d3.select("table");


// YOUR CODE HERE!
function createDefault() {
    data.forEach(datas => {
        row = table.append("tr")
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

