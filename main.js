const container = document.getElementById('maincontent');
const links= document.getElementsByClassName('aa');
let url = "partials/homepagepartial.html";

const loadcontent = function(v){
	if(v=="index.html")
	{
		url = "partials/homepagepartial.html"

	}
	else if(v=="portfolio.html")
	{
		
		url = "partials/portfoliopagepartial.html"
	}
	else
	{
		console.log('nothing clicked yet');
	}
	
fetch(url)
	.then((response) =>  response.text()
	)
	.then(data => container.innerHTML=data)
	.catch(error => console.log('Error - there is problem in code'))
}

loadcontent()

const selectcontent=function(event){
	event.preventDefault();
	let valofanchor = this.getAttribute('href');
	loadcontent(valofanchor);
	
}

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', selectcontent);
}

