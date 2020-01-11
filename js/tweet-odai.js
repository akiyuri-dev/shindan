function result() {
    var name = document.getElementById("name").value;

    var result = "";
    var wordList = ["Jungle", "紅", "Amazing!!!!!!", "時間",
        "Hysteria", "雨", "イントロ", "サビ", 
        "RAM-PAM-PAM", "YOSHIKIさん", "YouTube", "Instagram", 
        "Night Train", "染まる", "ラジオ", "テレビ",
        "この星のHIKARI", "ピアノ", "カラオケ",　"ISLAND TV",
        "IN THE STORM", "ギター", "第一印象", "空",
        "Beautiful Life", "ラップ", "友達",　"駅",
        "BE CRAZY", "JAPONICA STYLE", "職場or学校", "コンビニ",
        "\"LAUGH\” IN THE LIFE", "曲名", "レコーディング",
        "MR. ズドン", "光る、兆し", "歌詞", "デビュー",
        "Telephone", "RIDE ON TIME", "好", "CD",
        "NEW WORLD", "愛", "花", "沼",
        "ライブ", "ジェシー", "田中樹", "森本慎太郎", "京本大我", 
        "髙地優吾", "松村北斗", "バカレア", "CHANGE THE ERA -20ix-",
        "Rough \"xxxxxx\"", "TrackONE IMPACT", "ジャニーズJr.", "嬉"];

    var wordSize = wordList.length;
    var j = Math.floor( Math.random() * wordSize );
    result = wordList[j];
    
    var tweetURL = "https://twitter.com/intent/tweet?text=" 
        + encodeURIComponent(name + "さんは" 
        + "「SixTONES」、「Imitation Rain」、「"
        + result
        + "」を含めてツイートしてください");

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
    + "「SixTONES」、「Imitation Rain」、「" + result + "」を含めてツイートしてください</p></div></div>"
    + "<div id='tweetSub'>" + subTweetText + "</div>"
    + "<div id='tweet'>" + tweetText + "</div>";
    document.getElementById("result").innerHTML = html;
}
