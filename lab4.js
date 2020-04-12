
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
		
		}

		

	  div1.appendChild(h2);
	  div1.appendChild(p1);
	  div1.appendChild(p2);
}
// calling the load asset function to load data of the json file from the server.
		loadAsset('https://manjotsinghsaha.github.io/json/upcoming.json', 'json', upcoming);
