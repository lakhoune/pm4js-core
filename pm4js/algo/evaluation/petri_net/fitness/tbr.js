class TbrFitness {
	static apply(eventLog, acceptingPetriNet, activityKey="concept:name") {
		return TokenBasedReplay.apply(eventLog, acceptingPetriNet, activityKey);
	}
	
	static evaluate(tbrResults) {
		return tbrResults;
	}
}

try {
	require("../../../../pm4js.js");
	require("../../../conformance/tokenreplay/algorithm.js");
	module.exports = {TbrFitness: TbrFitness};
	globalThis.TbrFitness = TbrFitness;
}
catch (err) {
	// not in Node
	//console.log(err);
}
