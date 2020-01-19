function result() {
    var name = document.getElementById("name").value;

    var result = "";
    var songList = ["Imitation Rain", "Telephone", "NEW WORLD"];
    var songSize = songList.length;
    var resultList = ["", "", "", "", ""];

    var resultSize = resultList.length;
    
    var tweetURL = "https://twitter.com/intent/tweet?text=" 
        + encodeURIComponent(name + "はImitation Rain通常盤収録のSixTONESの楽曲を\n");

    var tweetURLText = "";

    for (let i = 0; i < resultSize; i++) {
        var j = Math.floor( Math.random() * songSize );
        resultList[i] = songList[j];
        result += "<p class='card-text'>" + resultList[i] + "</p>";
        tweetURLText += resultList[i] + "\n";
    }

    result += "<p class='card-text'>の順番で歌いましょう</p>";
    tweetURL += encodeURIComponent(tweetURLText) + encodeURIComponent("の順番で歌いましょう");

    var subTweetURL = tweetURL + "&url=" +  encodeURIComponent(window.location.href);

    var tweetText = "<a href='" + tweetURL + 
    "' class='twitter-share-button data-lang='ja' data-show-count='false' target='_brank'>"
    + "<button type='button' class='btn btn-info'>結果をツイート(URLなし)</button></a>"
    + "<script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>";
 
    var subTweetText = "<a href='" + subTweetURL + 
    "' class='twitter-share-button data-lang='ja' data-show-count='false' target='_brank'>"
    + "<button type='button' class='btn btn-info'>結果をツイート(URLあり)</button></a>"
    + "<script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>";

    var html = "<div class='card mb-3'><div class='card-header'>" 
    + name 
    + "のImitation Rain通常盤収録のSixTONESの楽曲は</div>"
    + "<div class='card-body'>" + result + "</div></div>"
    + "<div id='tweetSub'>" + subTweetText + "</div>"
    + "<div id='tweet'>" + tweetText + "</div>";
    document.getElementById("result").innerHTML = html;
}
