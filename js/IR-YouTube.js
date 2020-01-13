function result() {
    var name = document.getElementById("name").value;

    var result = "";
    var wordList = ["Jungle", "Amazing!!!!!!", "Night Train", "Hysteria", "RAM-PAM-PAM",
        "この星のHIKARI", "BE CRAZY", "IN THE STORM", "JAPONICA STYLE", "Beautiful Life",
        "\"LAUGH\” IN THE LIFE", "MR. ズドン", "光る、兆し", "Telephone", "NEW WORLD"];

    var wordSize = wordList.length;
    var j = Math.floor( Math.random() * wordSize );
    result = wordList[j];
    
    var tweetURL = "https://twitter.com/intent/tweet?text=" 
        + encodeURIComponent(name + "さんは" 
        + "SixTONESのImitation Rainと"
        + result
        + "を聴いてください");

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
    + "さんは</div>"
    + "<div class='card-body'><p class='card-text'>"
    + "SixTONESのImitation Rainと" + result + "を聴いてください</p></div></div>"
    + "<div id='tweetSub'>" + subTweetText + "</div>"
    + "<div id='tweet'>" + tweetText + "</div>";
    document.getElementById("result").innerHTML = html;
}
