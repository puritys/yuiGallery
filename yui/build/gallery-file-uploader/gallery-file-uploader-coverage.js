if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/gallery-file-uploader/gallery-file-uploader.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/gallery-file-uploader/gallery-file-uploader.js",
    code: []
};
_yuitest_coverage["build/gallery-file-uploader/gallery-file-uploader.js"].code=["YUI.add('gallery-file-uploader', function (Y, NAME) {","","/**","* YUI file Uploader","* implement progress bar","*","**/","    var api={},attrs={};","    attrs.autoUpload = {","        value:1","    };","","    api.initializer = function(attrs) {/*{{{*/","        if (!attrs || !attrs.container ) {","            alert(\"[yFileUploader] Missing conatiner\");","            return ;","        }","","        this.set(\"container\", attrs.container);","        if (attrs.progressBarWidth) {","            this.set(\"progressBarWidth\", attrs.progressBarWidth);","        } else {","            this.set(\"progressBarWidth\", 500); //px","        }","","        if (attrs.progressBarHeight) {","            this.set(\"progressBarHeight\", attrs.progressBarHeight);","        } else {","            this.set(\"progressBarHeight\", 20); //px","        }","","        if (attrs.progressBarContainer) {","            this.set(\"progressBarContainer\", attrs.progressBarContainer);","        }","","        this.after(\"fileselect\", this.fileSelectedTrigger, this);","        this.after(\"uploadstart\", this.fileUploadStartTrigger, this);","        this.after(\"uploadprogress\", this.fileUploadProgressTrigger, this);","        this.after(\"uploadcomplete\", this.fileUploadCompleteTrigger, this);","        this.after(\"uploaderror\", this.fileUploadErrorTrigger, this);","","","    };/*}}}*/","","    api.fileSelected = function() {","","    };","","    api.fileUpload = function (file) {","        try {","//            this.upload.call(this,file, this.get(\"uploadUrl\"), this.get(\"param\"));","            this.upload(file, this.get(\"uploadUrl\"), this.get(\"param\"));","","        } catch (e){","        }","    }","","    /*","    *","    */","    api.renderFileUploadStart = function (attrs) {","        var container = \"\";","        if (attrs && attrs.container) {","        } else{","            container = this.get('container');","        }","        //Y.one(container).setHTML(\"test\");","    };","    /*","    *","    */","    api.renderFileUploadComplete = function (attrs) {","        var container = \"\";","        var d = Y.one(\"#\"+this.barId);","        if(d) d.remove();","        this.barId = \"\";","        //this.destructor();","    };","","","    /*","    * handle progress bar","    * @param attr:json format","    * container: div id","    * width:","    */","    api.renderProgressBar = function (attrs) {","        var maxWidth = this.get('progressBarWidth');","        var maxHeight = this.get('progressBarHeight');","","        var width = Math.floor(maxWidth * attrs.percentLoaded/100);","","        var container = this.get('container');","        if (this.barId && Y.one(\"#\"+this.barId)){","            Y.one(\"#\"+this.barId).remove();","        }","        var html = document.createElement(\"div\");","        var bar = document.createElement(\"div\");","        html.innerHTML = Math.floor(attrs.percentLoaded)+\" %\";","        Y.one(html).setStyles({","            border:'1px solid black',","            height:maxHeight+'px',","            width:maxWidth+'px',","            \"text-align\":\"right\",","            \"position\":\"relative\"","        });","        Y.one(bar).setStyles({background:'#2f2f2f',","            border:'1px solid black',","            height:maxHeight+'px',","            width:width+'px',","            position:'absolute',","            top:'0px',","            left:'0px'","        });","        html.appendChild(bar);","        this.barId = Y.one(html).generateID();","        if (this.get('progressBarContainer')) {","            Y.one(this.get('progressBarContainer')).setHTML(\"\");","            Y.one(this.get('progressBarContainer')).appendChild(html);","        } else {","            Y.one(container).append(html);","        }","    };","","    /*","    *","    */","    api.renderFileUploadError = function (attrs) {","        var html = document.createElement(\"div\");","        var container = this.get('container');","        if (this.barId && Y.one(\"#\"+this.barId)){","            Y.one(\"#\"+this.barId).remove();","        }","","        html.innerHTML = \"上傳失敗，可能原因：檔案 Size 超過上限 2 MB ..\";","        Y.one(html).setStyles({","            \"color\":\"#a00\"","        });","        this.barId = Y.one(html).generateID();","        Y.one(container).append(html);","        //alert(\"Uploading file is fail.\");","    };","    /** event trigger**/","    api.fileSelectedTrigger = function (event) {","        var auto = this.get(\"autoUpload\");","        if(!event.fileList || event.fileList.length<1){return ;}","        var fileLength = event.fileList.length;","        var file;","        var i=0;","        if (auto) {","            for (i = 0; i < fileLength; i++) {","                file = event.fileList[i];","                this.fileUpload(file);  //yui default function, don't need override","            }","        } else {","            this.fileSelected();","        }","        event.preventDefault();","        event.stopPropagation();","    };","","    api.fileUploadStartTrigger = function (event) {","        this.renderFileUploadStart();","        event.preventDefault();","        event.stopPropagation();","    };","","    api.fileUploadErrorTrigger = function (event) {","        var msg = event.message;","        var status = event.status;","        this.renderFileUploadError({","            status:status,","            msg:msg","        });","        event.preventDefault();","        event.stopPropagation();","    };","    api.fileUploadProgressTrigger = function (event) {","","        var attrs = {","            percentLoaded:event.percentLoaded","        };","        this.renderProgressBar(attrs);","","        event.preventDefault();","        event.stopPropagation();","    };","","    api.fileUploadCompleteTrigger = function (event) {","        var attrs = {","            percentLoaded:event.percentLoaded,","            response:event.data","        };","        this.renderFileUploadComplete(attrs);","","        event.preventDefault();","        event.stopPropagation();","    };","","    Y.yFileUploader = Y.Base.create('yFileUploader', Y.Uploader, [],","        api,","        {","            ATTRS:attrs","        }","    );","","","","","}, '@VERSION@', {\"requires\": [\"uploader\"]});"];
_yuitest_coverage["build/gallery-file-uploader/gallery-file-uploader.js"].lines = {"1":0,"8":0,"9":0,"13":0,"14":0,"15":0,"16":0,"19":0,"20":0,"21":0,"23":0,"26":0,"27":0,"29":0,"32":0,"33":0,"36":0,"37":0,"38":0,"39":0,"40":0,"45":0,"49":0,"50":0,"52":0,"61":0,"62":0,"63":0,"65":0,"72":0,"73":0,"74":0,"75":0,"76":0,"87":0,"88":0,"89":0,"91":0,"93":0,"94":0,"95":0,"97":0,"98":0,"99":0,"100":0,"107":0,"115":0,"116":0,"117":0,"118":0,"119":0,"121":0,"128":0,"129":0,"130":0,"131":0,"132":0,"135":0,"136":0,"139":0,"140":0,"144":0,"145":0,"146":0,"147":0,"148":0,"149":0,"150":0,"151":0,"152":0,"153":0,"156":0,"158":0,"159":0,"162":0,"163":0,"164":0,"165":0,"168":0,"169":0,"170":0,"171":0,"175":0,"176":0,"178":0,"180":0,"183":0,"185":0,"186":0,"189":0,"190":0,"194":0,"196":0,"197":0,"200":0};
_yuitest_coverage["build/gallery-file-uploader/gallery-file-uploader.js"].functions = {"initializer:13":0,"fileUpload:49":0,"renderFileUploadStart:61":0,"renderFileUploadComplete:72":0,"renderProgressBar:87":0,"renderFileUploadError:128":0,"fileSelectedTrigger:144":0,"fileUploadStartTrigger:162":0,"fileUploadErrorTrigger:168":0,"fileUploadProgressTrigger:178":0,"fileUploadCompleteTrigger:189":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-file-uploader/gallery-file-uploader.js"].coveredLines = 95;
_yuitest_coverage["build/gallery-file-uploader/gallery-file-uploader.js"].coveredFunctions = 12;
_yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 1);
YUI.add('gallery-file-uploader', function (Y, NAME) {

/**
* YUI file Uploader
* implement progress bar
*
**/
    _yuitest_coverfunc("build/gallery-file-uploader/gallery-file-uploader.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 8);
var api={},attrs={};
    _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 9);
attrs.autoUpload = {
        value:1
    };

    _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 13);
api.initializer = function(attrs) {/*{{{*/
        _yuitest_coverfunc("build/gallery-file-uploader/gallery-file-uploader.js", "initializer", 13);
_yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 14);
if (!attrs || !attrs.container ) {
            _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 15);
alert("[yFileUploader] Missing conatiner");
            _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 16);
