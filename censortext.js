var consoreWords = ['sad','bad','mad'];
var customCensoredWords = [];

function censor(inStr){
	for(idx in consoreWords) {
		inStr = inStr.replace(consoreWords[idx],'****');
	}
	for(idx in customCensoredWords) {
		inStr = inStr.replace(customCensoredWords[idx],'****');
	}
	return inStr;
}

function addCensoreWord(word) {
	customCensoredWords.push(word);
}

function getCensoreWords(data){
	return consoreWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoreWord = addCensoreWord;
exports.getCensoreWords = getCensoreWords;

