
var getWordsFlat = function(words){
	
	return words.reduce((acc, current) => {
		return acc.concat(current);
	}, []);

}


module.exports = getWordsFlat;