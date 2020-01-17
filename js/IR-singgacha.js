function result() {
    var name = document.getElementById("name").value;

    var result = "";
    var resultList = ["「NEW WORLD」", "「Imitation Rain」", "「Telephone」"];
    var resultSize = resultList.length;

    for(let i = resultSize - 1; i > 0; i--){
        var j = Math.floor( Math.random() * (i + 1) );
        var t = resultList[i];

        resultList[i] = resultList[j];
        resultList[j] = t;
    }

    var menberList = ["ジェシーから", "京本大我から", "髙地優吾から", 
        "田中樹から", "森本慎太郎から", "松村北斗から"];

    var menberSize = menberList.length;

    for(let i = 0; i < resultSize; i++){
        var j = Math.floor( Math.random() * menberSize );
        var t = menberList[j];

        var imitationTmp = resultList[i];
        resultList[i] = t + imitationTmp;
    }
    
    
    var tweetURL = "https://twitter.com/intent/tweet?text=" 
        + encodeURIComponent(name + "はImitation Rain / SixTONES通常盤収録曲のうち\n");

    for (let i = 0; i < resultList.length; i++) {
        result += "<p class='card-text'>" + resultList[i] + "</p>";
        tweetURL += encodeURIComponent(resultList[i] + "\n");
    }

    tweetURL += encodeURIComponent("を歌ってもらえます");

    var subTweetURL = tweetURL + "&url=" +  encodeURIComponent(window.location.href);

    var tweetText = '<a href="' + tweetURL + 
    '" class="twitter-share-button" data-lang="ja" data-show-count="false" target="_brank">'
    + "<button type='button' class='btn btn-info'>結果をツイート(URLなし)</button></a>"
    + "<script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>";
 
    var subTweetText = '<a href="' + subTweetURL + 
    '" class="twitter-share-button" data-lang="ja" data-show-count="false" target="_brank">'
    + "<button type='button' class='btn btn-info'>結果をツイート(URLあり)</button></a>"
    + "<script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>";

    var html = "<div class='card mb-3'><div class='card-header'>" 
    + name 
    + "はImitation Rain / SixTONES通常盤収録曲のうち</div>"
    + "<div class='card-body'>" + result 
    + "</div><div class='card-footer'>を歌ってもらえます</div></div></div>"
    + "<div id='tweetSub'>" + subTweetText + "</div>"
    + "<div id='tweet'>" + tweetText + "</div>";
    document.getElementById("result").innerHTML = html;
}
