document.addEventListener( "plusready", function(){
	getPushInfo();
//	alert(1)
    message = document.getElementById("message");
    // 监听点击消息事件
    plus.push.addEventListener( "click", function( msg ) {
        // 判断是从本地创建还是离线推送的消息
        switch( msg.payload ) {
            case "LocalMSG":
                //console.log( "点击本地创建消息启动：" );
            break;
            default:
                //console.log( "点击离线推送消息启动：");
            break;
        }
        // 提示点击的内容
        plus.ui.alert( msg.content );
        // 处理其它数据
        logoutPushMsg( msg );
    }, false );
    // 监听在线消息事件
    plus.push.addEventListener( "receive", function( msg ) {
        if ( msg.aps ) {  // Apple APNS message
            //console.log( "接收到在线APNS消息：" );
        } else {
            //console.log( "接收到在线透传消息：" );
        }
        logoutPushMsg( msg );
    }, false );
}, false );
function clearAllPush(){
    plus.push.clear();
    //console.log( "清空所有推送消息成功！" );
   }
function createLocalPushMsg(){
    var options = {cover:false};
    var str = dateToStr(new Date());
    str += ": 欢迎使用Html5 Plus创建本地消息！";
    plus.push.createMessage( str, "LocalMSG", options );
    //console.log( "创建本地消息成功！" );
    //console.log( "请到系统消息中心查看！" );
    if(plus.os.name=="iOS"){
        //console.log('*如果无法创建消息，请到"设置"->"通知"中配置应用在通知中心显示!');
    }
   }
function listAllPush(){
    var msgs=null;
    switch ( plus.os.name ) {
        case "Android":
        msgs = plus.push.getAllMessage();
        break;
        default:
        break;
    }
    if ( !msgs ) {
        //console.log( "此平台不支持枚举推送消息列表！" );
        return;
    }
    outSet( "枚举消息列表（"+msgs.length+"）：" );
    for ( var i in msgs ) {
        var msg = msgs[i];
        //console.log( i+": "+msg.title+" - "+msg.content );
    }
}
function getPushInfo(){
    var info = plus.push.getClientInfo();
    //console.log( "获取客户端推送标识信息：" );
    //console.log( "token: "+info.token );
    //console.log( "clientid: "+info.clientid );
    //console.log( "appid: "+info.appid );
    //console.log( "appkey: "+info.appkey );
}