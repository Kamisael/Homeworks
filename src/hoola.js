//Create a function that reverses an array


//Create a function that filters out negative numbers

function filterNegative(array){
        var filteredArray = [];
        for (var i = 0; i < array.length; i++){
            if (array[i] >= 0){
               filteredArray.push(array[i]);
            }
       }
       return filteredArray;
    }