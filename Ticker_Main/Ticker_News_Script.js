$(document).ready(function () {
        $.getJSON(
        "http://www.reddit.com/r/news.json?jsonp=?",
        function foo(data) {

            var numChildren = data.data.children.length;
            var dataSize = 0;

            $.each(
              data.data.children.slice(0, numChildren + 1),
              function (i, post) {
                  var urlLink = post.data.url;
                  
                  //It was causing some kind of issue with displaying,
                  //so we had to take out the "/\/$/" from the string
                  urlLink = urlLink.replace(/\/$/, '');
                  dataSize += post.data.title.length;

                  $("#news-ticker").append('<div id="news-post" class="news__post"> <a href=' + urlLink + '>'+ post.data.title + '</a> &middot </div>');
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