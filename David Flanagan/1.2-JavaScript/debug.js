function debug(msg) {

    let log = document.getElementById("debugLog");

    if (!log) {
        log = document.createElement("div"); 
        log.id = "debugLog";   
        log.innerHTML = "<h1>Debug Log</h1>";
        document.body.appendChild(log);
    }
    let pre = document.createElement("pre");
	let text = document.createElement(msg);  
	pre.appendChild(text);                   
	log.appendChild(pre); 
}

