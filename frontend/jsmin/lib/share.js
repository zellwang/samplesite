!function(){function e(){return t(location.search,"?","&")}function t(e,t,n){var r,i,s,o=e.replace(t,"").split(n),u={};for(r=0,i=o.length;i>r;r++)s=o[r].split("="),u[s[0]]=s[1];return u}window.shaketv||(window.shaketv={}),shaketv.wxShare=function(t,n,r,i){function s(){var s,o;return i||(-1==window.location.href.indexOf(".qq.com")?i=window.location.href:(s=e(),i="http://yao.qq.com/tv/entry?redirect_uri={#r#}&cb41faa22e731e9b={#cb41faa22e731e9b#}",i=i.replace("{#r#}",encodeURIComponent(window.location.href)).replace("{#cb41faa22e731e9b#}",s.cb41faa22e731e9b))),t||(o=document.getElementsByTagName("IMG"),o.length&&(t=encodeURIComponent(o[0].src))),{img_url:t,link:i,desc:r,title:n}}var o=function(){WeixinJSBridge.on("menu:share:appmessage",function(){WeixinJSBridge.invoke("sendAppMessage",s(),function(){})}),WeixinJSBridge.on("menu:share:timeline",function(){WeixinJSBridge.invoke("shareTimeline",s(),function(){})}),WeixinJSBridge.on("menu:share:weibo",function(){var e=s();e={url:e.link,content:"【"+e.title+"】"+" "+e.desc+" "+e.link,img_url:e.img_url},WeixinJSBridge.invoke("shareWeibo",e,function(){})}),WeixinJSBridge.on("menu:share:facebook",s(),function(){}),WeixinJSBridge.on("menuItem:share:qq",function(){WeixinJSBridge.invoke("shareQQ",s(),function(){})})};window.WeixinJSBridge?o():document.addEventListener("WeixinJSBridgeReady",o,!1)}}();