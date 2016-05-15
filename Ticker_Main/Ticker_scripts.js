$(document).ready(function () {
        $.getJSON(
        "http://www.reddit.com/r/news.json?jsonp=?",
        function foo(data) {

            var numChildren = data.data.children.length;

            $.each(
              data.data.children.slice(0, numChildren + 1),
              function (i, post) {
                  var urlLink = post.data.url;
                  urlLink = urlLink.replace(/\/$/, '');

                  $("#news-ticker").append('<div id="news-post" class="news__post"> <a href=' + urlLink + '>'+ post.data.title + '</a> &middot </div>');
                  //$("#news-post").append('<br id="post-title">' + post.data.title + '</br>');
                  //$("#reddit-content").append('<br>' + post.data.url);
                  //$("#reddit-content").append('<br>' + post.data.permalink);
                  //$("#reddit-content").append('<br>' + post.data.ups);
                  //$("#reddit-content").append('<br>' + post.data.downs);
                  //$("#reddit-content").append('<hr>');
              }
            )
        }
      )
      //.success(function () { alert("second success"); })
      //.error(function () { alert("error"); })
      //.complete(function () { alert("complete"); })

});