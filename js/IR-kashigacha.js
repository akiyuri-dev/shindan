function result() {
    var name = document.getElementById("name").value;

    var result = "";
    var resultList = ["Imitation Rain", "Imitation Rain", "Imitation Rain", 
        "Imitation Rain", "Imitation Rain", "Imitation Rain"];
    var rarityList = ["[N]", "[R]", "[SR]", 
        "[SSR]", "[UR]", "[N]", "[N]", "[R]", "[N]", "[N]", "[N]", "[R]"];
    var songList = ["Fake dreams", "壊れてゆく", "ガラスの薔薇", "時には激しく", "心に降り注ぐ",
        "Shall we play", "this game", "紅に染まるまで", "雨に打たれて", "Dancing in the rain",
        "Till love comes to life", "What\'s meaning of life?", "What\'s the point", 
        "in getting it right", "\'Cause everything is fake", "Everybody breaks", 
        "To keep the faith", "Just say", "Everything breaks", "Price of pain was to blame",
        "Cuts my mind", "like a razor blade", "Breaking down", "I\'m breaking down",
        "Peace of mind is shining down", "Should I play this endless game",
        "戻れない", "時代を振り返る", "流れる時間を止めて", "My friend", 
        "いつかはたどり着くよ", "夢の世界に", "目を閉じて", "翼を広げて",
        "Close your eyes", "飛び立つのさ", "土砂降りの雨の中", "We\’ll fly",
        "夢を求めて"];

    var raritySize = rarityList.length;
    var songSize = songList.length;
    var counter = 0;

    while(counter < 7){
        var j = Math.floor( Math.random() * songSize );
        var t = songList[j];

        var s = Math.floor( Math.random() * raritySize );
        var u = rarityList[s];

        var imitationRandom = Math.floor( Math.random() * resultList.length);
        if (resultList.indexOf(t) < 0) {
            resultList[imitationRandom] = u + t;
        }
        if (resultList.indexOf("Imitation Rain") == resultList.lastIndexOf("Imitation Rain")) {
            resultList[resultList.indexOf("Imitation Rain")] = u + "Imitation Rain";
            break;
        }
    }
    
    
    var tweetURL = "https://twitter.com/intent/tweet?text=" 
        + encodeURIComponent(name + "のImitation Rain / SixTONES歌詞ガチャ結果\n\n");

    for (let i = 0; i < resultList.length; i++) {
        result += "<p class='card-text'>" + resultList[i] + "</p>";
        tweetURL += encodeURIComponent(resultList[i] + "\n");
    }

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
    + "のImitation Rain / SixTONES歌詞ガチャ結果</div>"
    + "<div class='card-body'>" + result + "</div></div>"
    + "<div id='tweetSub'>" + subTweetText + "</div>"
    + "<div id='tweet'>" + tweetText + "</div>";
    document.getElementById("result").innerHTML = html;
}
