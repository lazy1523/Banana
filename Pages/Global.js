/**
 * 用于存储一些常用变量，服务器ip及端口,用户信息，自动登录状态
 * 
 *  
 */
var Global = {
    "serverip": "http://192.168.18.29:8080",
    "userinfo": "",
    "username":"用户名",
    "loginflag": 0,
    "refreshinfo": { "startid": 0, "data": [] }
};
function login(){
      var request = new XMLHttpRequest();
      request.onreadystatechange = (e) => {
        if (request.readyState !== 4) {
          return;
        }

        if (request.status === 200) {
          let json=eval('('+request.responseText+')')
          console.log('success', json.success);
          if(json.success){
           this.reMain()
          }
        } else {
          console.warn('error');
        }
      };
      request.open('POST', 'http://192.168.18.29:8080/projectmanage/a/login?username='+loginInfo.username+'&password='+loginInfo.password+'&mobileLogin=true');
      request.send();
};
module.exports = Global;