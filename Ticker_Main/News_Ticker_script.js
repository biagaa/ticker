$(document).ready(function () {
	NewsMain();
});

//Main function
function NewsMain(){
	$.getJSON("http://www.reddit.com/r/news.json?jsonp=?", function PassData(jsonData){
		ParseRedditData(jsonData)	
		}
	);
}
//----------------------------REDDIT NEWS FUNCTIONS----------------------------

//Parses a reddit JSON data
function ParseRedditData(data)
{
	//Number of reddit posts
	var numChildren = data.data.children.length;
	var dataSize = 0;
	
	//interate through the data
	for(i=0; i<numChildren; i++)
	{	
		AppendNewsPost(data.data.children[i]);
		dataSize += data.data.children[i].data.title.length;
	}
	
	SetScrollDuration(dataSize, "news");
}

function ParseNFLData(data)
{
	var numGames = data.gms.length;
	var week = data.w;
	var dataSize = 0;
	
	for(i=0; i<numGames; i++)
	{
		AppendNFLGame(data.gms[i]);
		
		//data size will be determined by how
		//big each game box by number of games
		//TODO: dataSize = game box demension * numGames
	}
}

//Set the amount of time the ticker scrolls
function SetScrollDuration(size, type)
{
	var time = size / 150;
	var duration = time + 's';
	
	if(type === "news")
	{
		$("#news-ticker").children("*").css("-webkit-animation-duration", duration);
	}
}

//Appends HTML code the HTML document
function AppendNewsPost(post)
{
	//Grabbing url and getting rid of unwanted characters
	var urlLink = post.data.url;
	urlLink = urlLink.replace(/\/$/, '');

	$("#news-ticker").append('<div id="news-post" class="news__post"> <a href=' + urlLink + '>'+ post.data.title + '</a> &middot </div>');
}

function AppendNFLGame(game)
{
	//Home team
	var hScore = game.hs;
	var hTeam = game.h;
	var hTeamName = game.hnn;
	
	//Away team
	var aScore = game.vs;
	var aTeam = game.v;
	var aTeamName = game.vnn;
	
	//Game info
	var gDay = game.d;
	var gRedZone = game.rz;
	var gKickOff = game.t;
	var gQuarter = game.q;
	
	//Have to test this
	if(game.hasOwnProperty('k'))
	{
		var gTime = game.k;
	}
	if(game.hasOwnProperty('p'))
	{
		var gPos = game.p;
	}
	
	//Create a game box and append
	
	//Append data to game box
}

//Test function 
function TestAlert(testData)
{
	alert("Hello! I am an alert box!");
}
