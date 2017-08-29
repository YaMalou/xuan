var consoreWords = ['sad','bad','mad'];
var customCensoredWords = [];

function censor(inStr){
	for(idx in censoreWords) {
		inStr = inStr.replace(censoreWords[idx],'****');
	}
	for(idx in customCensoredWords) {
		inStr = inStr.replace(customCensoredWords[idx],'****');
	}
	return inStr;
}

function addCensoreWord(word) {
	customCensoredWords.push(word);
}

function getCensoreWords(){
	return censoreWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoreWord = addCensoreWord;
exports.getCensoreWords = getCensoreWords;

