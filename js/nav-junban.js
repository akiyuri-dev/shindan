function result() {
    var name = document.getElementById("name").value;

    var result = "";
    var resultList = ["NAVIGATOR", "Hysteria", "You & I", "love u…"];

    var resultSize = resultList.length;
    var counter = 0;

    for(let i = resultSize - 1; i > 0; i--){
        var j = Math.floor( Math.random() * (i + 1) );
        var t = resultList[i];

        resultList[i] = resultList[j];
        resultList[j] = t;
    }
    
    
    var tweetURL = "https://twitter.com/intent/tweet?text=" 
        + encodeURIComponent(name + "のNAVIGATOR通常盤収録のSixTONESの楽曲は");

    var tweetURLText = "";

    for (let i = 0; i < resultList.length; i++) {
        result += "<p class='card-text'>" + resultList[i] + "</p>";
        tweetURLText += resultList[i] + "、";
    }

    result += "<p class='card-text'>の順番でした</p>";
    tweetURLText = tweetURLText.slice(0, -1);
    tweetURL += encodeURIComponent(tweetURLText) + encodeURIComponent("の順番でした");

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
    + "のNAVIGATOR通常盤収録のSixTONESの楽曲は</div>"
    + "<div class='card-body'>" + result + "</div></div>"
    + "<div id='tweetSub'>" + subTweetText + "</div>"
    + "<div id='tweet'>" + tweetText + "</div>";
    document.getElementById("result").innerHTML = html;
}
