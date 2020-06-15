function result() {
    var name = document.getElementById("name").value;

    var result = "";
    var resultList = ["「NAVIGATOR」", "「love you...」", "「You & I」", 
        "「光る、兆し」", "「JAPONICA STYLE」", "「Hysteria」"];
    var resultSize = resultList.length;

    for(let i = resultSize - 1; i > 0; i--){
        var j = Math.floor( Math.random() * (i + 1) );
        var t = resultList[i];

        resultList[i] = resultList[j];
        resultList[j] = t;
    }

    var colorList = ["紅の", "蒼穹の", "漆黒の", 
        "純白の", "夕闇の", "暁の", "真紅の", "紺碧の", "白銀の", "黄金の", "蒼白の", "新緑の"
        , "薄紅の"];
    var weaponList = ["短剣", "片手剣", "両手剣", "斧", "鈍器",
        "弓", "杖", "魔道書", "槍", "薙刀",
        "爪（ナックル）", "鞭", "笛", 
        "手裏剣", "銃", "忍者刀", 
        "魔法", "十手", "棍棒", "細剣（レイピア）",
        "ハンマー", "チェーン", "バール", "鉄扇",
        "紐（ワイヤー）", "ロケットランチャー",
        "トンファー", "竪琴", "ヌンチャク", "大鎌"];

    var colorSize = colorList.length;
    var weaponSize = weaponList.length;

    for(let i = 0; i < 3; i++){
        var j = Math.floor( Math.random() * weaponSize );
        var t = weaponList[j];

        var s = Math.floor( Math.random() * colorSize );
        var u = colorList[s];

        var imitationTmp = resultList[i];
        if (i === 0) {
            resultList[i] = "メイン：" + u + t + imitationTmp;
        }else if (i === 1) {
            resultList[i] = "サブ：" + u + t + imitationTmp;
        }else{
            resultList[i] = "奥の手：" + u + t + imitationTmp;
        }
    }
    
    
    var tweetURL = "https://twitter.com/intent/tweet?text=" 
        + encodeURIComponent(name + "のSixTONES / NAVIGATOR武器\n\n");

    for (let i = 0; i < 3; i++) {
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
    + "のSixTONES / NAVIGATOR武器</div>"
    + "<div class='card-body'>" + result + "</div></div>"
    + "<div id='tweetSub'>" + subTweetText + "</div>"
    + "<div id='tweet'>" + tweetText + "</div>";
    document.getElementById("result").innerHTML = html;
}
