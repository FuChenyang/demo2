app.controller("commonCtrl",function($scope){
    $scope.menu = [
        {"href":"#/","icon":"ion-ios-chatbubble-outline","on_icon":"ion-ios-chatbubble","name":"微信"},
        {"href":"#/contact","icon":"ion-ios-personadd-outline","on_icon":"ion-ios-personadd","name":"通讯录"},
        {"href":"#/find","icon":"ion-ios-eye-outline","on_icon":"ion-ios-eye","name":"发现"},
        {"href":"#/mine","icon":"ion-ios-person-outline","on_icon":"ion-ios-person","name":"我"},
    ];
    //微信列表
    $scope.userlist_items = [
        { "id": 0, "img" : "images/1.jpg", "name":"Venkman", "description" : "Back off, man. I'm a scientist." },
        { "id": 1, "img" : "images/2.jpg", "name":"Egon", "description" : "We're gonna go full stream." },
        { "id": 2, "img" : "images/3.jpg", "name":"Ray", "description" : "Ugly little spud, isn't he?" },
        { "id": 3, "img" : "images/4.jpg", "name":"Winston", "description" : "That's a big Twinkie." },
        { "id": 4, "img" : "images/5.jpg", "name":"Tully", "description" : "Okay, who brought the dog?" },
        { "id": 5, "img" : "images/1.jpg", "name":"Egon", "description" : "We're gonna go full stream." },
        { "id": 6, "img" : "images/2.jpg", "name":"Dana", "description" : "I am The Gatekeeper!" },
        { "id": 7, "img" : "images/3.jpg", "name":"Slimer", "description" : "Boo!" },
        { "id": 8, "img" : "images/4.jpg", "name":"Egon", "description" : "We're gonna go full stream." },
        { "id": 9, "img" : "images/5.jpg", "name":"Egon", "description" : "We're gonna go full stream." },
        { "id": 10, "img" : "images/1.jpg", "name":"Egon", "description" : "We're gonna go full stream." }
    ];
    //通讯录
    $scope.contact_items = [
        {
            "index" : "A",
            "list" : [
                { "id":1, "img" : "images/1.jpg", "name":"A_A", "description" : "Back off, man. I'm a scientist." },
                { "id": 2, "img" : "images/2.jpg", "name":"A_A", "description" : "We're gonna go full stream." },
                { "id": 3, "img" : "images/3.jpg", "name":"A_A", "description" : "Ugly little spud, isn't he?" },
                { "id": 4, "img" : "images/4.jpg", "name":"A_A", "description" : "That's a big Twinkie." },
                { "id": 5, "img" : "images/5.jpg", "name":"A_A", "description" : "Okay, who brought the dog?" }
            ]
        },
        {
            "index" : "B",
            "list" : [
                { "id": 6, "img" : "images/1.jpg", "name":"B_B", "description" : "Back off, man. I'm a scientist." },
                { "id": 7, "img" : "images/2.jpg", "name":"B_B", "description" : "We're gonna go full stream." },
                { "id": 8, "img" : "images/3.jpg", "name":"B_B", "description" : "Ugly little spud, isn't he?" },
                { "id": 9, "img" : "images/4.jpg", "name":"B_B", "description" : "That's a big Twinkie." },
                { "id": 10, "img" : "images/5.jpg", "name":"B_B", "description" : "Okay, who brought the dog?" }
            ]
        },
        {
            "index" : "C",
            "list" : [
                { "id": 11, "img" : "images/1.jpg", "name":"C_C", "description" : "Back off, man. I'm a scientist." },
                { "id": 12, "img" : "images/2.jpg", "name":"C_C", "description" : "We're gonna go full stream." },
                { "id": 13, "img" : "images/3.jpg", "name":"C_C", "description" : "Ugly little spud, isn't he?" },
                { "id": 14, "img" : "images/4.jpg", "name":"C_C", "description" : "That's a big Twinkie." },
                { "id": 15, "img" : "images/5.jpg", "name":"C_C", "description" : "Okay, who brought the dog?" }
            ]
        }
    ];
})

app.controller("messageCtrl",function($scope){

})
app.controller("contactCtrl",function($scope){
    //把数据从大控制器复制过来
    $scope.items = $scope.contact_items;
})
app.controller("findCtrl",function($scope){})
app.controller("mineCtrl",function($scope){})
app.controller("detailCtrl",function($scope,$stateParams){
        $scope.play=function(){
            $scope.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

            $scope.getUserMedia.call(navigator, {
                video: true,
                audio: true
            }, function(localMediaStream) {
                var video = document.getElementById('video');
                video.src = window.URL.createObjectURL(localMediaStream);
                video.onloadedmetadata = function(e) {
                    console.log("Label: " + localMediaStream.label);
                    console.log("AudioTracks" , localMediaStream.getAudioTracks());
                    console.log("VideoTracks" , localMediaStream.getVideoTracks());
                };
            }, function(e) {
                console.log('Reeeejected!', e);
            });
        }
    console.log($stateParams.id);
    var items = $scope.contact_items;
    for(var i=0;i<items.length;i++){
        for(var j=0;j<items[i].list.length;j++){
            $scope.contact = items[i].list[j];
        }
    }
})
app.controller("settingCtrl",function($scope,$ionicActionSheet){
        $scope.show=function(){
            //下部显示的操作表
            $ionicActionSheet.show({
                titleText:"退出后不会删除任何历史数据",  //提示文字
                destructiveText:"退出登录",   //红色的警告信息
                cancelText:"取消",         //取消按钮
                buttons:[
                    {"text":"分享"},
                    {"text":"QQ"},
                    {"text":"编辑"}
                ],
                cancel:function(){
                    //点击取消时执行的事件
                    console.log("取消");
                },
                destructiveButtonClicked:function(){
                    //点击退出登录时执行的事件
                    window.location.href="http://www.baidu.com"
                },
                buttonClicked:function(i){  //i是多个普通按钮的索引
                    //普通按钮被点击的事件
                    console.log(i)
                }
            })
        }
})
app.controller("settingmessageCtrl",function($scope){})

