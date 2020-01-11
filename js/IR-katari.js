function result() {
    var name = document.getElementById("name").value;

    var result = "";
    var wordList = ["試聴", "イントロ", "サビ", "YOSHIKIさん", 
        "YouTube", "ラジオ", "テレビ", "ピアノ", "カラオケ",
        "ギター", "第一印象", "今ハマっているポイント", "ラップ",
        "セブンイレブン", "曲名", "レコーディング", "CM",
        "歌詞", "RIDE ON TIME", "CD", "特典",
        "ライブ", "ジェシー", "田中樹", "森本慎太郎", "京本大我", 
        "髙地優吾", "松村北斗", "TrackONE IMPACT",  "感情",
        "ダンス", "衣装", "特に推したいところ", "パフォーマンス"];

    var wordSize = wordList.length;
    var j = Math.floor( Math.random() * wordSize );
    result = wordList[j];
    
    var tweetURL = "https://twitter.com/intent/tweet?text=" 
        + encodeURIComponent(name + "さんは" 
        + "SixTONESのmitation Rainの「"
        + result
        + "」について語ってください");

    var subTweetURL = tweetURL + "&url=" +  encodeURIComponent(window.location.href);

    var tweetText = "<a href='" + tweetURL + 
    "' class='twitter-share-button data-lang='ja' data-show-count='false' target='_brank'>"
    + "<button type='button' class='btn btn-info'>語りツイートをする(URLなし)</button></a>"
    + "<script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>";
 
    var subTweetText = "<a href='" + subTweetURL + 
    "' class='twitter-share-button data-lang='ja' data-show-count='false' target='_brank'>"
    + "<button type='button' class='btn btn-info'>語りツイートをする(URLあり)</button></a>"
    + "<script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>";

    var html = "<div class='card mb-3'><div class='card-header'>" 
    + name 
    + "さんは、SixTONESのImitation Rainの</div>"
    + "<div class='card-body'><p class='card-text'>"
    + "「" + result + "」について語ってください</p></div></div>"
    + "<div id='tweetSub'>" + subTweetText + "</div>"
    + "<div id='tweet'>" + tweetText + "</div>";
    document.getElementById("result").innerHTML = html;
}
