
// This will redirct to login page
function logIn() {
	window.location = "login.html"
}


// This will check if the username and password field in login page is empty or not
function validate() {
	var username = document.getElementById("email-address");
	var pass = document.getElementById("password");

	if (username.value == "" || pass.value == "") {
		alert("No blanks allowed");
		return false;
	}
	else {
		alert("Thanks for Signing In");
		return true;
	}
}


// This is for the upcoming games page.
function loadAsset(url, type, callback) 
{
	fetch(url)
	.then(function (response)
	{
		  response.json()
		.then(function(upcoming)
		  {
			callback(upcoming);
		});
	 });
}

function upcoming(jsonObj) {
	let upcoming = jsonObj.upcoming;
	
	for (let i = 0; i < upcoming.length; i++) {

		let h2 = document.createElement('h2');
		let p1 = document.createElement('p');
		let p2 = document.createElement('p');

		let h2text = document.createTextNode(upcoming[i].Name);
		let p1text = document.createTextNode("Release Date: " + upcoming[i].Date);
		let p2text = document.createTextNode("Type : " + upcoming[i].Type);

		h2.appendChild(h2text);
		p1.appendChild(p1text);
		p2.appendChild(p2text);

		div1.appendChild(h2);
	  	div1.appendChild(p1);
	  	div1.appendChild(p2);  	
	}	
}
loadAsset('https://manjotsinghsaha.github.io/json/upcoming.json', 'json', upcoming);




