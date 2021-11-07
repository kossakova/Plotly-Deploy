const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json() method places a call to SpaceX's API
// then() method ensures that the data is received before executing the arrow function.
d3.json(url).then(receivedData => console.log(receivedData));

// retrieve only the first element in the array returned from the API call.
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0]));

// dot notation
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// use the dot notation twice to access the nested property.
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));


// d3.json(url).then(function(data){
//     latitude = data.location.map(smtn => smtn.latitude);
//     console.log(latitude);
// });

