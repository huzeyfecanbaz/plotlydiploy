Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);
Plotly.newPlot("myPlot",[{x:[2,4,6], y:[6,4,2]}]);

//bar chart
var trace={
    x:['burrito','pizza','chicken'],
    y:[10,18,5],
    type:"bar"
};

var layout={title:"Luncheon Survey", xaxis:{title:"Food Option"},yaxis:{title:"Number of Respondents"}}
Plotly.newPlot("barPlot",[trace],layout);

var trace = [{
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
}];

Plotly.newPlot("plotArea", trace);


//skill drill
var example={
    x:["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y:[22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type:"bar"
};
var label={
    title:"Total Number of orders",
    xaxis:{title:"Drinks"},
    yaxis:{title:"Percent of Drinks"}
};
Plotly.newPlot("skillDrill13",[example],label);

//pie chart
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
       "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
  };
  var data = [trace];
  var layout = {
    title: "'Pie' Chart",
  };
  Plotly.newPlot("plotArea", data, layout);

  //scatter plot
  var trace1={
    x:[1,2,3,4],
    y:[10,15,13,17],
    mode:"markers",
    type:"scatter"
  };
  var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    type: 'scatter'
  };
  var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    type: 'scatter'
  };

  var data=[trace1,trace2,trace3];
  Plotly.newPlot("myDiv",data);

//map() function
var numbers=[0,2,4,6,8];
var addition=numbers.map(function(add){
  return add+5;
});

//map()function to extract a specific property
var cities = [
  {
    "Rank": 1,
    "City": "San Antonio ",
    "State": "Texas",
    "Increase_from_2016": "24208",
    "population": "1511946"
  },
  {
    "Rank": 2,
    "City": "Phoenix ",
    "State": "Arizona",
    "Increase_from_2016": "24036",
    "population": "1626078"
  },
  {
    "Rank": 3,
    "City": "Dallas",
    "State": "Texas",
    "Increase_from_2016": "18935",
    "population": "1341075"
  }
];

var cityNames = cities.map(function(city){
  return city.City;
});
console.log(cityNames);

