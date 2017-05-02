$(document).ready(function(){
    var search = getUrl(window.location.href,true).search;
    $.ajax({
        type:"post",
        url:"http://library.geek-scorpion.com/Hesi/getSearchArticle",
        dataType:"json",
        data:{
            search : search
        },
        success:function(result){
            console.dir(result);

            if(result.code == -1){
                alert("访问失败");
            }else if(result.code == 1){
                for(i = 0;i< result.data.length;i++){
                    if(!result.data[i].replay){
                        result.data[i].replay = '';
                    }
                    $("#message-board").append("<a href='showcontent.html?articleid=" + result.data[i].id + "'><div class='message'><h3>"+ result.data[i].title + "</h3><p>   作者:" +
                        result.data[i].author+ "    发布时间：" +
                        result.data[i].createTime+ "</p></div></a>");
                }
            }
        }
    });

});
function getUrl(url, isEncode) {
    url = url || window.location.href;
    var obj = {},
        reg = /([^?&=]+)=([^?&=]+)/g;
    url.replace(reg, function() {
        var arg = arguments;
        obj[arg[1]] = isEncode ? decodeURIComponent(arg[2]) : arg[2];
    });
    return obj;
}