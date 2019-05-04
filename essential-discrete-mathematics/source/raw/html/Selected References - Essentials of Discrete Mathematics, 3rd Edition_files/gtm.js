
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"205",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.hostname.match(\/(([^.\\\/]+\\.[^.\\\/]{2,3}\\.[^.\\\/]{2})|(([^.\\\/]+\\.)[^.\\\/]{2,4}))(\\\/.*)?$\/)[1];return a=a.toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return window.top!==window.self}catch(a){return!1}})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"VPUrl"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",2],8,16],".replace(\"\/conferences.oreilly.com\",\"\")})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formSuccessURL"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";if(void 0!=a\u0026\u0026\"\"!=a\u0026\u0026null!=a)return a;if(2==",["escape",["macro",5],8,16],".split(\"\/\").length\u0026\u0026!",["escape",["macro",5],8,16],".endsWith(\".html\")){if(-1\u003C",["escape",["macro",6],8,16],".indexOf(\"?\")\u0026\u00260\u003E",["escape",["macro",6],8,16],".indexOf(\"\/?\"))return ",["escape",["macro",5],8,16],"+\"\/?\"+",["escape",["macro",6],8,16],".split(\"?\")[1];if(!(-1\u003C",["escape",["macro",6],8,16],".indexOf(\"\/?\")))return ",["escape",["macro",5],8,16],"+\"\/\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){var c=\/www.oreilly.com\\\/member\\\/(register|login|reset-password|profile)?\\\/?(\\?(.*))?$\/i,d=\/linkedin\\.com\\\/(oauth\\\/v(.*)\\\/login-success|uas\\\/login|uas\\\/oauth2\\\/authorization)\\\/?(\\?(.*))?$\/i,e=\/facebook\\.com\\\/(login\\.php|v(.*)\\\/dialog\\\/oauth(.*))\/i,f=\/api\\.twitter\\.com\\\/oauth\\\/(authorize|authenticate)\\\/?(\\?(.*))?$\/i,g=\/accounts\\.google\\.(.*)\\\/(signin\\\/oauth\\\/consent|accounts\\\/SetSID|signin\\\/oauth\\\/oauthchooseaccount)(\\?(.*))?$\/i,a=document.referrer;(c.test(a)||d.test(a)||\ne.test(a)||f.test(a)||g.test(a))\u0026\u0026b.set(\"referrer\",null)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(-1\u003Cdocument.location.href.indexOf(\"www.safaribooksonline.com\"))return\"oreilly.com\";if(-1\u003Cdocument.location.href.indexOf(\"oreilly.com\"))return\"www.safaribooksonline.com\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){max=100;min=1;return Math.floor(Math.random()*(max-min+1))+min})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",11],8,16],";switch(a){case \"start\":return\"play\";case \"progress\":return\"\"+",["escape",["macro",12],8,16],"+\"%\"}})();"]
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_customUrlSource":["macro",6],
      "vtp_queryKey":"subscribed",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"amt",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.year"
    },{
      "function":"__remm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*\\.oreilly\\.com.*schedule\\\/(grid|full|presentations|stype|stopic|proceedings).*","value","Schedule"],["map","key",".*\\.oreilly\\.com.*schedule\\\/speaker.*","value","Speakers"],["map","key",".*\\.oreilly\\.com.*public\\\/register.*","value","Registration"],["map","key",".*\\.oreilly\\.com.*user\\\/account.*","value","User Info"],["map","key",".*\\.oreilly\\.com.*\\\/hotel.*","value","Venue, travel, and hotel"],["map","key",".*\\.oreilly\\.com.*schedule\\\/detail\\\/.*","value","Sessions, Tutorials, Keynotes"],["map","key",".*\\.oreilly\\.com.*users\\\/sign_in.*","value","Sign In or Create a New Account"],["map","key",".*\\.oreilly\\.com.*\\\/sponsors.*","value","Sponsors"],["map","key",".*\\.oreilly\\.com.*\\\/about.*","value","About"],["map","key",".*\\.oreilly\\.com.*\\\/resources.*","value","Resources"],["map","key",".*\\.oreilly\\.com.*\\\/(cfp|proposal|reviewing).*","value","CFP"]]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.franchise"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.location"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"businessLine"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"paymentMethod"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^.*conferences.oreilly.com\\\/(strata($|\\\/|\\?).*)","value","UA-112091926-2"],["map","key","^.*conferences.oreilly.com\\\/(software-?architecture($|\\\/|\\?).*)","value","UA-112091926-3"],["map","key","^.*conferences.oreilly.com\\\/(artificial-intelligence($|\\\/|\\?).*)","value","UA-112091926-4"],["map","key","^.*ai.oreilly.com.cn\\\/ai-cn(\\\/?|(.*))$","value","UA-112091926-4"],["map","key","^.*conferences.oreilly.com\\\/(velocity($|\\\/|\\?).*)","value","UA-112091926-5"],["map","key","^.*conferences.oreilly.com\\\/(fluent($|\\\/|\\?).*)","value","UA-112091926-6"],["map","key","^.*conferences.oreilly.com\\\/(oscon($|\\\/|\\?).*)","value","UA-112091926-7"],["map","key","^.*conferences.oreilly.com\\\/(jupyter($|\\\/|\\?).*)","value","UA-112091926-8"],["map","key","(.*)oreilly.com\\\/blended-courses.*","value","UA-112091926-11"],["map","key","^.*conferences.oreilly.com\\\/(tensorflow($|\\\/|\\?).*)","value","UA-112091926-12"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","2","group",["macro",19]],["map","index","1","group",["macro",20]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":["macro",0],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",8]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","2","dimension",["macro",22]],["map","index","3","dimension",["macro",19]],["map","index","4","dimension",["macro",23]],["map","index","5","dimension",["macro",24]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventVal"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCat"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAct"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLbl"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"VPTitle"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39299553-8",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.parentTopic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.formatType"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__remm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",39],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","www.safaribooksonline.com|learning.oreilly.com","value","Learning Platform"],["map","key","www.oreilly.com|get.oreilly.com|members.oreilly.com","value","Content \u0026 Marketing"]]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"loggedIn"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hasAccount"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"membersLoggedIn"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"unifiedLoggedIn"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.title"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.type"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.identifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.title"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.identifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.author"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.publisher"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.releaseDate"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.topic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.free"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.subdirectory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.subTopic"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*get.oreilly.com|www.oreilly.com|members.oreilly.com|shop.oreilly.com|ssearch.oreilly.com.*","value","UA-112091926-1"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","3","group",["macro",37]],["map","index","4","group",["macro",38]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":["macro",0],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",7]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",40]],["map","index","2","dimension",["macro",41]],["map","index","3","dimension",["macro",42]],["map","index","4","dimension",["macro",43]],["map","index","5","dimension",["macro",44]],["map","index","9","dimension",["macro",45]],["map","index","10","dimension",["macro",46]],["map","index","11","dimension",["macro",47]],["map","index","12","dimension",["macro",48]],["map","index","13","dimension",["macro",38]],["map","index","14","dimension",["macro",49]],["map","index","15","dimension",["macro",50]],["map","index","16","dimension",["macro",51]],["map","index","17","dimension",["macro",52]],["map","index","18","dimension",["macro",37]],["map","index","19","dimension",["macro",53]],["map","index","20","dimension",["macro",54]],["map","index","21","dimension",["macro",55]],["map","index","27","dimension",["macro",56]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",57],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionID"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"oid",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"type",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ccy",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key",".*www.oreilly.com.*","value","true"],["map","key",".*learning.oreilly.com.*learning-paths.*","value","true"],["map","key",".*learning.oreilly.com.*case-studies.*","value","true"],["map","key",".*learning.oreilly.com.*live-training.*","value","true"],["map","key",".*conferences.oreilly.com.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*amazon.*","value","true"],["map","key",".*aws.*","value","true"],["map","key",".*kubernetes.*","value","true"],["map","key",".*sre.*","value","true"],["map","key",".*devops.*","value","true"],["map","key",".*microservices.*","value","true"],["map","key",".*containers.*","value","true"],["map","key",".*distributed.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*data-science.*","value","true"],["map","key",".*big-data.*","value","true"],["map","key",".*machine-learning.*","value","true"],["map","key",".*data-engineering.*","value","true"],["map","key",".*data-architecture.*","value","true"],["map","key",".*business-intelligence.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/sponsors","value","True"],["map","key","https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/resources","value","True"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased*","value","true"],["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/invoice*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/schedule\/topic\/2867","value","True"],["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased","value","True"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*software-architecture.*","value","true"],["map","key",".*microservices.*","value","true"],["map","key",".*serverless.*","value","true"],["map","key",".*software-engineering.*","value","true"],["map","key",".*chaos-engineering.*","value","true"],["map","key",".*evolutionary-architecture.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*data-science.*","value","true"],["map","key",".*big-data.*","value","true"],["map","key",".*machine-learning.*","value","true"],["map","key",".*data-engineering.*","value","true"],["map","key",".*data-architecture.*","value","true"],["map","key",".*business-intelligence.*","value","true"],["map","key",".*databases.*","value","true"],["map","key",".*analytics.*","value","true"],["map","key",".*data-show-podcast.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/sponsors","value","True"],["map","key","https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/resources","value","True"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*open-source.*","value","true"],["map","key",".*cloud-native.*","value","true"],["map","key",".*software-development.*","value","true"],["map","key",".*blockchain.*","value","true"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"logged_in"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"term",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39299553-7",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*artificial-intelligence.*","value","true"],["map","key",".*machine-learning.*","value","true"],["map","key",".*deep-learning.*","value","true"],["map","key",".*reinforcement-learning.*","value","true"],["map","key",".*neural-networks.*","value","true"],["map","key",".*GANS.*","value","true"],["map","key",".*NLP.*","value","true"],["map","key",".*natural-language-processing.*","value","true"],["map","key",".*NSTM.*","value","true"],["map","key",".*tensorflow.*","value","true"]]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"learningPaidAccount"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"learningAccountType"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"organization"
    },{
      "function":"__smm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",11],
      "vtp_map":["list",["map","key","start","value","play"],["map","key","progress","value",["macro",12]]]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"slider.name"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"slider.cardTitle"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"myTopics.add"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"myTopics.remove"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*artificial-intelligence.*","value","true"],["map","key",".*deep-learning.*","value","true"],["map","key",".*reinforcement-learning.*","value","true"],["map","key",".*nueral-networks.*","value","true"],["map","key",".*natural-language-processing.*","value","true"],["map","key",".*bots.*","value","true"],["map","key",".*agents.*","value","true"],["map","key",".*tensorflow.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*devops.*","value","true"],["map","key",".*kubernetes.*","value","true"],["map","key",".*cloud-native.*","value","true"],["map","key",".*site-reliability-engineering.*","value","true"],["map","key",".*systems-engineering.*","value","true"],["map","key",".*configuration-management.*","value","true"],["map","key",".*containerization.*","value","true"]]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":10,
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"107-FMS-070\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "live_only":true,
      "priority":10,
      "once_per_event":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003E(function(){window.medalliaUserIdentifier=document.documentElement.dataset.userUuid;window.medalliaUserName=document.documentElement.dataset.username})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wu\/314849\/onsite\/embed.js\" async\u003E\u003C\/script\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/get.oreilly.com\/rs\/107-FMS-070\/images\/digitalpi-utm-tracker-oreilly.com.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1047975969",
      "vtp_conversionLabel":"WjAECOPA2nMQobDb8wM",
      "vtp_url":["macro",15],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":31
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"1047975969",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",15],
      "tag_id":32
    },{
      "function":"__bzi",
      "once_per_event":true,
      "vtp_id":"70561",
      "tag_id":34
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"tfRcCMnwwHQQk4a4jwM",
      "vtp_url":["macro",15],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":35
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"837681939",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",15],
      "tag_id":36
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"zLNTCNHo-XYQk4a4jwM",
      "vtp_url":["macro",15],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":39
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":40
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventCategory":"Safari",
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"Submit",
      "tag_id":41
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",26],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":53
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",27],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",28],
      "vtp_eventCategory":["macro",29],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":["macro",30],
      "vtp_eventLabel":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",32]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",26],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":56
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"pYI4CLSnrXwQk4a4jwM",
      "vtp_url":["macro",15],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":60
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Homepage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",35],
      "vtp_eventAction":"Card",
      "vtp_eventLabel":["macro",36],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":62
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-39299553-7",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":63
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",32]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",58],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":66
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",27],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",28],
      "vtp_eventCategory":["macro",29],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["macro",30],
      "vtp_eventLabel":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":67
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",58],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":68
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":78
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventCategory":"form",
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"submit",
      "vtp_eventLabel":"free trial",
      "tag_id":85
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"nv2po",
      "tag_id":86
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"scroll tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template",["macro",59],"%"],
      "vtp_eventLabel":["macro",48],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":93
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",60],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1065103245",
      "vtp_conversionLabel":"vCakCOu-148BEI3f8PsD",
      "vtp_url":["macro",15],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":114
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":115
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"nv3z2",
      "tag_id":122
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"AW-773515308",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",15],
      "tag_id":130
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",60],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1065103245",
      "vtp_conversionLabel":"u_1aCI6GipMBEI3f8PsD",
      "vtp_url":["macro",15],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":132
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"773515308",
      "vtp_conversionLabel":"3NkcCNrj2ZMBEKzQ6_AC",
      "vtp_url":["macro",15],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":133
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",60],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"804958955",
      "vtp_conversionLabel":"JiwyCPH8jZUBEOvl6v8C",
      "vtp_url":["macro",15],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":155
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":156
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",60],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1011620147",
      "vtp_conversionLabel":"voGZCImi7ZQBELOysOID",
      "vtp_url":["macro",15],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":157
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":158
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"773515308",
      "vtp_conversionLabel":"3NkcCNrj2ZMBEKzQ6_AC",
      "vtp_url":["macro",15],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":161
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":162
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"773515308",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",15],
      "tag_id":165
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"video plays",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["macro",13],
      "vtp_eventLabel":["macro",48],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":188
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"AW-804958955",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",15],
      "tag_id":190
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"AW-926848715",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",15],
      "tag_id":194
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-N4KPR77","nickname","Account App"]],
      "vtp_boundaries":["list",["zb","_eq",["macro",6],"\/account\/",false,false]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","ua"]],
      "tag_id":197
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1669222_90",
      "tag_id":198
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"3000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"1669222_110",
      "tag_id":199
    },{
      "function":"__cl",
      "tag_id":200
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75,95",
      "vtp_captureComplete":false,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":false,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"1669222_203",
      "vtp_enableTriggerStartOption":true,
      "tag_id":201
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25, 50, 75, 95",
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"1669222_204",
      "vtp_enableTriggerStartOption":true,
      "tag_id":202
    },{
      "function":"__hl",
      "tag_id":203
    },{
      "function":"__cl",
      "tag_id":204
    },{
      "function":"__cl",
      "tag_id":205
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Ciframe height=\"1\" width=\"1\" frameborder=\"0\" scrolling=\"no\" src=\"https:\/\/www.emjcd.com\/tags\/c?containerTagId=2775\u0026amp;ITEM1=Safari-Subscription\u0026amp;AMT1=",["escape",["macro",17],12],"\u0026amp;QTY1=1\u0026amp;CID=1525054\u0026amp;OID=",["escape",["macro",61],12],"\u0026amp;TYPE=",["escape",["macro",62],12],"\u0026amp;CURRENCY=",["escape",["macro",63],12],"\" name=\"cj_conversion\"\u003E\u003C\/iframe\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"SafariSubscription\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar domains_to_track,docHost=document.location.hostname;if(\"conferences.oreilly.com\"==docHost.toLowerCase()||\"ai.oreilly.com.cn\"==docHost.toLowerCase()){domains_to_track=[\"conference.oreilly.com\"];var folders_to_track=",["escape",["macro",5],8,16],".split(\"\/\")[1]}else if(\"oreilly.com\"==docHost.toLowerCase()||\"www.oreilly.com\"==docHost.toLowerCase())domains_to_track=[\"www.oreilly.com\"],folders_to_track=\"\";\nvar extDoc=\".doc .docx .xls .xlsx .xlsm .ppt .pptx .exe .zip .pdf .js .txt .csv\".split(\" \"),socSites=\"\",isSubDomainTracker=!0,isSeparateDomainTracker=!1,isGTM=!0,eValues={downloads:{category:\"Assets\",action:\"Download\",label:\"\",value:0,nonInteraction:0},outbound_downloads:{category:\"Outbound Assets\",action:\"Download\",label:\"\",value:0,nonInteraction:0},outbounds_oreilly:{category:\"Outbound Links\",action:\"Oreilly\",label:\"\",value:0,nonInteraction:0},outbounds:{category:\"Outbound Links\",action:\"Non-Oreilly\",\nlabel:\"\",value:0,nonInteraction:0},email:{category:\"Email Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},outbound_email:{category:\"Outbound Email Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},telephone:{category:\"Telephone Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},social:{category:\"Social Profiles\",action:\"Click\",label:\"\",value:0,nonInteraction:0}},mainDomain=document.location.hostname.match(\/(([^.\\\/]+\\.[^.\\\/]{2,3}\\.[^.\\\/]{2})|(([^.\\\/]+\\.)[^.\\\/]{2,4}))(\\\/.*)?$\/)[1];\nmainDomain=mainDomain.toLowerCase();1==isSubDomainTracker\u0026\u0026(mainDomain=document.location.hostname.replace(\"www.\",\"\").toLowerCase());var arr=document.getElementsByTagName(\"a\");\nfor(i=0;i\u003Carr.length;i++){var flag=0;if(!isExcluded(arr[i])){var mDownAtt=arr[i].getAttribute(\"onmousedown\"),doname=\"\",linkType=\"\",mailPattern=\/^mailto:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i,urlPattern=\/^(ftp|http|https):\\\/\\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\\/|\\\/([\\w#!:.?+=\u0026%@!\\-\\\/]))?\/i,telPattern=\/^tel:(.*)([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$\/i,internalDomain=\/(.*)(oreilly.com|safaribooksonline.com)(.*)\/i;if(mailPattern.test(arr[i].href)||urlPattern.test(arr[i].href)||telPattern.test(arr[i].href)){try{!urlPattern.test(arr[i].href)||\nmailPattern.test(arr[i].href)||telPattern.test(arr[i].href)?!mailPattern.test(arr[i].href)||telPattern.test(arr[i].href)||urlPattern.test(arr[i].href)?!telPattern.test(arr[i].href)||urlPattern.test(arr[i].href)||mailPattern.test(arr[i].href)||(doname=arr[i].href.toLowerCase(),linkType=\"tel\"):(doname=arr[i].href.toLowerCase().split(\"@\")[1],linkType=\"mail\"):(doname=arr[i].hostname.toLowerCase().replace(\"www.\",\"\"),linkType=\"url\")}catch(b){continue}if(null!=mDownAtt\u0026\u0026(mDownAtt=String(mDownAtt),-1\u003CmDownAtt.indexOf(\"dataLayer.push\")||\n-1\u003CmDownAtt.indexOf(\"('send'\")))continue;var condition=!1;if(condition=isSeparateDomainTracker?doname==mainDomain:-1!=doname.indexOf(mainDomain))\"mail\"===linkType?(eValues.email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i),_tagLinks(arr[i],eValues.email.category,eValues.email.action,eValues.email.label,eValues.email.value,eValues.email.nonInteraction,mDownAtt)):\"url\"===linkType\u0026\u0026(\"\"==folders_to_track||_isInternalFolder(arr[i].href)?_isDownload(arr[i].href)\u0026\u0026\n(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.downloads.category,eValues.downloads.action,eValues.downloads.label,eValues.downloads.value,eValues.downloads.nonInteraction,mDownAtt)):_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?\n(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=arr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,\nmDownAtt)));else for(var k=0;k\u003Cdomains_to_track.length;k++){var condition1=!1;condition1=isSeparateDomainTracker?doname==domains_to_track[k]:-1!=doname.indexOf(domains_to_track[k]);condition1?\"mail\"===linkType?(eValues.email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i),_tagLinks(arr[i],eValues.email.category,eValues.email.action,eValues.email.label,eValues.email.value,eValues.email.nonInteraction,mDownAtt)):\"url\"===linkType\u0026\u0026(\"\"==folders_to_track||_isInternalFolder(arr[i].href)?\n_isDownload(arr[i].href)\u0026\u0026(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.downloads.category,eValues.downloads.action,eValues.downloads.label,eValues.downloads.value,eValues.downloads.nonInteraction,mDownAtt)):_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?\n(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,\nmDownAtt))):(flag++,flag==domains_to_track.length\u0026\u0026(\"mail\"===linkType\u0026\u0026(eValues.outbound_email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/),_tagLinks(arr[i],eValues.outbound_email.category,eValues.outbound_email.action,eValues.outbound_email.label,eValues.outbound_email.value,eValues.outbound_email.nonInteraction,mDownAtt)),\"tel\"===linkType\u0026\u0026(eValues.telephone.label=arr[i].href.toLowerCase().split(\"tel:\")[1],_tagLinks(arr[i],eValues.telephone.category,eValues.telephone.action,\neValues.telephone.label,eValues.telephone.value,eValues.telephone.nonInteraction,mDownAtt)),\"url\"===linkType\u0026\u0026(_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):_isSocial(arr[i].href)?(eValues.social.label=arr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],eValues.social.action=\neValues.social.label.split(\".\")[0],_tagLinks(arr[i],eValues.social.category,eValues.social.action,eValues.social.label,eValues.social.value,eValues.social.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=\narr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,mDownAtt)))))}}}}function _isSocial(b){return\"\"!=socSites?null!=b.toLowerCase().replace(\/[+#]\/,\"\").match(new RegExp(\"^(.*)(\"+socSites.toLowerCase()+\")(.*)$\"))?!0:!1:!1}\nfunction _isInternalFolder(b){return\"\"!=folders_to_track?null!=b.toLowerCase().match(new RegExp(\"^(.*)(\"+folders_to_track+\")(.*)$\"))?!0:!1:!1}function _isDownload(b){for(var c=0,a=0;a\u003CextDoc.length;a++){var d=b.split(\".\");d=d[d.length-1].split(\/[#?\u0026?]\/);if(\".\"+d[0].toLowerCase()==extDoc[a])return!0;c++;if(c==extDoc.length)return!1}}\nfunction _setDownloadData(b,c){var a=b.toLowerCase().split(\".\");a=a[a.length-1].split(\/[#?\u0026?]\/);var d=b.toLowerCase().split(c);d=d[1].split(\/[#?\u0026?]\/);eValues.downloads.action=eValues.outbound_downloads.action=a;eValues.downloads.label=eValues.outbound_downloads.label=d}\nfunction _tagLinks(b,c,a,d,g,e,f){isGTM?b.setAttribute(\"onmousedown\",(null!=f?f+\"; \":\"\")+\"dataLayer.push({'event': 'eventTracker', 'eventCat': '\"+c+\"', 'eventAct':'\"+a+\"', 'eventLbl': '\"+d+\"', 'eventVal': \"+g+\", 'nonInteraction': \"+e+\"});\"):(e=0==e?!1:!0,b.setAttribute(\"onmousedown\",(null!=f?f+\"; \":\"\")+\"ga('send', 'event', '\"+c+\"', '\"+a+\"', '\"+d+\"', \"+g+\", { nonInteraction: \"+e+\"});\"))}\nfunction isExcluded(b){var c=document.getElementsByTagName(\"footer\")[0];1\u003Cdocument.getElementsByTagName(\"footer\").length\u0026\u0026(c=document.getElementsByTagName(\"footer\")[document.getElementsByTagName(\"footer\").length-1]);for(var a=b.parentNode;null!=a;){if(a==c)return!0;a=a.parentNode}c=\/(.*)(conferences.oreilly.com|www.safaribooksonline.com|learning.oreilly.com|shop.oreilly.com)(.*)\/i;a=\/((.*)oreilly.com\\\/(learning|idea)(.*))\/i;return c.test(b.href)\u0026\u0026a.test(document.location.href)\u0026\u0026jQuery\u0026\u0026(jQuery(b).parents(\".article-body\").length||\njQuery(b).parents(\".block-product\").length||jQuery(this).closest(\"[data-type \\x3d 'note']\").length)?!0:!1};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":55
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar checkin=new Date,checkout=new Date;checkin.setDate((new Date).getDate()+10);checkout.setDate((new Date).getDate()+24);\nvar trialends=(1==(checkin.getMonth()+1).toString().length?\"0\"+(checkin.getMonth()+1):checkin.getMonth()+1)+\"\/\"+(1==checkin.getDate().toString().length?\"0\"+checkin.getDate():checkin.getDate())+\"\/\"+checkin.getFullYear(),trialends2=(1==(checkout.getMonth()+1).toString().length?\"0\"+(checkout.getMonth()+1):checkout.getMonth()+1)+\"\/\"+(1==checkout.getDate().toString().length?\"0\"+checkout.getDate():checkout.getDate())+\"\/\"+checkout.getFullYear();window.criteo_q=window.criteo_q||[];\nvar deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";\nwindow.criteo_q.push({event:\"manualFlush\"},{event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"viewHome\"},{event:\"flushEvents\"},function(){setTimeout(function(){criteo_q.push({event:\"viewSearch\",din:trialends,dout:trialends2},{event:\"viewHome\"},{event:\"setData\",trialends:trialends},{event:\"flushEvents\"})},1E3)});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"##user_email##\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"##subscription_cost##\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cdiv class=\"remarketing\"\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\"},{event:\"setData\",ui_strata:\"VLNY18\"},{event:\"viewHome\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E \u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":" \n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cdiv class=\"remarketing\"\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"AIUK2018\"},{event:\"viewHome\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":75
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003E(function(){window.medalliaUserIdentifier=document.documentElement.dataset.userUuid;window.medalliaUserName=document.documentElement.dataset.username;window.medalliaUserIDvsg=window.__INITIAL_STATE__.user.user_identifier;console.log(\"This ran\")})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wu\/314849\/onsite\/embed.js\" async\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"436018\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=436018\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":79
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SANY19\"},{event:\"viewHome\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":80
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SANY19\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":81
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SANY19\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":82
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SANY19\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":83
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"conferenceID\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":84
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"480604\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=480604\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":89
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"!==typeof kWidget\u0026\u0026kWidget.addReadyCallback(function(b){var a=document.getElementById(b);a.kBind(\"firstPlay.fp\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"play\",eventLbl:",["escape",["macro",48],8,16],",eventVal:0,nonInteraction:0});a.kUnbind(\".fp\")});a.kBind(\"firstQuartile.1q\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"25%\",eventLbl:",["escape",["macro",48],8,16],",eventVal:0,nonInteraction:0});a.kUnbind(\".1q\")});a.kBind(\"secondQuartile.2q\",\nfunction(){dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"50%\",eventLbl:",["escape",["macro",48],8,16],",eventVal:0,nonInteraction:0});a.kUnbind(\".2q\")});a.kBind(\"thirdQuartile.3q\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"75%\",eventLbl:",["escape",["macro",48],8,16],",eventVal:0,nonInteraction:0});a.kUnbind(\".3q\")});var d=!1;a.addJsListener(\"playerUpdatePlayhead\",function(){var c=a.evaluate(\"{video.player.currentTime}\"),b=a.evaluate(\"{mediaProxy.entry.duration}\");\nc=100*parseFloat(c\/b);95\u003Cc\u0026\u0026!d\u0026\u0026(d=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"95%\",eventLbl:",["escape",["macro",48],8,16],",eventVal:0,nonInteraction:0}))});a.kUnbind(\".pp\")});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":90
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar domains_to_include_regex=\/(.*)(conferences.oreilly.com|www.safaribooksonline.com|learning.oreilly.com|shop.oreilly.com)(.*)\/i;jQuery(\".block-product\").on(\"mousedown\",\"a\",function(){domains_to_include_regex.test(this.href)\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"right sidebar\",eventLbl:this.href,eventVal:0})});\njQuery('[data-type\\x3d\"note\"]').on(\"mousedown\",\"a\",function(){domains_to_include_regex.test(this.href)\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"editor note\",eventLbl:this.href,eventVal:0})});\njQuery(\".article-body\").on(\"mousedown\",\"a\",function(){!domains_to_include_regex.test(this.href)||jQuery(this).closest(\"[data-type \\x3d 'note']\").length||jQuery(this).parents(\".block-product\").length||dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"body\",eventLbl:this.href,eventVal:0})});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":94
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript data-gtmsrc=\"https:\/\/w.soundcloud.com\/player\/api.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var t=function(e){var a,c,b,h,k,l,m,d,n=\"podcast\",f=0;var p=",["escape",["macro",48],8,16],";var g=SC.Widget(e);g.bind(SC.Widget.Events.READY,function(){g.bind(SC.Widget.Events.PLAY,function(){1E3\u003CDate.now()-f\u0026\u0026(a=\"Play\",q(n,a,p),f=Date.now())});g.bind(SC.Widget.Events.PLAY_PROGRESS,function(e){d=!1;c=Math.round(100*e.relativePosition);10!==c||b||(a=\"10%\",d=b=!0);25!==c||h||(a=\"25%\",d=h=!0);50!==c||k||(a=\"50%\",d=k=!0);75!==c||l||(a=\"75%\",d=l=!0);95!==c||m||(a=\"75%\",d=m=!0);d\u0026\u0026q(n,a,p)});g.bind(SC.Widget.Events.FINISH,\nfunction(){a=\"100%\";b=h=k=l=m=!1;q(n,a,p)})})},q=function(b,a,c){window.dataLayer.push({event:\"eventTracker\",eventCat:b,eventAct:a,eventLbl:c,eventVal:0,nonInteraction:0})},f,r=document.querySelectorAll('iframe[src*\\x3d\"api.soundcloud.com\"]');var b=0;for(f=r.length;b\u003Cf;b+=1)t(r[b])}catch(e){console.log(\"Error with SoundCloud API: \"+e.message)}})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nuqsj\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":102
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-A1tSpBwAcJtww\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":103
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":104
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SSF2019\"},{event:\"viewHome\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":105
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SSF2019\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":106
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SSF2019\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":107
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SSF2019\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":108
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"user_email\"},{event:\"setData\",ui_strata:\"SSF2019\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":109
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-A1tSpBwAcJtww\",labels:\"_fp.event.San Francisco Registration Confirmation\",orderid:",["escape",["macro",60],8,16],",event:\"refresh\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":116
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-A1tSpBwAcJtww\",labels:\"_fp.event.London 2019 Registration Confirmation\",orderid:\"INSERT+ORDER+ID\",event:\"refresh\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":123
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-A1tSpBwAcJtww\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":124
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"strata19\"},{event:\"viewHome\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":125
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"strata19\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":126
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"strata19\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":127
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"strata19\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E\n\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":128
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"user_email\"},{event:\"setData\",ui_strata:\"strata19\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":" \u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-1065103245\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E \u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-1065103245\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":131
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nuqsj\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":134
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":135
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"VLCA19\"},{event:\"viewHome\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":136
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"VLCA19\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":137
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"VLCA19\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":138
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"VLCA19\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":139
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"user_email\"},{event:\"setData\",ui_strata:\"VLCA19\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SASJ19\"},{event:\"viewHome\"});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":142
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SASJ19\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":143
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SASJ19\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":144
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SASJ19\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":145
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"SASJ19\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":146
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":147
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv2po\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":148
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv2po\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":149
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"ZMY7MBBFIFDUBAVNOE7XUJ\";adroll_pix_id=\"JPUOHWQVQZBGBBTRCVCUVP\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":150
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"480604\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=480604\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":151
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"ZMY7MBBFIFDUBAVNOE7XUJ\";adroll_pix_id=\"JPUOHWQVQZBGBBTRCVCUVP\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":152
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"562374324175078\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=562374324175078\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":153
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":154
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"376595806465162\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=376595806465162\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":163
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"376595806465162\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Purchase\",{value:2995,currency:\"USD\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=376595806465162\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":164
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"db165134aeed46bea98098dc4a8f09f7\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/db165134aeed46bea98098dc4a8f09f7\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":166
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Purchase\",{value:.01,currency:\"USD\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":167
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){if(null!==document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]')\u0026\u0026void 0!==document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]')){var a=!1;window.addEventListener(\"blur\",function(){a\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"facebook\",eventVal:0,nonInteraction:0})});document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]').addEventListener(\"mouseover\",function(){window.focus();\na=!0});document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]').addEventListener(\"mouseout\",function(){a=!1})}try{window.twttr=function(b,a,d){var c,e=b.getElementsByTagName(a)[0];if(!b.getElementById(d))return b=b.createElement(a),b.id=d,b.src=\"\/\/platform.twitter.com\/widgets.js\",e.parentNode.insertBefore(b,e),window.twttr||(c={_e:[],ready:function(a){c._e.push(a)}})}(document,\"script\",\"twitter-wjs\"),twttr.ready(function(a){a.events.bind(\"tweet\",trackTwitter)})}catch(b){}})();\nnull!==document.querySelector(\".IN-widget\")\u0026\u0026void 0!==document.querySelector(\".IN-widget\")\u0026\u0026document.querySelector(\".IN-widget\").addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"linkedin\",eventVal:0,nonInteraction:0})});\nfunction trackTwitter(a){a\u0026\u0026(a.target\u0026\u0026\"IFRAME\"==a.target.nodeName\u0026\u0026(opt_target=extractParamFromUri(a.target.src,\"url\")),dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"twitter\",eventVal:0,nonInteraction:0}))}function extractParamFromUri(a,b){if(a){var c=new RegExp(\"[\\\\?\\x26#]\"+b+\"\\x3d([^\\x26#]*)\");c=c.exec(a);if(null!=c)return unescape(c[1])}};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":168
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":169
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Purchase\",{value:\"0.01\",currency:\"USD\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":170
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv3zg\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"OSCON19\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":172
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"OSCON19\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":173
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"OSCON19\"},{event:\"viewHome\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":174
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"OSCON19\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":175
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"OSCON19\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":176
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wu\/314849\/onsite\/embed.js\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":179
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"64888aa28b024c7388d63e9b444316de\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/64888aa28b024c7388d63e9b444316de\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":180
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"64888aa28b024c7388d63e9b444316de\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/64888aa28b024c7388d63e9b444316de\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":181
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"64888aa28b024c7388d63e9b444316de\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/64888aa28b024c7388d63e9b444316de\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":182
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"64888aa28b024c7388d63e9b444316de\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/64888aa28b024c7388d63e9b444316de\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":183
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cbutton id=\"addToCartButton\"\u003EAdd To Cart\u003C\/button\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E$(\"#addToCartButton\").click(function(){qp(\"track\",\"Purchase\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":184
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cbutton id=\"addToCartButton\"\u003EAdd To Cart\u003C\/button\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E$(\"#addToCartButton\").click(function(){qp(\"track\",\"Purchase\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":185
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BR5L4KSRRBAH3DZ3QSFKM3\";adroll_pix_id=\"6GHISHJ7TNDUJAVMSMT2NA\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":186
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"497295923798472\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=497295923798472\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":193
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BUYJ3NIIJFFQJIFHTF6V72\";adroll_pix_id=\"DITK2PSWM5FXBNEB3QXQRH\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":191
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv3od\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":196
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"11004156\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":192
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"436018\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=436018\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":195
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"\\\/enterprise\\\/how\\-learning\\-accelerates\\-change\\-download\\\/|\\\/enterprise\\\/one\\-size\\-fits\\-all\\-training\\-doesnt\\-work\\-download\\\/|\\\/enterprise\\\/six\\-ways\\-leaders\\-can\\-navigate\\-change\\-download\\\/"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"ent.*_confirm\\.html"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"oreilly.com"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/content\/sponsor-strata"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"get.oreilly.com"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"true"
    },{
      "function":"_gt",
      "arg0":["macro",17],
      "arg1":"0.0"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/velocity"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"Start your free trial"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)conferences.oreilly.com(.*)|(.*)ai.oreilly.com.cn(.*)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)oreilly.com\\\/blended-courses.*"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"eventTracker"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":".*oreilly.com\\\/blended-courses.*"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"VPTracker"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"src-Card-coverAnchor"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)1669222_90($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"\\\/account\\\/insights"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)www.oreilly.com(\\\/?$|\\\/about\\\/approach.html|\\\/sign-in\\.html|(.*\\\/)*free\\\/(.*)*|\\\/ideas(\\\/.*)*|\\\/learning(\\\/.*)*|\\\/topics(\\\/.*)*|\\\/people(\\\/.*)*|\\\/feed\\\/four\\-short\\-links\\\/?|\\\/all)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)get.oreilly.com(.*)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)www.oreilly.com\\\/online-learning(\\\/?$|\\\/enterprise\\.html|\\\/teams\\.html|\\\/individuals\\.html|\\\/government\\.html|\\\/academic\\.html|\\\/pricing\\.html|\\\/try-now\\.html)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(.*)oreilly.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"conferences.oreilly.com|learning.oreilly.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)www\\.oreilly\\.com\\\/library\\\/view.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)get.oreilly.com(.*)|(.*)www.oreilly.com(.*)|(.*)members.oreilly.com(.*)|(.*)ssearch.oreilly.com(.*)|(.*)shop.oreilly.com(.*)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)www\\.oreilly\\.com\\\/blended-courses.*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ny"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"book|article",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)1669222_204($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"strata\/strata-ca"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/velocity\/vl-ca"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"www.oreilly.com\/webops-perf\/free\/infrastructure-now-2018.csp"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/strata\/strata-eu\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/blended-courses\/data-science\/public\/register\/purchased\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/blended-courses\/ds-series-ny\/public\/register\/purchased\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"blended-courses"
    },{
      "function":"_cn",
      "arg0":["macro",38],
      "arg1":"video"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)1669222_203($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/artificial-intelligence\/ai-ca"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/www.qa.safariflow.com\/home\/"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"((.*)(oreilly.com\/(feed\/four\\-short\\-links|all)(\/?))$)|((.*)oreilly.com\/(ideas|learning|topics|people)(\\\/(.*)|$|\\?(.*)))",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com"
    },{
      "function":"_cn",
      "arg0":["macro",64],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)conferences.oreilly.com(.*)|(.*)ai.oreilly.com.cn(.*)"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)1669222_110($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)learning.oreilly.com(.*)"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)learning.oreilly.review(.*)"
    },{
      "function":"_eq",
      "arg0":["macro",65],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"safaribooksonline.com\/subscribe\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"\/signup\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"cybermonday-2018.html"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"\/artificial-intelligence\/ai-eu"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/artificial-intelligence\/ai-eu"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny"
    },{
      "function":"_eq",
      "arg0":["macro",67],
      "arg1":"True"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/about"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/register\/purchased\/"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)oreilly.com\\\/(learning|ideas)(\\\/(.*)|$|\\?(.*))",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",38],
      "arg1":"podcast"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"strata-ca"
    },{
      "function":"_eq",
      "arg0":["macro",68],
      "arg1":"false"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"invoice"
    },{
      "function":"_eq",
      "arg0":["macro",69],
      "arg1":"True"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/content\/about"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/strata\/strata-ca\/public\/register\/invoice"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/strata\/strata-eu\/public\/register\/invoice"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/strata\/strata-eu"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-eu"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-eu\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-eu\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-eu\/public\/register"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"strata\/strata-eu"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-eu\/public\/schedule\/topic\/2913"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca\/public\/content\/about"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca\/public\/content\/about"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca\/public\/register\/order"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",71],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"data-science"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/oscon\/oscon-or"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/oscon\/oscon-or\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/register\/purchased\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/oscon\/oscon-or"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"get.oreilly.com\/ind_mastering-collaboration.html"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"get.oreilly.com\/ind_introducing-python.html"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"get.oreilly.com\/ind_ai-for-people-and-business.html"
    },{
      "function":"_eq",
      "arg0":["macro",72],
      "arg1":"True"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/about"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"artificial-intelligence\/ai-ny"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"oscon\/oscon-or"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ca\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"Continue"
    },{
      "function":"_eq",
      "arg0":["macro",73],
      "arg1":"true"
    }],
  "rules":[
    [["if",0,1],["add",3,14]],
    [["if",1,2],["add",3,14]],
    [["if",1],["add",4,9,27,40,43,44,45,46,47,48]],
    [["if",1,3],["add",5]],
    [["if",1,4],["add",5]],
    [["if",1,5],["add",5]],
    [["if",1,6,7],["add",6,49,51,54]],
    [["if",1],["unless",8],["add",7,20,36]],
    [["if",9,10],["add",8,10,21,53]],
    [["if",1,11,12],["add",11]],
    [["if",1,13],["add",11]],
    [["if",11,14],["add",12]],
    [["if",14,15],["add",12]],
    [["if",11,16],["add",13]],
    [["if",17,18,19],["add",15]],
    [["if",1,20],["add",16]],
    [["if",16,21],["add",17]],
    [["if",16,22],["add",17]],
    [["if",16,23],["add",17]],
    [["if",14,24],["unless",25,26],["add",18]],
    [["if",1,27],["unless",26,28],["add",19]],
    [["if",1,29],["add",22]],
    [["if",30,31,32],["add",23]],
    [["if",1,33],["add",24,77,78]],
    [["if",1,34],["add",25,70,109]],
    [["if",1,35],["add",26,31,105,120]],
    [["if",1,36],["add",26,38,105]],
    [["if",1,37],["add",28,79,85,88]],
    [["if",1,38],["add",29]],
    [["if",1,39],["add",30,93]],
    [["if",1,40],["add",32,98,101,103,110,122],["block",99,121]],
    [["if",1,41],["add",33,99,100,102,121,94]],
    [["if",1,42],["add",34,108],["block",107]],
    [["if",1,43],["add",35,107]],
    [["if",44,45,46],["add",37]],
    [["if",1,47],["add",39,128,129,130,131,132]],
    [["if",1,48],["add",41]],
    [["if",1,49],["add",42]],
    [["if",1],["unless",50],["add",50]],
    [["if",1,51],["add",0,2]],
    [["if",52,53],["add",52]],
    [["if",49,54,55],["add",52]],
    [["if",1,56],["add",1]],
    [["if",1,57],["add",1,59]],
    [["if",1,58],["add",55]],
    [["if",1,59],["add",56]],
    [["if",1,60],["add",56]],
    [["if",1,61],["add",56]],
    [["if",1,62],["add",57]],
    [["if",1,63],["add",58]],
    [["if",1,64],["add",60]],
    [["if",1,65],["add",61]],
    [["if",1,66],["add",62]],
    [["if",1,67],["add",63]],
    [["if",1,68],["add",64]],
    [["if",1,69],["add",65,66]],
    [["if",44,53],["add",67]],
    [["if",53,70],["add",68]],
    [["if",53,71],["add",69]],
    [["if",1,72,73],["unless",74],["add",71]],
    [["if",1,75],["add",72]],
    [["if",1,76],["add",73]],
    [["if",1,77],["add",74]],
    [["if",1,78],["add",74]],
    [["if",1,79],["add",75]],
    [["if",1,80],["add",76]],
    [["if",1,81],["add",78]],
    [["if",1,82],["add",79]],
    [["if",1,83],["unless",74,84],["add",80,86]],
    [["if",1,85],["add",81,83]],
    [["if",1,86],["add",82]],
    [["if",1,87],["add",82]],
    [["if",1,88],["add",84]],
    [["if",1,89],["add",87,109]],
    [["if",1,90],["add",88]],
    [["if",1,91],["add",89]],
    [["if",1,92],["add",90]],
    [["if",1,93],["add",90]],
    [["if",1,94],["add",91]],
    [["if",1,95],["add",92]],
    [["if",1,96],["add",95]],
    [["if",1,97],["add",95]],
    [["if",1,98],["add",96]],
    [["if",1,99],["add",97]],
    [["if",1,100],["add",104]],
    [["if",1,101],["add",106]],
    [["if",1,102],["add",107]],
    [["if",103],["add",111]],
    [["if",1,104],["add",112,114,123]],
    [["if",1,105],["add",113],["block",112,123]],
    [["if",1,106],["add",115]],
    [["if",1,107],["add",116,124]],
    [["if",1,108],["add",117]],
    [["if",1,109],["add",117]],
    [["if",1,110],["add",117]],
    [["if",1,111],["add",117]],
    [["if",1,112],["add",118]],
    [["if",1,113],["add",119]],
    [["if",1,114],["add",120]],
    [["if",1,115],["add",120]],
    [["if",10,116,117],["add",125]],
    [["if",10,106,117],["add",126]],
    [["if",1,118],["add",127]]]
},
"runtime":[
[],[]
]


};
var aa,ca=this,da=/^[\w+/_-]+[=]{0,2}$/,ea=null;var fa=function(){},ha=function(a){return"function"==typeof a},ia=function(a){return"string"==typeof a},ja=function(a){return"number"==typeof a&&!isNaN(a)},ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},la=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ma=function(a,b){if(a&&ka(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},oa=function(a,b){if(!ja(a)||
!ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},pa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},qa=function(a){return Math.round(Number(a))||0},ra=function(a){return"false"==String(a).toLowerCase()?!1:!!a},sa=function(a){var b=[];if(ka(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},ta=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},ua=function(){return(new Date).getTime()},va=function(){this.prefix="gtm.";this.values=
{}};va.prototype.set=function(a,b){this.values[this.prefix+a]=b};va.prototype.get=function(a){return this.values[this.prefix+a]};va.prototype.contains=function(a){return void 0!==this.get(a)};
var wa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},xa=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},ya=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},za=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Aa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ba=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ca=function(a){if(null==a)return String(a);var b=Ba.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Da=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ea=function(a){if(!a||"object"!=Ca(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Da(a,"constructor")&&!Da(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Da(a,b)},Fa=function(a,b){var c=b||("array"==Ca(a)?[]:{}),d;for(d in a)if(Da(a,d)){var e=a[d];"array"==Ca(e)?("array"!=Ca(c[d])&&(c[d]=[]),c[d]=Fa(e,c[d])):Ea(e)?(Ea(c[d])||(c[d]={}),c[d]=Fa(e,c[d])):c[d]=e}return c};var f=window,u=document,Ga=navigator,Ha=u.currentScript&&u.currentScript.src,Ia=function(a,b){var c=f[a];f[a]=void 0===c?b:c;return f[a]},Ja=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Ka=function(a,b,c){var d=u.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Ja(d,b);c&&(d.onerror=c);var e;if(null===ea)b:{var g=ca.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&da.test(k)){ea=k;break b}}ea=""}e=ea;e&&d.setAttribute("nonce",e);var l=u.getElementsByTagName("script")[0]||u.body||u.head;l.parentNode.insertBefore(d,l);return d},La=function(){if(Ha){var a=Ha.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Ma=function(a,b){var c=u.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=u.body&&u.body.lastChild||
u.body||u.head;d.parentNode.insertBefore(c,d);Ja(c,b);void 0!==a&&(c.src=a);return c},Na=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Oa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Pa=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},z=function(a){f.setTimeout(a,0)},Ra=function(a){var b=
u.getElementById(a);if(b&&Qa(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Qa(document.all[a][c],"id")==a)return document.all[a][c];return b},Qa=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Sa=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ta=function(a){var b=u.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=
[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ua=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;g=g.parentElement}return null};var Va=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Xa=/:[0-9]+$/,Ya=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},ab=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Za(a.protocol)||Za(f.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:f.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||f.location.hostname).replace(Xa,"").toLowerCase());var g=b,h,k=Za(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=$a(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(Xa,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":h="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=h.split("/");0<=
la(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Ya(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},Za=function(a){return a?a.replace(":","").toLowerCase():""},$a=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},bb=function(a){var b=u.createElement("a");
a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace(Xa,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var cb=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},fb=function(a,b,c,d){var e=db(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=eb(e,function(g){return g.xb},b);if(1===e.length)return e[0].id;e=eb(e,function(g){return g.Sa},c);return e[0]?e[0].id:void 0}};
function gb(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=cb(b,e).indexOf(c)}
var kb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var v=ib(),y=0;y<v.length;++y){var x="none"!=v[y]?v[y]:void 0;if(!jb(x,t)&&gb(m+(x?"; domain="+x:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!jb(p,t)&&gb(m,a,l)}return k};function eb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function db(a,b){for(var c=[],d=cb(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),xb:1*k[0]||1,Sa:1*k[1]||1}))}}return c}
var lb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,mb=/(^|\.)doubleclick\.net$/i,jb=function(a,b){return mb.test(document.location.hostname)||"/"===b&&lb.test(a)},ib=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var nb=[],ob={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},qb=function(a){return ob[a]},rb=/[\x00\x22\x26\x27\x3c\x3e]/g;var vb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,wb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},xb=function(a){return wb[a]};
nb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(vb,xb)+"'"}};var Eb=/['()]/g,Fb=function(a){return"%"+a.charCodeAt(0).toString(16)};nb[12]=function(a){var b=
encodeURIComponent(String(a));Eb.lastIndex=0;return Eb.test(b)?b.replace(Eb,Fb):b};var Gb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Hb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Ib=function(a){return Hb[a]};nb[16]=function(a){return a};var Kb=[],Lb=[],Mb=[],Nb=[],Ob=[],Pb={},Qb,Rb,Sb,Tb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ub=function(a){var b=a["function"];if(!b)throw Error("Error: No function name given for function call.");var c=!!Pb[b],d={},e;for(e in a)a.hasOwnProperty(e)&&0===e.indexOf("vtp_")&&(d[c?e:e.substr(4)]=a[e]);return c?Pb[b](d):(void 0)(b,d)},Wb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Vb(a[e],b,c));return d},
Xb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Pb[b];return c?c.priorityOverride||0:0},Vb=function(a,b,c){if(ka(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Vb(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=Kb[g];if(!h||b.oc(h))return;c[g]=!0;try{var k=Wb(h,b,c);k.vtp_gtmEventId=b.id;d=Ub(k);Sb&&(d=Sb.hf(d,k))}catch(y){b.Jd&&b.Jd(y,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[Vb(a[l],b,c)]=Vb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=Vb(a[n],b,c);Rb&&(m=m||p===Rb.nb);d.push(p)}return Rb&&m?Rb.lf(d):d.join("");case "escape":d=Vb(a[1],b,c);if(Rb&&ka(a[1])&&"macro"===a[1][0]&&Rb.Of(a))return Rb.Yf(d);d=String(d);for(var t=2;t<a.length;t++)nb[a[t]]&&(d=nb[a[t]](d));return d;case "tag":var q=a[1];if(!Nb[q])throw Error("Unable to resolve tag reference "+q+".");return d={wd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=Yb(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Yb=function(a,b,c){try{return Qb(Wb(a,b,c))}catch(d){JSON.stringify(a)}return null};var Zb=function(){var a=function(b){return{toString:function(){return b}}};return{Uc:a("convert_case_to"),Vc:a("convert_false_to"),Wc:a("convert_null_to"),Xc:a("convert_true_to"),Yc:a("convert_undefined_to"),qa:a("function"),ze:a("instance_name"),Ae:a("live_only"),Be:a("malware_disabled"),Cg:a("original_vendor_template_id"),Ce:a("once_per_event"),md:a("once_per_load"),nd:a("setup_tags"),De:a("tag_id"),od:a("teardown_tags")}}();var $b=null,cc=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];$b=ac(a);for(var e=0;e<Lb.length;e++){var g=Lb[e],h=bc(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<Nb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},bc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=$b(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=$b(e[g]);if(null===h)return null;
if(h)return!1}return!0},ac=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Yb(Mb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var dc,ec=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Te&&(l["fix_"+m]=!0),l.xd=l.xd||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=p.startTag();
if(q){var r=k.slice(q.length);if(r.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=r.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,D:q.D,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var r={};q[2].replace(e,function(v,y,x,w,C){var A=x||w||C||g.test(y)&&y||null,D=document.createElement("div");D.innerHTML=A;r[y]=D.textContent||D.innerText||A});return{tagName:q[1],D:r,Xa:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var r=p[q]();return r?(r.type=r.type||q,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.xd&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Id=function(){return this[this.length-1]};v.wc=function(D){var B=this.Id();return B&&B.tagName&&B.tagName.toUpperCase()===D.toUpperCase()};v.ff=
function(D){for(var B=0,H;H=this[B];B++)if(H.tagName===D)return!0;return!1};var y=function(D){D&&"startTag"===D.type&&(D.Xa=q.test(D.tagName)||D.Xa);return D},x=t,w=function(){k="</"+v.pop().tagName+">"+k},C={startTag:function(D){var B=D.tagName;"TR"===B.toUpperCase()&&v.wc("TABLE")?(k="<TBODY>"+k,A()):l.Kg&&r.test(B)&&v.ff(B)?v.wc(B)?w():(k="</"+D.tagName+">"+k,A()):D.Xa||v.push(D)},endTag:function(D){v.Id()?l.wf&&!v.wc(D.tagName)?w():v.pop():l.wf&&(x(),A())}},A=function(){var D=k,B=y(x());k=D;if(B&&
C[B.type])C[B.type](B)};t=function(){A();return y(x())}}();return{append:function(q){k+=q},eg:t,Qg:function(q){for(var r;(r=t())&&(!q[r.type]||!1!==q[r.type](r)););},clear:function(){var q=k;k="";return q},Rg:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.Xg="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.Tg=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.Yg=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,p;for(p in m.D){var t=m.D[p];
n+=" "+p+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.Xa?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.Jg=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.Ye=a.Ye||!b[h]&&h;dc=a})();(function(){function a(){}function b(p){return void 0!==p&&null!==p}function c(p,t,q){var r,v=p&&p.length||0;for(r=0;r<v;r++)t.call(q,p[r],r)}function d(p,t,q){for(var r in p)p.hasOwnProperty(r)&&t.call(q,r,p[r])}function e(p,
t){d(t,function(q,r){p[q]=r});return p}function g(p,t){p=p||{};d(t,function(q,r){b(p[q])||(p[q]=r)});return p}function h(p){try{return m.call(p)}catch(q){var t=[];c(p,function(r){t.push(r)});return t}}var k={Je:a,Ke:a,Le:a,Me:a,Ue:a,Ve:function(p){return p},done:a,error:function(p){throw p;},ig:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function p(q,r,v){var y="data-ps-"+r;if(2===arguments.length){var x=q.getAttribute(y);return b(x)?String(x):x}b(v)&&""!==v?q.setAttribute(y,
v):q.removeAttribute(y)}function t(q,r){var v=q.ownerDocument;e(this,{root:q,options:r,Ya:v.defaultView||v.parentWindow,wa:v,Cb:dc("",{Te:!0}),ac:[q],Ec:"",Fc:v.createElement(q.nodeName),Va:[],ka:[]});p(this.Fc,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.ka,arguments);for(var q;!this.wb&&this.ka.length;)q=this.ka.shift(),"function"===typeof q?this.bf(q):this.Qc(q)};t.prototype.bf=function(q){var r={type:"function",value:q.name||q.toString()};this.Bc(r);q.call(this.Ya,this.wa);this.Nd(r)};
t.prototype.Qc=function(q){this.Cb.append(q);for(var r,v=[],y,x;(r=this.Cb.eg())&&!(y=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(x=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)v.push(r);this.zg(v);y&&this.Cf(r);x&&this.Df(r)};t.prototype.zg=function(q){var r=this.Ze(q);r.qd&&(r.mc=this.Ec+r.qd,this.Ec+=r.cg,this.Fc.innerHTML=r.mc,this.wg())};t.prototype.Ze=function(q){var r=this.ac.length,v=[],y=[],x=[];c(q,function(w){v.push(w.text);if(w.D){if(!/^noscript$/i.test(w.tagName)){var C=
r++;y.push(w.text.replace(/(\/?>)/," data-ps-id="+C+" $1"));"ps-script"!==w.D.id&&"ps-style"!==w.D.id&&x.push("atomicTag"===w.type?"":"<"+w.tagName+" data-ps-proxyof="+C+(w.Xa?" />":">"))}}else y.push(w.text),x.push("endTag"===w.type?w.text:"")});return{Zg:q,raw:v.join(""),qd:y.join(""),cg:x.join("")}};t.prototype.wg=function(){for(var q,r=[this.Fc];b(q=r.shift());){var v=1===q.nodeType;if(!v||!p(q,"proxyof")){v&&(this.ac[p(q,"id")]=q,p(q,"id",null));var y=q.parentNode&&p(q.parentNode,"proxyof");
y&&this.ac[y].appendChild(q)}r.unshift.apply(r,h(q.childNodes))}};t.prototype.Cf=function(q){var r=this.Cb.clear();r&&this.ka.unshift(r);q.src=q.D.src||q.D.Dg;q.src&&this.Va.length?this.wb=q:this.Bc(q);var v=this;this.yg(q,function(){v.Nd(q)})};t.prototype.Df=function(q){var r=this.Cb.clear();r&&this.ka.unshift(r);q.type=q.D.type||q.D.Eg||"text/css";this.Ag(q);r&&this.write()};t.prototype.Ag=function(q){var r=this.af(q);this.Mf(r);q.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=q.content:
r.appendChild(this.wa.createTextNode(q.content)))};t.prototype.af=function(q){var r=this.wa.createElement(q.tagName);r.setAttribute("type",q.type);d(q.D,function(v,y){r.setAttribute(v,y)});return r};t.prototype.Mf=function(q){this.Qc('<span id="ps-style"/>');var r=this.wa.getElementById("ps-style");r.parentNode.replaceChild(q,r)};t.prototype.Bc=function(q){q.Uf=this.ka;this.ka=[];this.Va.unshift(q)};t.prototype.Nd=function(q){q!==this.Va[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Va.shift(),this.write.apply(this,q.Uf),!this.Va.length&&this.wb&&(this.Bc(this.wb),this.wb=null))};t.prototype.yg=function(q,r){var v=this.$e(q),y=this.pg(v),x=this.options.Je;q.src&&(v.src=q.src,this.mg(v,y?x:function(){r();x()}));try{this.Lf(v),q.src&&!y||r()}catch(w){this.options.error(w),r()}};t.prototype.$e=function(q){var r=this.wa.createElement(q.tagName);d(q.D,function(v,y){r.setAttribute(v,y)});q.content&&(r.text=q.content);return r};t.prototype.Lf=function(q){this.Qc('<span id="ps-script"/>');
var r=this.wa.getElementById("ps-script");r.parentNode.replaceChild(q,r)};t.prototype.mg=function(q,r){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var y=this.options.error;e(q,{onload:function(){v();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),r())},onerror:function(){var x={message:"remote script failed "+q.src};v();y(x);r()}})};t.prototype.pg=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.ig&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function p(){var y=r.shift(),x;y&&(x=y[y.length-1],x.Ke(),y.stream=t.apply(null,y),x.Le())}function t(y,x,w){function C(H){H=w.Ve(H);v.write(H);w.Me(H)}v=new n(y,w);v.id=q++;v.name=w.name||v.id;var A=y.ownerDocument,D={close:A.close,open:A.open,write:A.write,writeln:A.writeln};e(A,{close:a,open:a,write:function(){return C(h(arguments).join(""))},writeln:function(){return C(h(arguments).join("")+"\n")}});var B=v.Ya.onerror||a;v.Ya.onerror=function(H,N,R){w.error({Ng:H+
" - "+N+":"+R});B.apply(v.Ya,arguments)};v.write(x,function(){e(A,D);v.Ya.onerror=B;w.done();v=null;p()});return v}var q=0,r=[],v=null;return e(function(y,x,w){"function"===typeof w&&(w={done:w});w=g(w,k);y=/^#/.test(y)?l.document.getElementById(y.substr(1)):y.Lg?y[0]:y;var C=[y,x,w];y.Xf={cancel:function(){C.stream?C.stream.abort():C[1]=a}};w.Ue(C);r.push(C);v||p();return y.Xf},{streams:{},Pg:r,Fg:n})}();ec=l.postscribe}})();var rc={},sc=null,tc=Math.random();rc.m="GTM-5P4V6Z";rc.rb="490";var uc="www.googletagmanager.com/gtm.js";var vc=uc,wc=null,xc=null,yc=null,zc="//www.googletagmanager.com/a?id="+rc.m+"&cv=205",Ac={},Bc={},Cc=function(){var a=sc.sequence||0;sc.sequence=a+1;return a};var E=function(a,b,c,d){return(2===Dc()||d||"http:"!=f.location.protocol?a:b)+c},Dc=function(){var a=La(),b;if(1===a)a:{var c=vc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=u.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Ec=!1;var Ic={},Jc=function(a){Ic.GTM=Ic.GTM||[];Ic.GTM[a]=!0};
var Kc=function(){return"&tc="+Nb.filter(function(a){return a}).length},Tc=function(){Lc&&(f.clearTimeout(Lc),Lc=void 0);void 0===Mc||Nc[Mc]&&!Oc||(Pc[Mc]||Qc.Qf()||0>=Rc--?(Jc(1),Pc[Mc]=!0):(Qc.gg(),Na(Sc()),Nc[Mc]=!0,Oc=""))},Sc=function(){var a=Mc;if(void 0===a)return"";for(var b,c=[],d=Ic.GTM||[],e=0;e<d.length;e++)d[e]&&(c[Math.floor(e/6)]^=1<<e%6);for(var g=0;g<c.length;g++)c[g]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(c[g]||0);b=c.join("");return[Uc,Nc[a]?"":
"&es=1",Vc[a],b?"&u="+b:"",Kc(),Oc,"&z=0"].join("")},Wc=function(){return[zc,"&v=3&t=t","&pid="+oa(),"&rv="+rc.rb].join("")},Xc="0.005000">Math.random(),Uc=Wc(),Yc=function(){Uc=Wc()},Nc={},Oc="",Mc=void 0,Vc={},Pc={},Lc=void 0,Qc=function(a,b){var c=0,d=0;return{Qf:function(){if(c<a)return!1;ua()-d>=b&&(c=0);return c>=a},gg:function(){ua()-d>=b&&(c=0);c++;d=ua()}}}(2,1E3),Rc=1E3,Zc=function(a,b){if(Xc&&!Pc[a]&&Mc!==a){Tc();Mc=a;Oc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):
"*";Vc[a]="&e="+c+"&eid="+a;Lc||(Lc=f.setTimeout(Tc,500))}},$c=function(a,b,c){if(Xc&&!Pc[a]&&b){a!==Mc&&(Tc(),Mc=a);var d=c+String(b[Zb.qa]||"").replace(/_/g,"");Oc=Oc?Oc+"."+d:"&tr="+d;Lc||(Lc=f.setTimeout(Tc,500));2022<=Sc().length&&Tc()}};var ad={},bd=new va,cd={},dd={},hd={name:"dataLayer",set:function(a,b){Fa(ed(a,b),cd);fd()},get:function(a){return gd(a,2)},reset:function(){bd=new va;cd={};fd()}},gd=function(a,b){if(2!=b){var c=bd.get(a);if(Xc){var d=id(a);c!==d&&Jc(5)}return c}return id(a)},id=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:kd(d)},kd=function(a){for(var b=cd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var nd=function(a,b){dd.hasOwnProperty(a)||(bd.set(a,b),Fa(ed(a,b),cd),fd())},ed=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},fd=function(a){pa(dd,function(b,c){bd.set(b,c);Fa(ed(b,void 0),cd);Fa(ed(b,c),cd);a&&delete dd[b]})},od=function(a,b){ad[a]=ad[a]||{};var c=id(b);"array"===Ca(c)||"object"===Ca(c)?ad[a][b]=Fa(c):ad[a][b]=c},pd=function(a,b){if(ad[a])return ad[a][b]};var qd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),rd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},sd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]};
var ud=function(a){var b=gd("gtm.whitelist");b&&Jc(9);var c=b&&Aa(sa(b),rd),d=gd("gtm.blacklist");d||(d=gd("tagTypeBlacklist"))&&Jc(3);d?Jc(8):d=[];
td()&&(d=sa(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=la(sa(d),"google")&&Jc(2);var e=d&&Aa(sa(d),sd),g={};return function(h){var k=h&&h[Zb.qa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Bc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>la(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>la(c,l[p])){Jc(11);
n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=la(e,k);if(q)t=q;else{var r;b:{for(var v=l||[],y=new va,x=0;x<e.length;x++)y.set(e[x],!0);for(var w=0;w<v.length;w++)if(y.get(v[w])){r=!0;break b}r=!1}var C=r;C&&Jc(10);t=C}}return g[k]=!m||t}},td=function(){return qd.test(f.location&&f.location.hostname)};var vd={hf:function(a,b){b[Zb.Uc]&&"string"===typeof a&&(a=1==b[Zb.Uc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Zb.Wc)&&null===a&&(a=b[Zb.Wc]);b.hasOwnProperty(Zb.Yc)&&void 0===a&&(a=b[Zb.Yc]);b.hasOwnProperty(Zb.Xc)&&!0===a&&(a=b[Zb.Xc]);b.hasOwnProperty(Zb.Vc)&&!1===a&&(a=b[Zb.Vc]);return a}};var wd={active:!0,isWhitelisted:function(){return!0}},xd=function(a){var b=sc.zones;!b&&a&&(b=sc.zones=a());return b};var yd=!1,zd=0,Ad=[];function Bd(a){if(!yd){var b=u.createEventObject,c="complete"==u.readyState,d="interactive"==u.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){yd=!0;for(var e=0;e<Ad.length;e++)z(Ad[e])}Ad.push=function(){for(var g=0;g<arguments.length;g++)z(arguments[g]);return 0}}}function Cd(){if(!yd&&140>zd){zd++;try{u.documentElement.doScroll("left"),Bd()}catch(a){f.setTimeout(Cd,50)}}}var Dd=function(a){yd?a():Ad.push(a)};var Ed=function(){function a(d){return!ja(d)||0>d?0:d}if(!sc._li&&f.performance&&f.performance.timing){var b=f.performance.timing.navigationStart,c=ja(hd.get("gtm.start"))?hd.get("gtm.start"):0;sc._li={cst:a(c-b),cbt:a(xc-b)}}};var Id=!1,Jd=function(){return f.GoogleAnalyticsObject&&f[f.GoogleAnalyticsObject]},Kd=!1;
var Ld=function(a){f.GoogleAnalyticsObject||(f.GoogleAnalyticsObject=a||"ga");var b=f.GoogleAnalyticsObject;if(f[b])f.hasOwnProperty(b)||Jc(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);f[b]=c}Ed();return f[b]},Md=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Jd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Od=function(){},Nd=function(){return f.GoogleAnalyticsObject||"ga"},Pd=!1;var Wd=function(a){};function Vd(a,b){a.containerId=rc.m;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function Xd(a,b,c,d,e){var g=Nb[a],h=Yd(a,b,c,d,e);if(!h)return null;var k=Vb(g[Zb.nd],d,[]);if(k&&k.length){var l=k[0];h=Xd(l.index,b,{I:h,O:1===l.wd?c.terminate:h,terminate:c.terminate},d,e)}return h}
function Yd(a,b,c,d,e){function g(){if(h[Zb.Be])l();else{var x=Wb(h,d,[]),w=!1;x.vtp_gtmOnSuccess=function(){if(!w){w=!0;$c(d.id,Nb[a],"5");k()}};x.vtp_gtmOnFailure=function(){if(!w){w=!0;$c(d.id,Nb[a],"6");l()}};x.vtp_gtmTagId=h.tag_id;x.vtp_gtmEventId=d.id;$c(d.id,h,"1");try{Ub(x)}catch(C){Wd(C);$c(d.id,h,"7");w||(w=!0,l())}}}var h=Nb[a],k=c.I,l=c.O,m=c.terminate;if(d.oc(h))return null;var n=Vb(h[Zb.od],d,[]);if(n&&n.length){var p=n[0],t=Xd(p.index,b,{I:k,O:l,terminate:m},d,e);if(!t)return null;
k=t;l=2===p.wd?m:t}if(h[Zb.md]||h[Zb.Ce]){var q=h[Zb.md]?Ob:b,r=k,v=l;if(!q[a]){g=xa(g);var y=Zd(a,q,g);k=y.I;l=y.O}return function(){q[a](r,v)}}return g}function Zd(a,b,c){var d=[],e=[];b[a]=$d(d,e,c);return{I:function(){b[a]=ae;for(var g=0;g<d.length;g++)d[g]()},O:function(){b[a]=be;for(var g=0;g<e.length;g++)e[g]()}}}function $d(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function ae(a){a()}function be(a,b){b()};function ce(a){var b=0,c=0,d=!1;return{add:function(){c++;return xa(function(){b++;d&&b>=c&&a()})},Re:function(){d=!0;b>=c&&a()}}}
var fe=function(a){for(var b=ce(a.callback||fa),c=[],d=[],e=0;e<Nb.length;e++)if(a.Ra[e]){var g=Nb[e];var h=b.add();try{var k=Xd(e,c,{I:h,O:h,terminate:h},a,e);k?d.push({Xd:e,b:Xb(g),vf:k}):(de(e,a),h())}catch(m){h()}}b.Re();d.sort(ee);for(var l=0;l<d.length;l++)d[l].vf();return 0<d.length};
function ee(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.Xd,k=b.Xd;g=h>k?1:h<k?-1:0}return g}function de(a,b){if(!Xc)return;var c=function(d){var e=b.oc(Nb[d])?"3":"4",g=Vb(Nb[d][Zb.nd],b,[]);g&&g.length&&c(g[0].index);$c(b.id,Nb[d],e);var h=Vb(Nb[d][Zb.od],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var ge=!1,he=function(a,b,c,d){if("gtm.js"==b){if(ge)return!1;ge=!0}Zc(a,b);od(a,"event");od(a,"ecommerce");var e={id:a,name:b,callback:d,oc:ud(c),Ra:[],Jd:function(m){Jc(6);Wd(m)}};e.Ra=cc(e);var g=fe(e);"gtm.js"!==b&&"gtm.sync"!==b||Od();if(!g)return g;for(var h={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,
__sdl:!0,__tl:!0,__ytl:!0},k=0;k<e.Ra.length;k++)if(e.Ra[k]){var l=Nb[k];if(l&&!h[l[Zb.qa]])return!0}return!1};var F={Nb:"event_callback",Pb:"event_timeout"};var je={};var ke=/[A-Z]+/,le=/\s/,me=function(a){if(ia(a)&&(a=ta(a),!le.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(ke.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],da:d}}}}},oe=function(a){for(var b={},c=0;c<a.length;++c){var d=me(a[c]);d&&(b[d.id]=d)}ne(b);var e=[];pa(b,function(g,h){e.push(h)});return e};
function ne(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.da[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var qe=null,re={},se={},te,ue=function(a,b){var c={event:a};b&&(c.eventModel=Fa(b),b[F.Nb]&&(c.eventCallback=b[F.Nb]),b[F.Pb]&&(c.eventTimeout=b[F.Pb]));return c};
var ze={config:function(a){},event:function(a){var b=a[1];if(ia(b)&&!(3<a.length)){var c;if(2<
a.length){if(!Ea(a[2]))return;c=a[2]}var d=ue(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];je[b]||(je[b]=[]);je[b].push(c)}},set:function(a){var b;2==a.length&&Ea(a[1])?b=Fa(a[1]):3==a.length&&ia(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=Fa(b),b.event="gtag.set",b._clear=!0,b}},Ae={policy:!0};var Be=function(){var a=!1;return a};var He=function(a){if(Ge(a))return a;this.vg=a};He.prototype.Bf=function(){return this.vg};var Ge=function(a){return!a||"object"!==Ca(a)||Ea(a)?!1:"getUntrustedUpdateValue"in a};He.prototype.getUntrustedUpdateValue=He.prototype.Bf;var Ie=!1,Je=[];function Ke(){if(!Ie){Ie=!0;for(var a=0;a<Je.length;a++)z(Je[a])}}var Le=function(a){Ie?z(a):Je.push(a)};var Me=[],Ne=!1;function Oe(a){var b=a.eventCallback,c=xa(function(){ha(b)&&z(function(){b(rc.m)})}),d=a.eventTimeout;d&&f.setTimeout(c,Number(d));return c}
var Pe=function(a){return f["dataLayer"].push(a)},Re=function(a){var b=a._clear;pa(a,function(g,h){"_clear"!==g&&(b&&nd(g,void 0),nd(g,h))});var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Cc(),a["gtm.uniqueEventId"]=d,nd("gtm.uniqueEventId",d));yc=c;var e=Qe(a);yc=null;if(!wc){wc=a["gtm.start"];}return e};
function Qe(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=sc.zones;d=e?e.checkState(rc.m,c):wd;if(!d.active)return!1;var g=Oe(a);return he(c,b,d.isWhitelisted,g)?!0:!1}
var Se=function(){for(var a=!1;!Ne&&0<Me.length;){Ne=!0;delete cd.eventModel;fd();var b=Me.shift();if(null!=b){var c=Ge(b);if(c){var d=b;b=Ge(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=gd(h,1);if(ka(k)||Ea(k))k=Fa(k);dd[h]=k}}try{if(ha(b))try{b.call(hd)}catch(v){}else if(ka(b)){var l=b;if(ia(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=gd(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ia(b[0])){var r=ze[b[0]];if(r&&(!c||!Ae[b[0]])){b=r(b);break a}}b=void 0}if(!b){Ne=!1;continue}}a=Re(b)||a}}finally{c&&fd(!0)}}Ne=!1}
return!a},Te=function(){var a=Se();try{var b=rc.m,c=f["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Ue=function(){var a=Ia("dataLayer",[]),b=Ia("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Dd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Le(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var d;
if(0<sc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new He(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Me.push.apply(Me,d);if(300<this.length)for(Jc(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Se()&&h};Me.push.apply(Me,a.slice(0));z(Te)};var We=function(a){return Ve?u.querySelectorAll(a):null},Xe=function(a,b){if(!Ve)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!u.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Ye=!1;if(u.querySelectorAll)try{var Ze=u.querySelectorAll(":root");Ze&&1==Ze.length&&Ze[0]==u.documentElement&&(Ye=!0)}catch(a){}var Ve=Ye;var $e;var wf={};wf.nb=new String("undefined");
var xf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===wf.nb?b:a[d]);return c.join("")}};xf.prototype.toString=function(){return this.resolve("undefined")};xf.prototype.valueOf=xf.prototype.toString;wf.Ee=xf;wf.Zb={};wf.lf=function(a){return new xf(a)};var yf={};wf.hg=function(a,b){var c=Cc();yf[c]=[a,b];return c};wf.td=function(a){var b=a?0:1;return function(c){var d=yf[c];if(d&&"function"===typeof d[b])d[b]();yf[c]=void 0}};wf.Of=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};wf.Yf=function(a){if(a===wf.nb)return a;var b=Cc();wf.Zb[b]=a;return'google_tag_manager["'+rc.m+'"].macro('+b+")"};wf.Sf=function(a,b,c){a instanceof wf.Ee&&(a=a.resolve(wf.hg(b,c)),b=fa);return{mc:a,I:b}};var zf=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Qa(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return d},Af=function(a){sc.hasOwnProperty("autoEventsSettings")||(sc.autoEventsSettings={});var b=sc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},
Bf=function(a,b,c){Af(a)[b]=c},Cf=function(a,b,c,d){var e=Af(a),g=wa(e,b,d);e[b]=c(g)},Df=function(a,b,c){var d=Af(a);return wa(d,b,c)};var Ef=function(){for(var a=Ga.userAgent+(u.cookie||"")+(u.referrer||""),b=a.length,c=f.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(ua()/1E3)].join(".")},Hf=function(a,b,c,d){var e=Ff(b);return fb(a,e,Gf(c),d)},Ff=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Gf=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function If(a,b){var c=""+Ff(a),d=Gf(b);1<d&&(c+="-"+d);return c};var Jf=["1"],Kf={},Of=function(a,b,c,d){var e=Lf(a);Kf[e]||Mf(e,b,c)||(Nf(e,Ef(),b,c,d),Mf(e,b,c))};function Nf(a,b,c,d,e){var g;g=["1",If(d,c),b].join(".");kb(a,g,c,d,0==e?void 0:new Date(ua()+1E3*(void 0==e?7776E3:e)))}function Mf(a,b,c){var d=Hf(a,b,c,Jf);d&&(Kf[a]=d);return d}function Lf(a){return(a||"_gcl")+"_au"};var Pf=function(){for(var a=[],b=u.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Mc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Mc]||(g[a[h].Mc]=[]),g[a[h].Mc].push({timestamp:k[1],yf:k[2]}))}return g};function Qf(){for(var a=Rf,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Sf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Rf,Tf,Uf=function(a){Rf=Rf||Sf();Tf=Tf||Qf();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Rf[l],Rf[m],Rf[n],Rf[p])}return b.join("")},Vf=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Tf[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Rf=Rf||Sf();Tf=Tf||
Qf();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Wf;function Xf(a,b){if(!a||b===u.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var Yf=function(){var a=Ia("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Zf=/(.*?)\*(.*?)\*(.*)/,$f=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,ag=/^(?:www\.|m\.|amp\.)+/,bg=/([^?#]+)(\?[^#]*)?(#.*)?/,cg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,eg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Uf(String(d))))}var e=b.join("*");return["1",dg(e),e].join("*")},dg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Wf)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Wf=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Wf[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},gg=function(){return function(a){var b=bb(f.location.href),c=b.search.replace("?",""),d=Ya(c,"_gl",!0)||"";a.query=fg(d)||{};var e=ab(b,"fragment").match(cg);a.fragment=fg(e&&e[3]||
"")||{}}},fg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Zf.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===dg(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=Vf(t[q+1]);return p}}}}catch(r){}};
function hg(a,b,c){function d(m){var n=m,p=cg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=bg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function ig(a,b,c){for(var d={},e={},g=Yf().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Xf(k.domains,b)&&(k.fragment?ya(e,k.callback()):ya(d,k.callback()))}if(za(d)){var l=eg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=u.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=hg(l,a.action);Va.test(v)&&(a.action=v)}}}else jg(l,a,!1)}if(!c&&za(e)){var y=eg(e);jg(y,a,!0)}}function jg(a,b,c){if(b.href){var d=hg(a,b.href,void 0===c?!1:c);Va.test(d)&&(b.href=d)}}
var kg=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||ig(e,e.hostname,!1)}}catch(h){}},lg=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=ab(bb(b.action),"host");ig(b,c,!0)}}catch(d){}},mg=function(a,b,c,d){var e=Yf();e.init||(Oa(u,"mousedown",kg),Oa(u,"keyup",kg),Oa(u,"submit",lg),e.init=!0);var g={callback:a,
domains:b,fragment:"fragment"===c,forms:!!d};Yf().decorators.push(g)},ng=function(){var a=u.location.hostname,b=$f.exec(u.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(ag,"")===e.replace(ag,"")},og=function(a,b){return!1===a?!1:a||b||ng()};var pg=/^\w+$/,qg=/^[\w-]+$/,rg=/^~?[\w-]+$/,sg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function tg(a){return a&&"string"==typeof a&&a.match(pg)?a:"_gcl"}var vg=function(){var a=bb(f.location.href),b=ab(a,"query",!1,void 0,"gclid"),c=ab(a,"query",!1,void 0,"gclsrc"),d=ab(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Ya(e,"gclid",void 0);c=c||Ya(e,"gclsrc",void 0)}return ug(b,c,d)};
function ug(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(qg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function wg(a,b,c){function d(p,t){var q=xg(p,e);q&&kb(q,t,h,g,l,!0)}b=b||{};var e=tg(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Kd?7776E3:b.Kd;c=c||ua();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.ah?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var xg=function(a,b){var c=sg[a];if(void 0!==c)return b+c},yg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function zg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Ag=function(a,b,c,d,e){if(ka(b)){var g=tg(e);mg(function(){for(var h={},k=0;k<a.length;++k){var l=xg(a[k],g);if(l){var m=cb(l,u.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Bg=function(a){return a.filter(function(b){return rg.test(b)})},Cg=function(a){for(var b=["aw","dc"],c=tg(a&&a.prefix),d={},e=0;e<b.length;e++)sg[b[e]]&&(d[b[e]]=sg[b[e]]);pa(d,function(g,h){var k=cb(c+h,u.cookie);if(k.length){var l=k[0],m=yg(l),n={};n[g]=[zg(l)];wg(n,a,m)}})};var Dg=/^\d+\.fls\.doubleclick\.net$/;function Eg(a){var b=bb(f.location.href),c=ab(b,"host",!1);if(c&&c.match(Dg)){var d=ab(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Fg(a,b){if("aw"==a||"dc"==a){var c=Eg("gcl"+a);if(c)return c.split(".")}var d=tg(b);if("_gcl"==d){var e;e=vg()[a]||[];if(0<e.length)return e}var g=xg(a,d),h;if(g){var k=[];if(u.cookie){var l=cb(g,u.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=zg(l[m]);n&&-1===la(k,n)&&k.push(n)}h=Bg(k)}else h=k}else h=k}else h=[];return h}
var Gg=function(){var a=Eg("gac");if(a)return decodeURIComponent(a);var b=Pf(),c=[];pa(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].yf);g=Bg(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Hg=function(a,b,c,d,e){Of(b,c,d,e);var g=Kf[Lf(b)],h=vg().dc||[],k=!1;if(g&&0<h.length){var l=sc.joined_au=sc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ga.sendBeacon&&Ga.sendBeacon(t)||Na(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Lf(b),r=Kf[q];r&&Nf(q,r,c,d,e)}};var Ig;if(3===rc.rb.length)Ig="g";else{var Jg="G";Ig=Jg}
var Kg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Ig},Lg=function(a){var b=rc.m.split("-"),c=b[0].toUpperCase(),d=Kg[c]||"i",e=a&&"GTM"===c?b[1]:"",g;if(3===rc.rb.length){var h=void 0;g="2"+(h||"w")}else g="";return g+d+rc.rb+e};var Sg=!!f.MutationObserver,Tg=void 0,Ug=function(a){if(!Tg){var b=function(){var c=u.body;if(c)if(Sg)(new MutationObserver(function(){for(var e=0;e<Tg.length;e++)z(Tg[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Oa(c,"DOMNodeInserted",function(){d||(d=!0,z(function(){d=!1;for(var e=0;e<Tg.length;e++)z(Tg[e])}))})}};Tg=[];u.body?b():z(b)}Tg.push(a)};
var bh=function(){var a=u.body,b=u.documentElement||a&&a.parentElement,c,d;if(u.compatMode&&"BackCompat"!==u.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};Jc(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},ch=function(a){var b=bh(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},dh=function(a){if(u.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!f.getComputedStyle)return!0;var c=f.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-1)),g=Math.min(h,
g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=f.getComputedStyle(d,null))}return!1};
var kh=function(a,b,c){function d(){var h=a();g+=e?(ua()-e)*h.playbackRate/1E3:0;e=ua()}var e=0,g=0;return{yb:function(h,k,l){var m=a(),n=m.vd,p=void 0!==l?Math.round(l):void 0!==k?Math.round(m.vd*k):Math.round(m.nf),t=void 0!==k?Math.round(100*k):0>=n?0:Math.round(p/n*100),q=u.hidden?!1:.5<=ch(c);d();var r=zf(c,"gtm.video",[b]);r["gtm.videoProvider"]="youtube";r["gtm.videoStatus"]=h;r["gtm.videoUrl"]=m.url;r["gtm.videoTitle"]=m.title;r["gtm.videoDuration"]=Math.round(n);r["gtm.videoCurrentTime"]=
Math.round(p);r["gtm.videoElapsedTime"]=Math.round(g);r["gtm.videoPercent"]=t;r["gtm.videoVisible"]=q;Pe(r)},jg:function(){e=ua()},$b:function(){d()}}};var lh=f.clearTimeout,mh=f.setTimeout,G=function(a,b,c){if(Be()){b&&z(b)}else return Ka(a,b,c)},nh=function(){return new Date},oh=function(){return f.location.href},ph=function(a){return ab(bb(a),"fragment")},qh=function(a){return $a(bb(a))},rh=function(a,b){return gd(a,b||2)},sh=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Pe(a)},th=function(a,b){f[a]=b},L=function(a,b,c){b&&(void 0===f[a]||
c&&!f[a])&&(f[a]=b);return f[a]},uh=function(a,b,c){return cb(a,b,void 0===c?!0:!!c)},vh=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Kd:d},g=vg();wg(g,e);Cg(e)},wh=function(a,b,c,d,e){var g=gg(),h=Yf();h.data||(h.data={query:{},fragment:{}},g(h.data));var k={},l=h.data;l&&(ya(k,l.query),ya(k,l.fragment));for(var m=tg(b),n=0;n<a.length;++n){var p=a[n];if(void 0!==sg[p]){var t=xg(p,m),q=k[t];if(q){var r=Math.min(yg(q),ua()),v;b:{for(var y=r,x=cb(t,u.cookie),
w=0;w<x.length;++w)if(yg(x[w])>y){v=!0;break b}v=!1}v||kb(t,q,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var C={prefix:b,path:c,domain:d};wg(ug(k.gclid,k.gclsrc),C);},xh=function(a,b,c,d,e){Ag(a,b,c,d,e);},yh=function(a,b){if(Be()){b&&z(b)}else Ma(a,b)},zh=function(a){return!!Df(a,
"init",!1)},Ah=function(a){Bf(a,"init",!0)},Bh=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":vc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&pa(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});G(E("https://","http://",d))};
var Dh=wf.Sf;var Eh=new va;function Fh(a,b){function c(h){var k=bb(h),l=ab(k,"protocol"),m=ab(k,"host",!0),n=ab(k,"port"),p=ab(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0}
function Gh(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ka(c)){for(var d=0;d<c.length;d++)if(Gh({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=la(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Eh.get(q);r||(r=new RegExp(c,t),Eh.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));
case "_um":return Fh(b,c)}return!1};var Ih=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Jh={},Kh=encodeURI,M=encodeURIComponent,Lh=Na;var Mh=function(a,b){if(!a)return!1;var c=ab(bb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Nh=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Jh.Pf=function(){var a=!1;return a};var wi=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},xi=function(){this.c=1;this.e=[];this.p=null};function yi(a){var b=sc,c=b.gss=b.gss||{};return c[a]=c[a]||new xi}var zi=function(a,b){yi(a).p=b},Ai=function(a){var b=yi(a),c=b.p;if(c){var d=b.e,e=[];b.e=[];var g=function(h){for(var k=0;k<h.length;k++)try{var l=h[k];l.d?(l.d=!1,e.push(l)):c(l.n,l.t,l.p)}catch(m){}};g(d);g(e)}};var Ci=function(){var a=f.gaGlobal=f.gaGlobal||{};a.hid=a.hid||oa();return a.hid};var Ri=window,Si=document,Ti=function(a){var b=Ri._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Ri["ga-disable-"+a])return!0;try{var c=Ri.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=cb("AMP_TOKEN",Si.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Si.getElementById("__gaOptOutExtension")?!0:!1};var $i=function(a,b,c){Zi(a);var d=Math.floor(ua()/1E3);yi(a).e.push(new wi(b,d,c,void 0));Ai(a)},aj=function(a,b,c){Zi(a);var d=Math.floor(ua()/1E3);yi(a).e.push(new wi(b,d,c,!0))},Zi=function(a){if(1===yi(a).c){yi(a).c=2;var b=encodeURIComponent(a);Ka(("http:"!=f.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},cj=function(a,b){},bj=function(a,b){};var W={a:{}};
W.a.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(A){for(var D=[],B=A.split(","),H=0;H<B.length;H++){var N=Number(B[H]);if(isNaN(N))return[];p.test(B[H])||D.push(N)}return D}function c(){var A=0,D=0;return function(){var B=bh(),H=B.height;A=Math.max(y.scrollLeft+B.width,A);D=Math.max(y.scrollTop+H,D);return{qf:A,rf:D}}}function d(){r=L("self");
v=r.document;y=v.scrollingElement||v.body&&v.body.parentNode;w=c()}function e(A,D,B,H){var N=l(D),R={},V;for(V in N){R.la=V;if(N.hasOwnProperty(R.la)){var Q=Number(R.la);A<Q||(sh({event:"gtm.scrollDepth","gtm.scrollThreshold":Q,"gtm.scrollUnits":B.toLowerCase(),"gtm.scrollDirection":H,"gtm.triggers":N[R.la].join(",")}),Cf("sdl",D,function(S){return function(O){delete O[S.la];return O}}(R),{}))}R={la:R.la}}}function g(){var A=w(),D=A.qf,B=A.rf,H=D/y.scrollWidth*100,N=B/y.scrollHeight*100;e(D,"horiz.pix",
t.pb,q.ld);e(H,"horiz.pct",t.ob,q.ld);e(B,"vert.pix",t.pb,q.pd);e(N,"vert.pct",t.ob,q.pd);Bf("sdl","pending",!1)}function h(){var A=250,D=!1;v.scrollingElement&&v.documentElement&&r.addEventListener&&(A=50,D=!0);var B=0,H=!1,N=function(){H?B=mh(N,A):(B=0,g(),zh("sdl")&&!a()&&(Pa(r,"scroll",R),Pa(r,"resize",R),Bf("sdl","init",!1)));H=!1},R=function(){D&&w();B?H=!0:(B=mh(N,A),Bf("sdl","pending",!0))};return R}function k(A,D,B){if(D){var H=b(String(A));Cf("sdl",B,function(N){for(var R=0;R<H.length;R++){var V=
String(H[R]);N.hasOwnProperty(V)||(N[V]=[]);N[V].push(D)}return N},{})}}function l(A){return Df("sdl",A,{})}function m(A){!C||A.vtp_triggerStartOption?n(A):Le(function(){n(A)})}function n(A){z(A.vtp_gtmOnSuccess);var D=A.vtp_uniqueTriggerId,B=A.vtp_horizontalThresholdsPixels,H=A.vtp_horizontalThresholdsPercent,N=A.vtp_verticalThresholdUnits,R=A.vtp_verticalThresholdsPixels,V=A.vtp_verticalThresholdsPercent;switch(A.vtp_horizontalThresholdUnits){case t.pb:k(B,D,"horiz.pix");break;case t.ob:k(H,D,"horiz.pct")}switch(N){case t.pb:k(R,
D,"vert.pix");break;case t.ob:k(V,D,"vert.pct")}zh("sdl")?Df("sdl","pending")||(x||(d(),x=!0),z(function(){return g()})):(d(),x=!0,y&&(Ah("sdl"),Bf("sdl","pending",!0),z(function(){g();if(a()){var Q=h();Oa(r,"scroll",Q);Oa(r,"resize",Q)}else Bf("sdl","init",!1)})))}var p=/^\s*$/,t={ob:"PERCENT",pb:"PIXELS"},q={pd:"vertical",ld:"horizontal"},r,v,y,x=!1,w,C=!1;C=!0;W.__sdl=m;W.__sdl.g="sdl";W.__sdl.h=!0;W.__sdl.b=0}();
W.a.jsm=["customScripts"],function(){(function(a){W.__jsm=a;W.__jsm.g="jsm";W.__jsm.h=!0;W.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=L("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
W.a.sp=["google"],function(){(function(a){W.__sp=a;W.__sp.g="sp";W.__sp.h=!0;W.__sp.b=0})(function(a){var b=a.vtp_gtmOnFailure;Ed();G("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=L("google_trackConversion");if(ha(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=Nh(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),a.vtp_eventValue&&
(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Lg()})||b()}else b()},b)})}();

W.a.e=["google"],function(){(function(a){W.__e=a;W.__e.g="e";W.__e.h=!0;W.__e.b=0})(function(a){return String(pd(a.vtp_gtmEventId,"event"))})}();W.a.f=["google"],function(){(function(a){W.__f=a;W.__f.g="f";W.__f.h=!0;W.__f.b=0})(function(a){var b=rh("gtm.referrer",1)||u.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?ab(bb(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):qh(String(b)):String(b)})}();
W.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=zf(c,"gtm.click");sh(d)}}(function(b){W.__cl=b;W.__cl.g="cl";W.__cl.h=!0;W.__cl.b=0})(function(b){if(!zh("cl")){var c=L("document");Oa(c,"click",a,!0);Ah("cl")}z(b.vtp_gtmOnSuccess)})}();W.a.k=["google"],function(){(function(a){W.__k=a;W.__k.g="k";W.__k.h=!0;W.__k.b=0})(function(a){return uh(a.vtp_name,rh("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
W.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){W.__u=b;W.__u.g="u";W.__u.h=!0;W.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:rh("gtm.url",1))||oh();var d=b[a("vtp_component")];if(!d||"URL"==d)return qh(String(c));var e=bb(String(c)),g;if("QUERY"==d&&b[a("vtp_multiQueryKeys")])a:{var h=b[a("vtp_queryKey")],k;k=ka(h)?h:String(h||"").replace(/\s+/g,"").split(",");for(var l=0;l<k.length;l++){var m=ab(e,"QUERY",void 0,void 0,
k[l]);if(null!=m){g=m;break a}}g=void 0}else g=ab(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0);return g})}();W.a.v=["google"],function(){(function(a){W.__v=a;W.__v.g="v";W.__v.h=!0;W.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=rh(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();

W.a.tl=["google"],function(){function a(b){return function(){if(b.xc&&b.zc>=b.xc)b.nc&&L("self").clearInterval(b.nc);else{b.zc++;var c=nh().getTime();sh({event:b.R,"gtm.timerId":b.nc,"gtm.timerEventNumber":b.zc,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.xc,"gtm.timerStartTime":b.Wd,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Wd,"gtm.triggers":b.sg})}}}(function(b){W.__tl=b;W.__tl.g="tl";W.__tl.h=!0;W.__tl.b=0})(function(b){z(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c={R:b.vtp_eventName,
zc:0,interval:Number(b.vtp_interval),xc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),sg:String(b.vtp_uniqueTriggerId||"0"),Wd:nh().getTime()};c.nc=L("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
W.a.ua=["google"],function(){var a,b=function(c){var d={},e={},g={},h={},k={};if(c.vtp_gaSettings){var l=c.vtp_gaSettings;Fa(Nh(l.vtp_fieldsToSet,"fieldName","value"),e);Fa(Nh(l.vtp_contentGroup,"index","group"),g);Fa(Nh(l.vtp_dimension,"index","dimension"),h);Fa(Nh(l.vtp_metric,"index","metric"),k);c.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=Fa(l);c=Fa(c,m)}Fa(Nh(c.vtp_fieldsToSet,"fieldName","value"),e);Fa(Nh(c.vtp_contentGroup,
"index","group"),g);Fa(Nh(c.vtp_dimension,"index","dimension"),h);Fa(Nh(c.vtp_metric,"index","metric"),k);var n=Ld(c.vtp_functionName);if(ha(n)){var p="",t="";c.vtp_setTrackerName&&"string"==typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(t=c.vtp_trackerName,p=t+"."):(t="gtm"+Cc(),p=t+".");var q={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},r={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},v=function(K){var P=[].slice.call(arguments,0);P[0]=p+P[0];n.apply(window,P)},y=function(K,P){return void 0===P?P:K(P)},x=function(K,P){if(P)for(var ba in P)P.hasOwnProperty(ba)&&v("set",K+ba,P[ba])},w=function(){
var K=function(Wa,pb,Bb){if(!Ea(pb))return!1;for(var hb=wa(Object(pb),Bb,[]),pe=0;hb&&pe<hb.length;pe++)v(Wa,hb[pe]);return!!hb&&0<hb.length},P;c.vtp_useEcommerceDataLayer?P=pd(c.vtp_gtmEventId,"ecommerce"):c.vtp_ecommerceMacroData&&(P=c.vtp_ecommerceMacroData.ecommerce);if(!Ea(P))return;P=Object(P);var ba=wa(e,"currencyCode",P.currencyCode);void 0!==ba&&v("set","&cu",ba);K("ec:addImpression",P,"impressions");if(K("ec:addPromo",P[P.promoClick?"promoClick":"promoView"],"promotions")&&P.promoClick){v("ec:setAction",
"promo_click",P.promoClick.actionField);return}for(var na="detail checkout checkout_option click add remove purchase refund".split(" "),X=0;X<na.length;X++){var Z=P[na[X]];if(Z){K("ec:addProduct",Z,"products");v("ec:setAction",na[X],Z.actionField);break}}},C=function(K,P,ba){var na=0;if(K)for(var X in K)if(K.hasOwnProperty(X)&&(ba&&q[X]||!ba&&void 0===q[X])){var Z=r[X]?ra(K[X]):K[X];"anonymizeIp"!=X||Z||(Z=void 0);P[X]=Z;na++}return na},
A={name:t};C(e,A,!0);n("create",c.vtp_trackingId||d.trackingId,A);v("set","&gtm",Lg(!0));c.vtp_enableRecaptcha&&v("require","recaptcha","recaptcha.js");(function(K,P){void 0!==c[P]&&v("set",K,c[P])})("nonInteraction","vtp_nonInteraction");x("contentGroup",g);x("dimension",h);x("metric",k);var D={};C(e,D,!1)&&v("set",D);var B;c.vtp_enableLinkId&&
v("require","linkid","linkid.js");v("set","hitCallback",function(){var K=e&&e.hitCallback;ha(K)&&K();c.vtp_gtmOnSuccess()});if("TRACK_EVENT"==c.vtp_trackType){c.vtp_enableEcommerce&&(v("require","ec","ec.js"),w());var H={hitType:"event",eventCategory:String(c.vtp_eventCategory||d.category),eventAction:String(c.vtp_eventAction||d.action),eventLabel:y(String,c.vtp_eventLabel||d.label),eventValue:y(qa,c.vtp_eventValue||d.value)};C(B,
H,!1);v("send",H);}else if("TRACK_SOCIAL"==c.vtp_trackType){}else if("TRACK_TRANSACTION"==c.vtp_trackType){}else if("TRACK_TIMING"==
c.vtp_trackType){}else if("DECORATE_LINK"==c.vtp_trackType){}else if("DECORATE_FORM"==c.vtp_trackType){}else if("TRACK_DATA"==c.vtp_trackType){}else{c.vtp_enableEcommerce&&(v("require","ec","ec.js"),w());if(c.vtp_doubleClick||"DISPLAY_FEATURES"==c.vtp_advertisingFeaturesType){var T=
"_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","displayfeatures",void 0,{cookieName:T})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==c.vtp_advertisingFeaturesType){var U="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","adfeatures",{cookieName:U})}B?v("send","pageview",B):v("send","pageview");}if(!a){var Y=c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";c.vtp_useInternalVersion&&!c.vtp_useDebugVersion&&(Y="internal/"+Y);a=!0;G(E("https:","http:","//www.google-analytics.com/"+Y,e&&e.forceSSL),function(){var K=Jd();K&&K.loaded||c.vtp_gtmOnFailure();},c.vtp_gtmOnFailure)}}else z(c.vtp_gtmOnFailure)};W.__ua=b;W.__ua.g="ua";W.__ua.h=!0;W.__ua.b=0}();



W.a.ytl=["google"],function(){function a(){var x=Math.round(1E9*Math.random())+"";return Ra(x)?a():x}function b(x,w){if(!x)return!1;for(var C=0;C<t.length;C++)if(0<=x.indexOf("//"+t[C]+"/"+w))return!0;return!1}function c(x){var w=-1!==x.indexOf("?")?"&":"?";if(-1<x.indexOf("origin="))return x+w+"enablejsapi=1";if(!r){var C=L("document");r=C.location.protocol+"//"+C.location.hostname;C.location.port&&(r+=":"+C.location.port)}return x+w+"enablejsapi=1&origin="+encodeURIComponent(r)}function d(x,w){var C=
x.getAttribute("src");if(b(C,"embed/")){if(0<C.indexOf("enablejsapi=1"))return!0;if(w)return x.setAttribute("src",c(C)),!0}return!1}function e(x,w){if(!x.getAttribute("data-gtm-yt-inspected-"+w.Oc)&&(x.setAttribute("data-gtm-yt-inspected-"+w.Oc,"true"),d(x,w.yd))){x.id||(x.id=a());var C=L("YT"),A=C.get(x.id);A||(A=new C.Player(x.id));var D=h(A,w),B={},H;for(H in D)B.Da=H,D.hasOwnProperty(B.Da)&&A.addEventListener(B.Da,function(N){return function(R){return D[N.Da](R.data)}}(B)),B={Da:B.Da}}}function g(x){z(function(){function w(){for(var A=
C.getElementsByTagName("iframe"),D=A.length,B=0;B<D;B++)e(A[B],x)}var C=L("document");w();Ug(w)})}function h(x,w){var C,A;function D(){J=kh(function(){return{url:U,title:Y,vd:T,nf:x.getCurrentTime(),playbackRate:K}},w.Oc,x.getIframe());T=0;Y=U="";K=1;return B}function B(X){switch(X){case q.PLAYING:T=Math.round(x.getDuration());U=x.getVideoUrl();if(x.getVideoData){var Z=x.getVideoData();Y=Z?Z.title:""}K=x.getPlaybackRate();w.ef?J.yb("start"):J.$b();I=m(w.ag,w.$f,x.getDuration());return H(X);default:return B}}
function H(){P=x.getCurrentTime();ba=nh().getTime();J.jg();O();return N}function N(X){var Z;switch(X){case q.ENDED:return V(X);case q.PAUSED:Z="pause";case q.BUFFERING:var Wa=x.getCurrentTime()-P;Z=1<Math.abs((nh().getTime()-ba)/1E3*K-Wa)?"seek":Z||"buffering";x.getCurrentTime()&&(w.df?J.yb(Z):J.$b());S();return R;case q.UNSTARTED:return D(X);default:return N}}function R(X){switch(X){case q.ENDED:return V(X);case q.PLAYING:return H(X);case q.UNSTARTED:return D(X);default:return R}}function V(){for(;A;){var X=
C;lh(A);X()}w.cf&&J.yb("complete",1);return D(q.UNSTARTED)}function Q(){}function S(){A&&(lh(A),A=0,C=Q)}function O(){if(I.length&&0!==K){var X=-1,Z;do{Z=I[0];if(Z.ja>x.getDuration())return;X=(Z.ja-x.getCurrentTime())/K;if(0>X&&(I.shift(),0===I.length))return}while(0>X);C=function(){A=0;C=Q;0<I.length&&I[0].ja===Z.ja&&(I.shift(),J.yb("progress",Z.Qd,Z.Vd));O()};A=mh(C,1E3*X)}}var J,I=[],T,U,Y,K,P,ba,na=D(q.UNSTARTED);A=0;C=Q;return{onStateChange:function(X){na=na(X)},onPlaybackRateChange:function(X){P=
x.getCurrentTime();ba=nh().getTime();J.$b();K=X;S();O()}}}function k(x){for(var w=x.split(","),C=w.length,A=[],D=0;D<C;D++){var B=parseInt(w[D],10);isNaN(B)||100<B||0>B||A.push(B/100)}A.sort(function(H,N){return H-N});return A}function l(x){for(var w=x.split(","),C=w.length,A=[],D=0;D<C;D++){var B=parseInt(w[D],10);isNaN(B)||0>B||A.push(B)}A.sort(function(H,N){return H-N});return A}function m(x,w,C){var A=x.map(function(H){return{ja:H,Vd:H,Qd:void 0}});if(!w.length)return A;var D=w.map(function(H){return{ja:H*
C,Vd:void 0,Qd:H}});if(!A.length)return D;var B=A.concat(D);B.sort(function(H,N){return H.ja-N.ja});return B}function n(x){!y||x.vtp_triggerStartOption?p(x):Dd(function(){p(x)})}function p(x){var w=!!x.vtp_captureStart,C=!!x.vtp_captureComplete,A=!!x.vtp_capturePause,D=k(x.vtp_progressThresholdsPercent+""),B=l(x.vtp_progressThresholdsTimeInSeconds+""),H=!!x.vtp_fixMissingApi;if(w||C||A||D.length||B.length){var N={ef:w,cf:C,df:A,$f:D,ag:B,yd:H,Oc:void 0===x.vtp_uniqueTriggerId?"":x.vtp_uniqueTriggerId},
R=L("YT"),V=function(){g(N)};z(x.vtp_gtmOnSuccess);if(R)R.ready&&R.ready(V);else{var Q=L("onYouTubeIframeAPIReady");th("onYouTubeIframeAPIReady",function(){Q&&Q();V()});z(function(){for(var S=L("document"),O=S.getElementsByTagName("script"),J=O.length,I=0;I<J;I++){var T=O[I].getAttribute("src");if(b(T,"iframe_api")||b(T,"player_api"))return}for(var U=S.getElementsByTagName("iframe"),Y=U.length,K=0;K<Y;K++)if(!v&&d(U[K],N.yd)){G("https://www.youtube.com/iframe_api");v=!0;break}})}}else z(x.vtp_gtmOnSuccess)}
var t=["www.youtube.com","www.youtube-nocookie.com"],q={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},r,v=!1,y=!1;y=!0;W.__ytl=n;W.__ytl.g="ytl";W.__ytl.h=!0;W.__ytl.b=0}();
W.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){W.__gclidw=b;W.__gclidw.g="gclidw";W.__gclidw.h=!0;W.__gclidw.b=100})(function(b){z(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||ng())&&
wh(a,h,k,l));vh(e,c,d);Hg(g,e,c,d);var m=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");xh(a,n,b.vtp_urlPosition,!!b.vtp_formDecoration,m)}})}();
W.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},g=function(m){var n=rh(e[m.vtp_varType],1);return void 0!==n?n:m.vtp_defaultValue},h=function(m,
n){if(!m)return!1;var p=l(oh()),t;t=ka(n.vtp_affiliatedDomains)?n.vtp_affiliatedDomains:String(n.vtp_affiliatedDomains||"").replace(/\s+/g,"").split(",");for(var q=[p],r=0;r<t.length;r++)if(t[r]instanceof RegExp){if(t[r].test(m))return!1}else{var v=t[r];if(0!=v.length){if(0<=l(m).indexOf(v))return!1;q.push(l(v))}}return!Mh(m,q)},k=/^https?:\/\//i,l=function(m){k.test(m)||(m="http://"+m);return ab(bb(m),"HOST",!0)};(function(m){W.__aev=m;W.__aev.g="aev";W.__aev.h=!0;W.__aev.b=0})(function(m){switch(m.vtp_varType){case "TAG_NAME":return rh("gtm.element",
1).tagName||m.vtp_defaultValue;case "TEXT":var n,p=rh("gtm.element",1),t=rh("event",1),q=Number(nh());a===p&&b===t&&c>q-250?n=d:(d=n=p?Sa(p):"",a=p,b=t);c=q;return n||m.vtp_defaultValue;case "URL":var r;a:{var v=String(rh("gtm.elementUrl",1)||m.vtp_defaultValue||""),y=bb(v);switch(m.vtp_component||"URL"){case "URL":r=v;break a;case "IS_OUTBOUND":r=h(v,m);break a;default:r=ab(y,m.vtp_component,m.vtp_stripWww,m.vtp_defaultPages,m.vtp_queryKey)}}return r;case "ATTRIBUTE":var x;if(void 0===m.vtp_attribute)x=
g(m);else{var w=rh("gtm.element",1);x=Qa(w,m.vtp_attribute)||m.vtp_defaultValue||""}return x;default:return g(m)}})}();
W.a.gas=["google"],function(){(function(a){W.__gas=a;W.__gas.g="gas";W.__gas.h=!0;W.__gas.b=0})(function(a){var b=Fa(a),c=b;c[Zb.qa]=null;c[Zb.ze]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

W.a.hl=["google"],function(){function a(g){return g.target&&g.target.location&&g.target.location.href?g.target.location.href:oh()}function b(g,h){Oa(g,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:qh(l),C:ph(l)})})}function c(g,h){Oa(g,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:qh(l),C:ph(l)})})}function d(g,h,k){var l=h.history,m=l[g];if(ha(m))try{l[g]=function(n,p,t){m.apply(l,[].slice.call(arguments,0));k({source:g,state:n,url:qh(oh()),
C:ph(oh())})}}catch(n){}}function e(){var g={source:null,state:L("history").state||null,url:qh(oh()),C:ph(oh())};return function(h){var k=g,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.C!=h.C){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":g.C,"gtm.newUrlFragment":h.C,"gtm.oldHistoryState":g.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=g.url,m["gtm.newUrl"]=h.url;
g=h;sh(m)}}}(function(g){W.__hl=g;W.__hl.g="hl";W.__hl.h=!0;W.__hl.b=0})(function(g){var h=L("self");if(!zh("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);Ah("hl")}z(g.vtp_gtmOnSuccess)})}();
W.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=L("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){Ed();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Lg()},m=function(p){return function(t,q,r){var v="DATA_LAYER"==p?rh(r):k[q];v&&(l[t]=v)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(p){return{value:p.price,quantity:p.quantity,item_id:p.id}}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),
l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;b.push(l);a||(a=!0,G("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};W.__awct=h;W.__awct.g="awct";W.__awct.h=!0;W.__awct.b=0}();
W.a.bzi=["nonGoogleScripts"],function(){(function(a){W.__bzi=a;W.__bzi.g="bzi";W.__bzi.h=!0;W.__bzi.b=0})(function(a){try{f._bizo_data_partner_id=a.vtp_id,f._bizo_data_partner_title=a.vtp_title,f._bizo_data_partner_domain=a.vtp_domain,f._bizo_data_partner_company=a.vtp_company,f._bizo_data_partner_location=a.vtp_location,f._bizo_data_partner_employee_range=a.vtp_employeeRange,f._bizo_data_partner_sics=a.vtp_standardIndustrialClassification,f._bizo_data_partner_email=a.vtp_email,G(E("https://sjs",
"http://js",".bizographics.com/insight.min.js"),a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)}catch(b){z(a.vtp_gtmOnFailure)}})}();

W.a.remm=["google"],function(){(function(a){W.__remm=a;W.__remm.g="remm";W.__remm.h=!0;W.__remm.b=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();
W.a.baut=["nonGoogleScripts"],function(){var a=!1;(function(b){W.__baut=b;W.__baut.g="baut";W.__baut.h=!0;W.__baut.b=0})(function(b){var c=b.vtp_uetqName||"uetq",d=L(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},g=function(h,k){void 0!==b[h]&&(e[k]=b[h])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");d.push(e);b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();
else try{G("//bat.bing.com/bat.js",function(){var h=Ih(L("UET"),{ti:b.vtp_tagId,q:d});f[c]=h;h.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(h){z(b.vtp_gtmOnFailure)}})}();
W.a.smm=["google"],function(){(function(a){W.__smm=a;W.__smm.g="smm";W.__smm.h=!0;W.__smm.b=0})(function(a){var b=a.vtp_input,c=Nh(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



W.a.twitter_website_tag=["nonGoogleScripts"],function(){(function(a){W.__twitter_website_tag=a;W.__twitter_website_tag.g="twitter_website_tag";W.__twitter_website_tag.h=!0;W.__twitter_website_tag.b=0})(function(a){(function(c,d){c.twq||(d=c.twq=function(){d.exe?d.exe.apply(d,arguments):d.queue.push(arguments)},d.version="1",d.queue=[],G("//static.ads-twitter.com/uwt.js"))})(window,void 0);window.twq("init",String(a.vtp_twitter_pixel_id));var b=Nh(a.vtp_event_parameters,"param_table_key_column","param_table_value_column");
b&&void 0!==b.content_ids&&(b.content_ids=JSON.parse(b.content_ids.replace(/'/g,'"')));window.twq("track",String(a.vtp_event_type),b);z(a.vtp_gtmOnSuccess)})}();
W.a.zone=[],function(){function a(p){for(var t=p.vtp_boundaries||[],q=0;q<t.length;q++)if(!t[q])return!1;return!0}function b(p){var t=rc.m,q=t+":"+p.vtp_gtmTagId,r=rh("gtm.uniqueEventId")||0,v=xd(function(){return new k}),y=a(p),x=p.vtp_enableTypeRestrictions?p.vtp_whitelistedTypes.map(function(N){return N.typeId}):null;x=x&&Aa(x,h);if(v.registerZone(q,r,y,x))for(var w=p.vtp_childContainers.map(function(N){return N.publicId}),C=0;C<w.length;C++){var A=String(w[C]);if(v.registerChild(A,t,q)){var D=
0!==A.indexOf("GTM-"),B=0===A.indexOf("SB-")?c():void 0;if(D){var H=function(N,R){sh(arguments)};H("js",new Date);H("config",A);m||Bh(A,B,D)}else Bh(A,B,D)}}}function c(){var p=uh("_oid")[0];if(p)return{oid:p,namespace:"cookie"}}var d={active:!1,isWhitelisted:function(){return!1}},e={active:!0,isWhitelisted:function(){return!0}},g={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},h={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},k=function(){this.tb={};this.Sc={}};k.prototype.checkState=
function(p,t){var q=this.tb[p];if(!q)return e;var r=this.checkState(q.Pd,t);if(!r.active)return d;for(var v=[],y=0;y<q.Rc.length;y++){var x=this.Sc[q.Rc[y]];x.Qa(t)&&v.push(x)}return v.length?{active:!0,isWhitelisted:function(w){if(!r.isWhitelisted(w))return!1;for(var C=0;C<v.length;++C)if(v[C].isWhitelisted(w))return!0;return!1}}:d};k.prototype.unregisterChild=function(p){delete this.tb[p]};k.prototype.registerZone=function(p,t,q,r){var v=this.Sc[p];if(v)return v.fg(t,q),!1;if(!q)return!1;this.Sc[p]=
new l(t,r);return!0};k.prototype.registerChild=function(p,t,q){var r=this.tb[p];if(!r&&sc[p]||r&&r.Pd!==t)return!1;if(r)return r.Rc.push(q),!1;this.tb[p]={Pd:t,Rc:[q]};return!0};var l=function(p,t){this.W=[{eventId:p,Qa:!0}];this.Jb=null;if(t){this.Jb={};for(var q=0;q<t.length;q++)this.Jb[t[q]]=!0}};l.prototype.fg=function(p,t){var q=this.W[this.W.length-1];p<=q.eventId||q.Qa!=t&&this.W.push({eventId:p,Qa:t})};l.prototype.Qa=function(p){if(!this.W||0==this.W.length)return!1;for(var t=this.W.length-
1;0<=t;t--)if(this.W[t].eventId<=p)return this.W[t].Qa;return!1};l.prototype.isWhitelisted=function(p){return this.Jb?g[p]||!!this.Jb[p]:!0};var m=!1;var n=function(p){b(p);z(p.vtp_gtmOnSuccess)};W.__zone=n;W.__zone.g="zone";W.__zone.h=!0;W.__zone.b=0}();

W.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=u.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Ja(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){z(h)}}}var b=function(d,e,g){Dd(function(){var h,k=sc;k.postscribe||(k.postscribe=ec);h=k.postscribe;var l={done:e},m=u.createElement("div");m.style.display="none";m.style.visibility="hidden";u.body.appendChild(m);try{h(m,d,l)}catch(n){z(g)}})};var c=function(d){if(u.body){var e=
d.vtp_gtmOnFailure,g=Dh(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.mc,k=g.I;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(u.body,Ta(h),k,e)()}else mh(function(){c(d)},
200)};W.__html=c;W.__html.g="html";W.__html.h=!0;W.__html.b=0}();


W.a.lcl=[],function(){function a(){var c=L("document"),d=0,e=function(g){var h=g.target;if(h&&3!==g.which&&(!g.timeStamp||g.timeStamp!==d)){d=g.timeStamp;h=Ua(h,["a","area"],100);if(!h)return g.returnValue;var k=g.defaultPrevented||!1===g.returnValue,l=Df("lcl",k?"nv.mwt":"mwt",0),m;m=k?Df("lcl","nv.ids",[]):Df("lcl","ids",[]);if(m.length){var n=zf(h,"gtm.linkClick",m);if(b(g,h,c)&&!k&&l&&h.href){var p=L((h.target||"_self").substring(1)),t=!0;if(sh(n,function(){t&&p&&(p.location.href=h.href)},l))t=
!1;else return g.preventDefault&&g.preventDefault(),g.returnValue=!1}else sh(n,function(){},l||2E3);return!0}}};Oa(c,"click",e,!1);Oa(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var g=d.href.indexOf("#"),h=d.target;if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var k=qh(d.href),l=qh(e.location);return k!==l}return!0}(function(c){W.__lcl=c;W.__lcl.g="lcl";W.__lcl.h=!0;W.__lcl.b=0})(function(c){var d=void 0===c.vtp_waitForTags?
!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,g=Number(c.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(g,m)};Cf("lcl","mwt",k,0);e||Cf("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};Cf("lcl","ids",l,[]);e||Cf("lcl","nv.ids",l,[]);zh("lcl")||(a(),Ah("lcl"));z(c.vtp_gtmOnSuccess)})}();

var dj={};dj.macro=function(a){if(wf.Zb.hasOwnProperty(a))return wf.Zb[a]},dj.onHtmlSuccess=wf.td(!0),dj.onHtmlFailure=wf.td(!1);dj.dataLayer=hd;dj.callback=function(a){Ac.hasOwnProperty(a)&&ha(Ac[a])&&Ac[a]();delete Ac[a]};dj.We=function(){sc[rc.m]=dj;Bc=W.a;Rb=Rb||wf;Sb=vd};
dj.Kf=function(){sc=f.google_tag_manager=f.google_tag_manager||{};if(sc[rc.m]){var a=sc.zones;a&&a.unregisterChild(rc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Kb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Nb.push(e[g]);for(var h=b.predicates||[],k=0;k<h.length;k++)Mb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<
n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Lb.push(p)}Pb=W;Qb=Gh;dj.We();Ue();yd=!1;zd=0;if("interactive"==u.readyState&&!u.createEventObject||"complete"==u.readyState)Bd();else{Oa(u,"DOMContentLoaded",Bd);Oa(u,"readystatechange",Bd);if(u.createEventObject&&u.documentElement.doScroll){var q=!0;try{q=!f.frameElement}catch(x){}q&&Cd()}Oa(f,"load",Bd)}Ie=!1;"complete"===u.readyState?Ke():Oa(f,"load",Ke);a:{if(!Xc)break a;f.setInterval(Yc,864E5);}xc=(new Date).getTime();}};(0,dj.Kf)();

})()
