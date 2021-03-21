// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Converted to an arrow function
addition = (a, b) => a + b;
doubleAddition = (c, d) => addition(c, d) * 2;