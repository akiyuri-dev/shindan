function result() {
    var name = document.getElementById("name").value;

    var result = "";
    var wordList = [ "ジェシー", "田中樹", "森本慎太郎", "京本大我", 
        "髙地優吾", "松村北斗","全員", "きょもほく", "京ジェ", "ゆごほく",
        "末ズ", "ゆごジェ", "きょもじゅり", "きょもしん", "きょもゆご", 
        "ゆごじゅり", "ほくじゅり", "J2", "しんじゅり", "ゆごしん", "ほくジェ", 
        "ほくしん", "ジェシー", "田中樹", "森本慎太郎", "京本大我", 
        "髙地優吾", "松村北斗", "ジェシー", "田中樹", "森本慎太郎", "京本大我", 
        "髙地優吾", "松村北斗", "ジェシー", "田中樹", "森本慎太郎", "京本大我", 
        "髙地優吾", "松村北斗"];

    var wordSize = wordList.length;
    var j = Math.floor( Math.random() * wordSize );
    result = wordList[j];
    
    var tweetURL = "https://twitter.com/intent/tweet?text=" 
        + encodeURIComponent(name + "さんの" 
        + "NAVIGATORはSixTONESの"
        + result
        + "です");

    var subTweetURL = tweetURL + "&url=" +  encodeURIComponent(window.location.href);

    var tweetText = "<a href='" + tweetURL + 
    "' class='twitter-share-button data-lang='ja' data-show-count='false' target='_brank'>"
    + "<button type='button' class='btn btn-info'>ツイートする(URLなし)</button></a>"
    + "<script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>";
 
    var subTweetText = "<a href='" + subTweetURL + 
    "' class='twitter-share-button data-lang='ja' data-show-count='false' target='_brank'>"
    + "<button type='button' class='btn btn-info'>ツイートする(URLあり)</button></a>"
    + "<script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>";

    var html = "<div class='card mb-3'><div class='card-header'>" 
    + name 
    + "さんの</div>"
    + "<div class='card-body'><p class='card-text'>"
    + "NAVIGATORはSixTONESの" + result + "です</p></div></div>"
    + "<div id='tweetSub'>" + subTweetText + "</div>"
    + "<div id='tweet'>" + tweetText + "</div>";
    document.getElementById("result").innerHTML = html;
}
