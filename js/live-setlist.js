function result() {
    var name = document.getElementById("name").value;

    var result = "";
    var resultList = ["NEW ERA", "NEW ERA", "NEW ERA", "NEW ERA"];
    var songList = ["NEW ERA", "NEW ERA", "NEW ERA", "NEW ERA", 
        "Jungle", "Amazing!!!!!!", "Night Train", "Hysteria", "RAM-PAM-PAM",
        "NEW ERA", "NEW ERA", "NEW ERA", "NEW ERA",
        "この星のHIKARI", "BE CRAZY", "IN THE STORM", "JAPONICA STYLE", "Beautiful Life",
        "NEW ERA", "NEW ERA", "NEW ERA", "NEW ERA",
        "\"LAUGH\” IN THE LIFE", "MR. ズドン", "光る、兆し", "Telephone", "NEW WORLD", "Imitation Rain",
        "NEW ERA", "NEW ERA", "NEW ERA", "NEW ERA",
        "You & I", "love u…", "NAVIGATOR", "Lemonade",
        "So Addicted", "Life in color", "NEW ERA", "NEW ERA", "NEW ERA", 
        "NEW ERA"];

    var songSize = songList.length;
    var counter = 0;

    while(counter < 5){
        var j = Math.floor( Math.random() * songSize );
        var t = songList[j];
        console.log(t);

        resultList[counter] = t;
        counter++;

        /*var imitationRandom = Math.floor( Math.random() * resultList.length);
        if (resultList.indexOf(t) < 0) {
            resultList[imitationRandom] = t;
            counter++;
        }
        if (resultList.indexOf("NAVIGATOR") == resultList.lastIndexOf("NAVIGATOR")) {
            break;
        }*/
    }
    
    
    var tweetURL = "https://twitter.com/intent/tweet?text=" 
        + encodeURIComponent(name + "のSixTONESミニライブセットリスト\n\n");

    for (let i = 0; i < resultList.length; i++) {
        result += "<p class='card-text'>" + resultList[i] + "</p>";
        tweetURL += encodeURIComponent(resultList[i] + "\n");
    }

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
    + "のSixTONESミニライブセットリスト</div>"
    + "<div class='card-body'>" + result + "</div></div>"
    + "<div id='tweetSub'>" + subTweetText + "</div>"
    + "<div id='tweet'>" + tweetText + "</div>";
    document.getElementById("result").innerHTML = html;
}