return ;
        }

        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 19);
this.set("container", attrs.container);
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 20);
if (attrs.progressBarWidth) {
            _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 21);
this.set("progressBarWidth", attrs.progressBarWidth);
        } else {
            _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 23);
this.set("progressBarWidth", 500); //px
        }

        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 26);
if (attrs.progressBarHeight) {
            _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 27);
this.set("progressBarHeight", attrs.progressBarHeight);
        } else {
            _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 29);
this.set("progressBarHeight", 20); //px
        }

        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 32);
if (attrs.progressBarContainer) {
            _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 33);
this.set("progressBarContainer", attrs.progressBarContainer);
        }

        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 36);
this.after("fileselect", this.fileSelectedTrigger, this);
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 37);
this.after("uploadstart", this.fileUploadStartTrigger, this);
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 38);
this.after("uploadprogress", this.fileUploadProgressTrigger, this);
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 39);
this.after("uploadcomplete", this.fileUploadCompleteTrigger, this);
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 40);
this.after("uploaderror", this.fileUploadErrorTrigger, this);


    };/*}}}*/

    _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 45);
api.fileSelected = function() {

    };

    _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 49);
api.fileUpload = function (file) {
        _yuitest_coverfunc("build/gallery-file-uploader/gallery-file-uploader.js", "fileUpload", 49);
_yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 50);
try {
//            this.upload.call(this,file, this.get("uploadUrl"), this.get("param"));
            _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 52);
