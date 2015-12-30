window.onload = function () {

    document.getElementById("ClickHere").onclick = function loadDoc() {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                main_function(xhttp);
            }
        };
        xhttp.open("GET", "NFL_scores_1.xml", true);
        xhttp.send();
    }

    function main_function(xml) {

        //h=home, a=away
        var i, y;
        var day, time, quarter, hTeam, hMascot, aTeam, aMascot;
        var hscore, aScore, redZone, week, year;
        var xmlDoc = xml.responseXML;

        x = xmlDoc.getElementsByTagName("gms");
        txt = "";

        var week = x[0].getAttribute('w');
        var year = x[0].getAttribute('y');

        x = xmlDoc.getElementsByTagName("g");

        //Parse the data for each game
        for (i = 0; i < x.length; i++)
        {
            //Will have to check if data is there before we check
            day = x[i].getAttribute('d');
            time = x[i].getAttribute('t');
            quarter = x[i].getAttribute('q');
            hTeam = x[i].getAttribute('h');
            hMascot = x[i].getAttribute('hnn');
            hscore = x[i].getAttribute('hs');
            aTeam = x[i].getAttribute('v');
            aMascot = x[i].getAttribute('vnn');
            aScore = x[i].getAttribute('vs');
            redZone = x[i].getAttribute('rz');

            //create main game box
            var divElement = document.createElement('div');
            divElement.setAttribute("id", "game-box");
            divElement.setAttribute("class", "game_css");

            divElement.appendChild(makeDivForData(day, "game-day"));
            divElement.appendChild(makeDivForData(time, "game-time"));
            divElement.appendChild(makeDivForData(quarter, "game-qtr"));
            divElement.appendChild(makeDivForData(hTeam, "home-team"));
            divElement.appendChild(makeDivForData(hMascot, "home-mascot"));
            divElement.appendChild(makeDivForData(hscore, "home-score"));
            divElement.appendChild(makeDivForData(aTeam, "away-team"));
            divElement.appendChild(makeDivForData(aMascot, "away-mascot"));
            divElement.appendChild(makeDivForData(aScore, "game-day"));

            document.getElementById("league").appendChild(divElement);
        }
    }

    function makeDivForData(data, idName)
    {
        var div = document.createElement('div');
        var divText = document.createTextNode(data);
        div.setAttribute("id", idName);
        div.appendChild(divText);

        return div;
    }
}