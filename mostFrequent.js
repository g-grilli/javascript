string = "to be or not to be is not or is not";

function words(str) { 
    return str.split(" ").reduce(function(count, word) {
      count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1;
      
      return count;
    }, {});

}

words(string); 

{ to: 2, be: 2, or: 1, not: 1 }


var best = words(string);

