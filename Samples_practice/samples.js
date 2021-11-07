// const url = "https://api.spacexdata.com/v2/launchpads";

// // d3.json() method places a call to SpaceX's API
// // then() method ensures that the data is received before executing the arrow function.
// d3.json(url).then(receivedData => console.log(receivedData));

// // retrieve only the first element in the array returned from the API call.
// d3.json(url).then(spaceXResults =>
//     console.log(spaceXResults[0]));

// // dot notation
// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// // use the dot notation twice to access the nested property.
// d3.json(url).then(spaceXResults =>
//     console.log(spaceXResults[0].location.latitude));


// // d3.json(url).then(function(data){
// //     latitude = data.location.map(smtn => smtn.latitude);
// //     console.log(latitude);
// // });



// exploring the data
d3.json("samples.json").then(function(data){
    console.log(data);
});

// exporting wfreq
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// descending wfreq
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
    person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

// filtering out null values for wfreq
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b- a);
    filteredWfreq = wfreq.filter(element => element  !== null);
    console.log(filteredWfreq);
});

// extract sample of the first person 
d3.json("samples.json").then(function(data){
    sample = data.samples[0];
    console.log(sample);
});
// or use the Object.entries() method to return each key-value pair in an array
// d3.json("samples.json").then(function(data){
//     sample = data.samples[0];
//     Object.entries(sample).forEach(([key,value]) =>
//     {console.log(key + ": " + value);});
// });


// EXAMPLE The Object.entries() method returns key-value pairs of an object as arrays.
researcher1 = {
    name: 'Roza',
    age: 34,
    hobby: 'Hiking'
};

console.log(Object.entries(researcher1));

// researcher1.forEach(([first, second]) => console.log(first
//     + ": " + second));

// print all the metadata of the first person 
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key,value]) =>
    {console.log(key + ": " + value);});
});