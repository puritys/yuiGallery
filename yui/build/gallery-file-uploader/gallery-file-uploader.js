YUI.add('gallery-file-uploader', function (Y, NAME) {

/**
* YUI file Uploader
* implement progress bar
*
**/
    var api={},attrs={};
    attrs.autoUpload = {
        value:1
    };

    api.initializer = function(attrs) {/*{{{*/
        if (!attrs || !attrs.container ) {
            alert("[yFileUploader] Missing conatiner");
            return ;
        }

        this.set("container", attrs.container);
        if (attrs.progressBarWidth) {
            this.set("progressBarWidth", attrs.progressBarWidth);
        } else {
            this.set("progressBarWidth", 500); //px
        }

        if (attrs.progressBarHeight) {
            this.set("progressBarHeight", attrs.progressBarHeight);
        } else {
            this.set("progressBarHeight", 20); //px
        }

        if (attrs.progressBarContainer) {
            this.set("progressBarContainer", attrs.progressBarContainer);
        }

        this.after("fileselect", this.fileSelectedTrigger, this);
        this.after("uploadstart", this.fileUploadStartTrigger, this);
        this.after("uploadprogress", this.fileUploadProgressTrigger, this);
        this.after("uploadcomplete", this.fileUploadCompleteTrigger, this);
        this.after("uploaderror", this.fileUploadErrorTrigger, this);


    };/*}}}*/

    api.fileSelected = function() {

    };

    api.fileUpload = function (file) {
        try {
//            this.upload.call(this,file, this.get("uploadUrl"), this.get("param"));
            this.upload(file, this.get("uploadUrl"), this.get("param"));

        } catch (e){
        }
    }

    /*
    *
    */
    api.renderFileUploadStart = function (attrs) {
        var container = "";
        if (attrs && attrs.container) {
        } else{
            container = this.get('container');
        }
        //Y.one(container).setHTML("test");
    };
    /*
    *
    */
    api.renderFileUploadComplete = function (attrs) {
        var container = "";
        var d = Y.one("#"+this.barId);
        if(d) d.remove();
        this.barId = "";
        //this.destructor();
    };


    /*
    * handle progress bar
    * @param attr:json format
    * container: div id
    * width:
    */
    api.renderProgressBar = function (attrs) {
        var maxWidth = this.get('progressBarWidth');
        var maxHeight = this.get('progressBarHeight');

        var width = Math.floor(maxWidth * attrs.percentLoaded/100);

        var container = this.get('container');
        if (this.barId && Y.one("#"+this.barId)){
            Y.one("#"+this.barId).remove();
        }
        var html = document.createElement("div");
        var bar = document.createElement("div");
        html.innerHTML = Math.floor(attrs.percentLoaded)+" %";
        Y.one(html).setStyles({
            border:'1px solid black',
            height:maxHeight+'px',
            width:maxWidth+'px',
            "text-align":"right",
            "position":"relative"
        });
        Y.one(bar).setStyles({background:'#2f2f2f',
            border:'1px solid black',
            height:maxHeight+'px',
            width:width+'px',
            position:'absolute',
            top:'0px',
            left:'0px'
        });
        html.appendChild(bar);
        this.barId = Y.one(html).generateID();
        if (this.get('progressBarContainer')) {
            Y.one(this.get('progressBarContainer')).setHTML("");
            Y.one(this.get('progressBarContainer')).appendChild(html);
        } else {
            Y.one(container).append(html);
        }
    };

    /*
    *
    */
    api.renderFileUploadError = function (attrs) {
        var html = document.createElement("div");
        var container = this.get('container');
        if (this.barId && Y.one("#"+this.barId)){
            Y.one("#"+this.barId).remove();
        }

        html.innerHTML = "上傳失敗，可能原因：檔案 Size 超過上限 2 MB ..";
        Y.one(html).setStyles({
            "color":"#a00"
        });
        this.barId = Y.one(html).generateID();
        Y.one(container).append(html);
        //alert("Uploading file is fail.");
    };
    /** event trigger**/
    api.fileSelectedTrigger = function (event) {
        var auto = this.get("autoUpload");
        if(!event.fileList || event.fileList.length<1){return ;}
        var fileLength = event.fileList.length;
        var file;
        var i=0;
        if (auto) {
            for (i = 0; i < fileLength; i++) {
                file = event.fileList[i];
                this.fileUpload(file);  //yui default function, don't need override
            }
        } else {
            this.fileSelected();
        }
        event.preventDefault();
        event.stopPropagation();
    };

    api.fileUploadStartTrigger = function (event) {
        this.renderFileUploadStart();
        event.preventDefault();
        event.stopPropagation();
    };

    api.fileUploadErrorTrigger = function (event) {
        var msg = event.message;
        var status = event.status;
        this.renderFileUploadError({
            status:status,
            msg:msg
        });
        event.preventDefault();
        event.stopPropagation();
    };
    api.fileUploadProgressTrigger = function (event) {

        var attrs = {
            percentLoaded:event.percentLoaded
        };
        this.renderProgressBar(attrs);

        event.preventDefault();
        event.stopPropagation();
    };

    api.fileUploadCompleteTrigger = function (event) {
        var attrs = {
            percentLoaded:event.percentLoaded,
            response:event.data
        };
        this.renderFileUploadComplete(attrs);

        event.preventDefault();
        event.stopPropagation();
    };

    Y.yFileUploader = Y.Base.create('yFileUploader', Y.Uploader, [],
        api,
        {
            ATTRS:attrs
        }
    );




}, '@VERSION@', {"requires": ["uploader"]});
