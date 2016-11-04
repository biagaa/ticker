$(document).ready(function () {
    $.getJSON(
    "http://www.nfl.com/liveupdate/scorestrip/ss.json",
    function foo(data) {

        var numGames = data.gms.length;
        var dataSize = 0;

        $.each(
          data.gms.slice(0, numGames + 1),
          function (i, post) {
              //var urlLink = post.data.url;
              //urlLink = urlLink.replace(/\/$/, '');
              //dataSize += post.data.title.length;
              var homeTeam = post.h;
              var visTeam = post.v;
              var homeScore = post.hs;
              var visScore = post.vs;

              $("#nfl-ticker").append('<div id="game-box" class="game_box"></div>');
              $("#game-box").append('<div id="team-info" class="team_info"></div>');
              $("#team-info").append('<div id="home-team" class="home_team"></div>');
              $("#team-info").append('<div id="visitor-team" class="visitor_team"></div>');
              $("#team-info").append('<div id="home-score" class="home_score"></div>');
              $("#team-info").append('<div id="visitor-score" class="visitor_score"></div>');
              //$("#game-box").append('<div id="time-info" class="time_info"></div>');

              //$("#news-ticker").append('<div id="news-post" class="news__post"> <a href=' + urlLink + '>' + post.data.title + '</a> &middot </div>');
              //$("#news-post").append('<br id="post-title">' + post.data.title + '</br>');
              //$("#reddit-content").append('<br>' + post.data.url);
              //$("#reddit-content").append('<br>' + post.data.permalink);
              //$("#reddit-content").append('<br>' + post.data.ups);
              //$("#reddit-content").append('<br>' + post.data.downs);
              //$("#reddit-content").append('<hr>');
          }
        )

        var time = dataSize / 12;
        var duration = time + 's';

        $("#news-ticker").children("*").css("-webkit-animation-duration", duration);
    }
  )
    //.success(function () { alert("second success"); })
    //.error(function () { alert("error"); })
    //.complete(function () { alert("complete"); })

});