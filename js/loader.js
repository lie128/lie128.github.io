var canvas = document.getElementById("myCanvas");
var stage = new createjs.Stage(canvas);

var manifest;
var preload;
var progressText = new createjs.Text("", "20px Arial", "#dd4814");
progressText.x = 125 - progressText.getMeasuredWidth() / 2;
progressText.y = 20;
stage.addChild(progressText);
stage.update();

//定义相关JSON格式文件列表
function setupManifest() {
    manifest = [{
        src:  "http://cdn.gbtags.com/EaselJS/0.7.1/easeljs.min.js", 
        id: "easeljs"
    }, {
        src: "http://www.gbtags.com/gb/networks/uploadimgthumb/4d8f3f13-89c0-455c-95f3-ba5120c2f123.jpg",
        id: "logo"
    }, {
        src:  "http://www.gbtags.com/tutorials/html5-tutorial/html5-demos/assets/song.ogg",
        id: "audiofile"
    }

    ];
    for(var i=1;i<=10;i++)
        manifest.push({src:"http://www.gbtags.com/gb/laitu/200x200"})
}

//开始预加载
function startPreload() {
    preload = new createjs.LoadQueue(true);
    //注意加载音频文件需要调用如下代码行
    preload.installPlugin(createjs.Sound);         
    preload.on("fileload", handleFileLoad);
    preload.on("progress", handleFileProgress);
    preload.on("complete", loadComplete);
    preload.on("error", loadError);
    preload.loadManifest(manifest);

}

//处理单个文件加载
function handleFileLoad(event) {
    console.log("文件类型: " + event.item.type);
    if(event.item.id == "logo"){
        console.log("logo图片已成功加载");
    }
}

//处理加载错误：大家可以修改成错误的文件地址，可在控制台看到此方法调用
function loadError(evt) {
    console.log("加载出错！",evt.text);
}

//已加载完毕进度 
function handleFileProgress(event) {
    progressText.text = "已加载 " + (preload.progress*100|0) + " %";
    stage.update();
}

//全度资源加载完毕
function loadComplete(event) {
    console.log("已加载完毕全部资源");
}

setupManifest();
startPreload();