this.upload(file, this.get("uploadUrl"), this.get("param"));

        } catch (e){
        }
    }

    /*
    *
    */
    _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 61);
api.renderFileUploadStart = function (attrs) {
        _yuitest_coverfunc("build/gallery-file-uploader/gallery-file-uploader.js", "renderFileUploadStart", 61);
_yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 62);
var container = "";
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 63);
if (attrs && attrs.container) {
        } else{
            _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 65);
container = this.get('container');
        }
        //Y.one(container).setHTML("test");
    };
    /*
    *
    */
    _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 72);
api.renderFileUploadComplete = function (attrs) {
        _yuitest_coverfunc("build/gallery-file-uploader/gallery-file-uploader.js", "renderFileUploadComplete", 72);
_yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 73);
var container = "";
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 74);
var d = Y.one("#"+this.barId);
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 75);
if(d) {d.remove();}
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 76);
this.barId = "";
        //this.destructor();
    };


    /*
    * handle progress bar
    * @param attr:json format
    * container: div id
    * width:
    */
    _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 87);
api.renderProgressBar = function (attrs) {
        _yuitest_coverfunc("build/gallery-file-uploader/gallery-file-uploader.js", "renderProgressBar", 87);
_yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 88);
var maxWidth = this.get('progressBarWidth');
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 89);
var maxHeight = this.get('progressBarHeight');

        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 91);
var width = Math.floor(maxWidth * attrs.percentLoaded/100);

        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 93);
var container = this.get('container');
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 94);
if (this.barId && Y.one("#"+this.barId)){
            _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 95);
Y.one("#"+this.barId).remove();
        }
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 97);
var html = document.createElement("div");
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 98);
var bar = document.createElement("div");
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 99);
html.innerHTML = Math.floor(attrs.percentLoaded)+" %";
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 100);
Y.one(html).setStyles({
            border:'1px solid black',
            height:maxHeight+'px',
            width:maxWidth+'px',
            "text-align":"right",
            "position":"relative"
        });
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 107);
Y.one(bar).setStyles({background:'#2f2f2f',
            border:'1px solid black',
            height:maxHeight+'px',
            width:width+'px',
            position:'absolute',
            top:'0px',
            left:'0px'
        });
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 115);
html.appendChild(bar);
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 116);
this.barId = Y.one(html).generateID();
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 117);
if (this.get('progressBarContainer')) {
            _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 118);
