var oReq = new XMLHttpRequest();
oReq.open("PUT", "localhost", true);
oReq.onload = function (oEvent) {
	console.log("onload");
};

var blob = new Blob(["abc123"], { type: "text/plain" });

oReq.send(blob);
