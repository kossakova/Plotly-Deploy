console.log(cityGrowths);


// cities by population growth from 2016
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

// select only the top five cities
var topSevenCities = sortedCities.slice(0,7);

// an array of city names
var topSevenCityNames = topSevenCities.map(city => city.City);
// an array of corresponding population growths
var topSevenCityGrowths = topSevenCities.map(city => parseInt(city.Increase_from_2016));



// The variable data encloses trace in an array to meet Plotly's format requirement.

var trace = {
    x: topSevenCityNames,
    y: topSevenCityGrowths,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);