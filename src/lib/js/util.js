/**
 * Created by Administrator on 2017/5/31.
 */
/*
*在路径截取字符串
*/
/*export function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null)
    return unescape(r[2]);
  return null;
}*/

export default{
  install(Vue,options)
  {
    Vue.prototype.getQueryString = function (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null)
        return unescape(r[2]);
      return null;
    };
    Vue.prototype.redirect_uri = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5c634ca93bc68abf&redirect_uri=http%3a%2f%2fningshuihan.ngrok.cc%2fdoctor%2findex.html&response_type=code&scope=snsapi_base&#wechat_redirect';

  }
}


