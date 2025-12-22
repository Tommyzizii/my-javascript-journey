// forEach() = method used to iterate over the elements of an array and apply a specified function(callback)
// forEach provided element, index, array are provided
let numbers = [2,4,6,8];

numbers.forEach(square);
numbers.forEach(display);

function display(element){
    console.log(element);
}

function square(element, index, array){
    array[index] = element ** 2;
}
