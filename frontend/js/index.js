require.config({
    baseUrl: '../js/',
    urlArgs: "v=" +  (new Date()).getTime(),
    paths: {
        jQuery: "http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min",
    }
});

define(['jQuery'], function ($){
    "use strict";
    
    var main = {
        boot: function(){
            alert("1");
        }
    };
    main.boot();
    return main;
});