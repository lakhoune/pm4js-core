class AlignmentsFitness {
	static apply(eventLog, acceptingPetriNet, activityKey="concept:name") {
		return PetriNetAlignments.apply(eventLog, acceptingPetriNet, activityKey);
	}
	
	static evaluate(alignResults) {
		return alignResults;
	}
}

try {
	require("../../../../pm4js.js");
	require("../../../conformance/alignments/petri_net/algorithm.js");
	module.exports = {AlignmentsFitness: AlignmentsFitness};
	globalThis.AlignmentsFitness = AlignmentsFitness;
}
catch (err) {
	// not in Node
	//console.log(err);
}
