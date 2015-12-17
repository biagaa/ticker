window.onload = function () {

    document.getElementsByClassName("ClickHere").onclick = function loadDoc() {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                myFunction(xhttp);
            }
        };
        xhttp.open("GET", "NFL_scores_1.xml", true);
        xhttp.send();


        function myFunction(xml) {

            //h=home, a=away
            var i;
            var day, time, quarter, hTeam, hMascot, aTeam, aMascot;
            var hscore, aScore, redZone, week, year;
            var xmlDoc = xml.responseXML;
            //var table = "<tr><th>Artist</th><th>Title</th></tr>";

            x = xmlDoc.getElementsByTagName("gms");
            txt = "";

            var week = x[0].getAttribute('w');
            var year = x[0].getAttribute('y');

            x = xmlDoc.getElementsByTagName("g");

            for (i = 0; i < x.length; i++) {
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

                document.getElementsByClassName("game-opp").innerHTML = hTeam;
                document.getElementsByClassName("score-opp").innerHTML = hscore;
                document.getElementsByClassName("game-at").innerHTML = aTeam;
                document.getElementsByClassName("score-at").innerHTML = aScore;
            }
        }
    }

    //function myFunction(xml) {

    //    //h=home, a=away
    //    var i;
    //    var day, time, quarter, hTeam, hMascot, aTeam, aMascot;
    //    var hscore, aScore, redZone, week, year;
    //    var xmlDoc = xml.responseXML;
    //    //var table = "<tr><th>Artist</th><th>Title</th></tr>";

    //    x = xmlDoc.getElementsByTagName("gms");
    //    txt = "";

    //    var week = x[0].getAttribute('w');
    //    var year = x[0].getAttribute('y');

    //    x = xmlDoc.getElementsByTagName("g");

    //    for (i = 0; i < x.length; i++) {
    //        day = x[i].getAttribute('d');
    //        time = x[i].getAttribute('t');
    //        quarter = x[i].getAttribute('q');
    //        hTeam = x[i].getAttribute('h');
    //        hMascot = x[i].getAttribute('hnn');
    //        hscore = x[i].getAttribute('hs');
    //        aTeam = x[i].getAttribute('v');
    //        aMascot = x[i].getAttribute('vnn');
    //        aScore = x[i].getAttribute('vs');
    //        redZone = x[i].getAttribute('rz');

    //        document.getElementsByClassName("game-opp").innerHTML = hTeam;
    //        document.getElementsByClassName("score-opp").innerHTML = hscore;
    //        document.getElementsByClassName("game-at").innerHTML = aTeam;
    //        document.getElementsByClassName("score-at").innerHTML = aScore;
    //    }
    //}
}