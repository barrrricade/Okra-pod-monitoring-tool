// Description: On graphana sets time period, enable Codes and opens dropdown
// Makes pod monitoring easier

//turn on all info/error codes
turnOnCodes = () => {
	console.log('turning on codes')
	document.getElementById('switch-3').click() //Error Codes
	document.getElementById('switch-2').click() //Info Codes
	document.getElementById('switch-1').click() //FW Codes
}

// Change time period
changeTime = (days) => {
	//https://usefulangle.com/post/81/javascript-change-url-parameters
	var url = new URL(window.location.href);
	var search_params = url.searchParams;

	search_params.set('from', `now-${days}d`);

	// change the search property of the main url
	// the new url string
	url.search = search_params.toString();
	var new_url = url.toString();
	console.log(new_url);

	return new_url
}

// Search dropdown by text
// Must type full dropdown text exactly
openDropdown = (text) => {
	console.log(`opening dropdown ${text}`)
	const matches = [];
	for (const atag of document.querySelectorAll('a')) {
		if (atag.textContent.includes(text)) {
			matches.push(atag);
		}
	}
	console.log(matches); 
	matches[matches.length -1].click()
}


let sel = prompt('1. to change datetime, 2. open info')

switch (sel){

case '1':
	let new_url = changeTime('14');
	window.location.href = new_url;
	console.log('Opening new URL')
	break;
case '2':
	turnOnCodes();
	openDropdown("Extra Details")
	openDropdown("Error Codes")
	openDropdown("State of Charge/Health")
	break;
default:
	console.log('exit')
	break;

}

