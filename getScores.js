//  Count the word frequency
//  Return object with word counts

var getScores = function(wordsFlat){
var Scores = wordsFlat.reduce(function(count, word) {
	count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1;
		return count;
		}, {});
	return Scores;
	//return scores;
	}
module.exports = getScores;