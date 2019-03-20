//  Filter out punctuation/numbers
//  Return words array

var getWords = function(title){
console.log(title)
var words = []
title.forEach(element => {
	var replace = element.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()0-9]/g,'');
	var replace = replace.toLowerCase()
	var replace = replace.trim()
	var replace = replace.split(" ");
	words.push(replace)
});
	return words
}


module.exports = getWords;