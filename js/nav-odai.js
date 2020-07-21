function result() {
    var name = document.getElementById("name").value;

    var result = "";
    var wordList = ["Jungle", "夜明け", "仕事or勉強", "試聴",
        "Amazing!!!!!!", "時間", "朝",　"夜",
        "Hysteria", "Imitation Rain", "イントロ", "サビ", 
        "RAM-PAM-PAM", "CG", "YouTube", "Instagram", 
        "Night Train", "レーザー", "ラジオ", "テレビ",
        "この星のHIKARI", "ストリングス", "カラオケ",　"ライブ",
        "IN THE STORM", "ハモり", "第一印象", "空",
        "Beautiful Life", "ラップ", "友達",　"駅",
        "BE CRAZY", "JAPONICA STYLE", "職場or学校", "コンビニ",
        "\"LAUGH\” IN THE LIFE", "曲名", "レコーディング",
        "MR. ズドン", "光る、兆し", "歌詞", "デビュー",
        "Telephone", "番組", "好", "CD",
        "NEW WORLD", "愛", "花", "沼",
        "ライブ", "ジェシー", "田中樹", "森本慎太郎", "京本大我", 
        "髙地優吾", "松村北斗", "バカレア", "CHANGE THE ERA -20ix-",
        "Rough \"xxxxxx\"", "TrackONE IMPACT", "ジャニーズJr.", "嬉",
        "Johnny’s World Happy LIVE with YOU", "MV", "love u...", "You & I",
        "アニメ", "謎", "富豪刑事", "バランス", "診断"];

    var wordSize = wordList.length;
    var j = Math.floor( Math.random() * wordSize );
    result = wordList[j];
    
    var tweetURL = "https://twitter.com/intent/tweet?text=" 
        + encodeURIComponent(name + "さんは" 
        + "「SixTONES」、「NAVIGATOR」、「"
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
    + "「SixTONES」、「NAVIGATOR」、「" + result + "」を含めてツイートしてください</p></div></div>"
    + "<div id='tweetSub'>" + subTweetText + "</div>"
    + "<div id='tweet'>" + tweetText + "</div>";
    document.getElementById("result").innerHTML = html;
}
