$.getJSON('https://raw.githubusercontent.com/choongwonl/Tistory-emoji/master/emoji.json', function(emoji_list) {
    var content;
    for(var i = 0; i < emoji_list.length; i++){
        content = article.innerHTML;
        var emoji_dic = emoji_list[i];
        var emoji_to_change = new RegExp(emoji_dic.emoji, "g");
        var emoji_changed = emoji_dic.unicode
        if(content.includes(emoji_dic.emoji)) {
            article.innerHTML = content.replace(emoji_to_change, emoji_changed);
        }
    };
});