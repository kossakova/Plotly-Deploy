var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);


var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);

// The variables a and b are replaced by anElement and anotherElement.
// The first two elements that are compared might be 3 and 2. The variable anElement is assigned to 3, and anotherElement to 2.
// The arrow function performs the subtraction anElement - anotherElement, or 3 - 2.
// Since the result is positive (3 - 2 = 1), the order of the two numbers is reversed.
// The sort()method compares another pair of elements in the array, for example 37 and 39.
// Since 37 - 39 is a negative number, their ordering is kept.
// The process is repeated until the array is sorted.

var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 