Y.one(this.get('progressBarContainer')).setHTML("");
            _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 119);
Y.one(this.get('progressBarContainer')).appendChild(html);
        } else {
            _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 121);
Y.one(container).append(html);
        }
    };

    /*
    *
    */
    _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 128);
api.renderFileUploadError = function (attrs) {
        _yuitest_coverfunc("build/gallery-file-uploader/gallery-file-uploader.js", "renderFileUploadError", 128);
_yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 129);
var html = document.createElement("div");
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 130);
var container = this.get('container');
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 131);
if (this.barId && Y.one("#"+this.barId)){
            _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 132);
Y.one("#"+this.barId).remove();
        }

        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 135);
html.innerHTML = "上傳失敗，可能原因：檔案 Size 超過上限 2 MB ..";
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 136);
Y.one(html).setStyles({
            "color":"#a00"
        });
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 139);
this.barId = Y.one(html).generateID();
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 140);
Y.one(container).append(html);
        //alert("Uploading file is fail.");
    };
    /** event trigger**/
    _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 144);
api.fileSelectedTrigger = function (event) {
        _yuitest_coverfunc("build/gallery-file-uploader/gallery-file-uploader.js", "fileSelectedTrigger", 144);
_yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 145);
var auto = this.get("autoUpload");
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 146);
if(!event.fileList || event.fileList.length<1){return ;}
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 147);
var fileLength = event.fileList.length;
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 148);
var file;
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 149);
var i=0;
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 150);
if (auto) {
            _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 151);
for (i = 0; i < fileLength; i++) {
                _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 152);
file = event.fileList[i];
                _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 153);
this.fileUpload(file);  //yui default function, don't need override
            }
        } else {
            _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 156);
this.fileSelected();
        }
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 158);
event.preventDefault();
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 159);
event.stopPropagation();
    };

    _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 162);
api.fileUploadStartTrigger = function (event) {
        _yuitest_coverfunc("build/gallery-file-uploader/gallery-file-uploader.js", "fileUploadStartTrigger", 162);
_yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 163);
this.renderFileUploadStart();
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 164);
event.preventDefault();
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 165);
event.stopPropagation();
    };

    _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 168);
api.fileUploadErrorTrigger = function (event) {
        _yuitest_coverfunc("build/gallery-file-uploader/gallery-file-uploader.js", "fileUploadErrorTrigger", 168);
_yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 169);
var msg = event.message;
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 170);
var status = event.status;
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 171);
this.renderFileUploadError({
            status:status,
            msg:msg
        });
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 175);
event.preventDefault();
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 176);
event.stopPropagation();
    };
    _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 178);
api.fileUploadProgressTrigger = function (event) {

        _yuitest_coverfunc("build/gallery-file-uploader/gallery-file-uploader.js", "fileUploadProgressTrigger", 178);
_yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 180);
var attrs = {
            percentLoaded:event.percentLoaded
        };
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 183);
this.renderProgressBar(attrs);

        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 185);
event.preventDefault();
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 186);
event.stopPropagation();
    };

    _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 189);
api.fileUploadCompleteTrigger = function (event) {
        _yuitest_coverfunc("build/gallery-file-uploader/gallery-file-uploader.js", "fileUploadCompleteTrigger", 189);
_yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 190);
var attrs = {
            percentLoaded:event.percentLoaded,
            response:event.data
        };
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 194);
this.renderFileUploadComplete(attrs);

        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 196);
event.preventDefault();
        _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 197);
event.stopPropagation();
    };

    _yuitest_coverline("build/gallery-file-uploader/gallery-file-uploader.js", 200);
Y.yFileUploader = Y.Base.create('yFileUploader', Y.Uploader, [],
        api,
        {
            ATTRS:attrs
        }
    );




}, '@VERSION@', {"requires": ["uploader"]});
