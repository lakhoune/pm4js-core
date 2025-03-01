class JsonOcelExporter {
	static apply(ocel) {
		return JsonOcelExporter.exportLog(ocel);
	}
	
	static exportLog(ocel) {
		ocel = Ocel20FormatFixer.apply(ocel);
		return JSON.stringify(ocel);
	}
}

try {
	require('../../../../pm4js.js');
	module.exports = {JsonOcelExporter: JsonOcelExporter};
	globalThis.JsonOcelExporter = JsonOcelExporter;
}
catch (err) {
	// not in node
	//console.log(err);
}

