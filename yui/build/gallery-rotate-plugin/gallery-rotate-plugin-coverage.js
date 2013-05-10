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
_yuitest_coverage["build/gallery-rotate-plugin/gallery-rotate-plugin.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/gallery-rotate-plugin/gallery-rotate-plugin.js",
    code: []
};
_yuitest_coverage["build/gallery-rotate-plugin/gallery-rotate-plugin.js"].code=["YUI.add('gallery-rotate-plugin', function (Y, NAME) {","","/**","* YUI rotate plugin","* Node plugin , rotate a plugin","*/","","    var api = {};","","    function plugin () {","        plugin.superclass.constructor.apply(this, arguments);","    }","","    plugin.NAME = \"rotate-plugin\";","    plugin.NS = \"rotate-plugin\";","","    api.startX = 0;","    api.startY = 0;","    api.rotating = false;","","    api.initializer = function () {","        var node, hmtl;","","        node = this.get('host');","        html = this.renderRotateButton();","        node.append(html);","        this.initBindEvent();","        this.transform = new Y.util.transform();","    };","","    api.initBindEvent = function () {/*{{{*/","        var node;","        var mouseUpTrigger, mouseDownTrigger, mouseMoveTrigger, clickTrigger;","","        node = this.get('host');","        mouseUpTrigger = Y.bind(this.handleMouseUp ,this);","        mouseDownTrigger = Y.bind(this.handleMouseDown, this);","        mouseMoveTrigger = Y.bind(this.handleMouseMove, this);","        clickTrigger = Y.bind(this.handleClick, this);","","        node.one('.rotate-plugin').delegate('mouseup', mouseUpTrigger, '.button-left, .button-right');","        node.one('.rotate-plugin').delegate('mousedown', mouseDownTrigger, '.button-left, .button-right');","        node.one('.rotate-plugin').delegate('mousemove', mouseMoveTrigger, '.button-left, .button-right');","        node.one('.rotate-plugin').delegate('click', clickTrigger, '.button-left, .button-right');","","","    };/*}}}*/","","    api.calculateRotate = function (startX, startY, endX, endY) {","        var tan, x1 = 0, y1 = 0,y2, x2, z2;","        y2 = Math.round((endY - startY)) * -1;","        x2 = Math.round(endX - startX);","       ","        if (x2 == 0) {","            return false;","        } else {","            tan = y2/x2;","        }","        angle = Math.atan(tan);","        angle = Math.round((180 * angle)/3.14159);","        //angle = angle % 360;","        if ((x2 < 0 && y2 < 0) || (x2 < 0 && y2 > 0)) {","            angle += 180;","        } ","","        angle *= -1","        return angle;","","    };","","    api.rotate = function (rotate) {","        var node, style;","        node = this.get('host');","        style = this.transform.getStyle({rotate: rotate});","        node.setStyles(style);","    };","","    /****************","        render","    ******************/","","    api.renderRotateButton = function () {/*{{{*/","        var html = \"\", node;","        html = '<div class=\"rotate-plugin\">';","        html += '<div class=\"rotate-x\"><div class=\"button-left\"></div><div class=\"button-right\"></div></div>';","        html += '<div class=\"rotate-y\"><div class=\"button-left\"></div><div class=\"button-right\"></div></div>';","        html += '</div>';","        node = Y.Node.create(html);","","/*        node.setStyles({","            width: \"100%\",","            height: \"100%\",","            padding: \"5px\",","            margin: \"-5px 0 0 -5px\",","        });","*/","/*        node.one('.rotate-x').setStyles({","            position: \"absolute\",","            top: \"50%\",","            left: \"-10px\",","            width: \"100%\",","            height: \"10px\",","            padding: \"0 10px\",","            margin: \"-16px 0 0 0\"","        });","","        node.one('.rotate-y').setStyles({","            \"position\": \"absolute\",","            \"top\": \"-16px\",","            \"left\": \"50%\",","            width: \"10px\",","            height: \"100%\",","            padding: \"10px\",","            margin: \"0 0 0 -16px\"","        });","        var buttonStyle = {","            width: \"16px\",","            height: \"16px\"","        };","        node.one('.rotate-x').all('.button-left, .button-right').setStyles(buttonStyle);","//        node.one('.rotate-y').all('.button-left, .button-right').setStyles(buttonStyle);","","        node.one('.rotate-x').all('.button-left').setStyles({","            margin: \"0px 0 0 -10px\"","        });","        node.one('.rotate-x').all('.button-right').setStyles({","            margin: \"-16px 0 0 100%\"","        });","*/","  /*      node.one('.rotate-y').all('.button-left').setStyles({","            margin: \"-12px 0 0 -10px\"","        });","        node.one('.rotate-y').all('.button-right').setStyles({","            margin: \"310% 0 0 -10px\"","        });","*/","        return node;","","    };/*}}}*/","","    api.destroy = function () {","        var node;","        node = this.get('host');","        node.one('.rotate-plugin').remove();","    };","","    /****************","        event handle","    ******************/","","    api.handleClick = function (E) {","        E.preventDefault();","        E.stopPropagation();","    };","","    api.handleMouseUp = function (E) {","        this.rotating = false;","        //E.preventDefault();","        //E.stopPropagation();","    };","","    api.handleMouseDown = function (E) {","        var bodyMouseMoveTrigger, bodyMouseUpTrigger;","        var node, pos;","        if (E.button != 1) {","            return false;","        }","        node = this.get('host');","        pos = node.getXY();","        this.startX = pos[0] + parseInt(node.get('offsetWidth')/2, 10); //E.pageX;","        this.startY = pos[1] + parseInt(node.get('offsetHeight')/2, 10);//E.pageY;","        this.rotating = true;","        bodyMouseMoveTrigger = Y.bind(this.handleBodyMouseMove, this);","        bodyMouseUpTrigger = Y.bind(this.handleBodyMouseUp, this);","","        this.bodyBindMove = Y.one(document).on(\"mousemove\", bodyMouseMoveTrigger);","        this.bodyBindUp = Y.one(document).on(\"mouseup\", bodyMouseUpTrigger);","","        E.preventDefault();","        E.stopPropagation();","    };","","    api.handleMouseMove = function (E) {","        //E.preventDefault();","        //E.stopPropagation();","    };","","    api.handleBodyMouseMove = function (E) {","        var angle, endX, endY;","        if (!this.rotating) {","            return false;","        }","        endX = E.pageX;","        endY = E.pageY;","        angle = this.calculateRotate(this.startX, this.startY, endX, endY);","        if (angle === false) {","            return false;","        }","        this.rotate(angle);  ","        E.preventDefault();","        E.stopPropagation();","","    };","","    api.handleBodyMouseUp = function (E) {","        this.rotating = false;","","        this.bodyBindMove.detach();","        this.bodyBindUp.detach();","        E.preventDefault();","        E.stopPropagation();","","    };","","    Y.Plugin.Rotate = Y.extend(plugin, Y.Plugin.Base, api);","","","","","}, '@VERSION@', {\"requires\": [\"gallery-transform\", \"plugin\", \"node\"]});"];
_yuitest_coverage["build/gallery-rotate-plugin/gallery-rotate-plugin.js"].lines = {"1":0,"8":0,"10":0,"11":0,"14":0,"15":0,"17":0,"18":0,"19":0,"21":0,"22":0,"24":0,"25":0,"26":0,"27":0,"28":0,"31":0,"32":0,"33":0,"35":0,"36":0,"37":0,"38":0,"39":0,"41":0,"42":0,"43":0,"44":0,"49":0,"50":0,"51":0,"52":0,"54":0,"55":0,"57":0,"59":0,"60":0,"62":0,"63":0,"66":0,"67":0,"71":0,"72":0,"73":0,"74":0,"75":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0,"137":0,"141":0,"142":0,"143":0,"144":0,"151":0,"152":0,"153":0,"156":0,"157":0,"162":0,"163":0,"164":0,"165":0,"166":0,"168":0,"169":0,"170":0,"171":0,"172":0,"173":0,"174":0,"176":0,"177":0,"179":0,"180":0,"183":0,"188":0,"189":0,"190":0,"191":0,"193":0,"194":0,"195":0,"196":0,"197":0,"199":0,"200":0,"201":0,"205":0,"206":0,"208":0,"209":0,"210":0,"211":0,"215":0};
_yuitest_coverage["build/gallery-rotate-plugin/gallery-rotate-plugin.js"].functions = {"plugin:10":0,"initializer:21":0,"initBindEvent:31":0,"calculateRotate:49":0,"rotate:71":0,"renderRotateButton:82":0,"destroy:141":0,"handleClick:151":0,"handleMouseUp:156":0,"handleMouseDown:162":0,"handleBodyMouseMove:188":0,"handleBodyMouseUp:205":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-rotate-plugin/gallery-rotate-plugin.js"].coveredLines = 99;
_yuitest_coverage["build/gallery-rotate-plugin/gallery-rotate-plugin.js"].coveredFunctions = 13;
_yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 1);
YUI.add('gallery-rotate-plugin', function (Y, NAME) {

/**
* YUI rotate plugin
* Node plugin , rotate a plugin
*/

    _yuitest_coverfunc("build/gallery-rotate-plugin/gallery-rotate-plugin.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 8);
var api = {};

    _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 10);
function plugin () {
        _yuitest_coverfunc("build/gallery-rotate-plugin/gallery-rotate-plugin.js", "plugin", 10);
_yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 11);
plugin.superclass.constructor.apply(this, arguments);
    }

    _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 14);
plugin.NAME = "rotate-plugin";
    _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 15);
plugin.NS = "rotate-plugin";

    _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 17);
api.startX = 0;
    _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 18);
api.startY = 0;
    _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 19);
api.rotating = false;

    _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 21);
api.initializer = function () {
        _yuitest_coverfunc("build/gallery-rotate-plugin/gallery-rotate-plugin.js", "initializer", 21);
_yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 22);
var node, hmtl;

        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 24);
node = this.get('host');
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 25);
html = this.renderRotateButton();
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 26);
node.append(html);
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 27);
this.initBindEvent();
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 28);
this.transform = new Y.util.transform();
    };

    _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 31);
api.initBindEvent = function () {/*{{{*/
        _yuitest_coverfunc("build/gallery-rotate-plugin/gallery-rotate-plugin.js", "initBindEvent", 31);
_yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 32);
var node;
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 33);
var mouseUpTrigger, mouseDownTrigger, mouseMoveTrigger, clickTrigger;

        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 35);
node = this.get('host');
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 36);
mouseUpTrigger = Y.bind(this.handleMouseUp ,this);
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 37);
mouseDownTrigger = Y.bind(this.handleMouseDown, this);
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 38);
mouseMoveTrigger = Y.bind(this.handleMouseMove, this);
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 39);
clickTrigger = Y.bind(this.handleClick, this);

        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 41);
node.one('.rotate-plugin').delegate('mouseup', mouseUpTrigger, '.button-left, .button-right');
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 42);
node.one('.rotate-plugin').delegate('mousedown', mouseDownTrigger, '.button-left, .button-right');
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 43);
node.one('.rotate-plugin').delegate('mousemove', mouseMoveTrigger, '.button-left, .button-right');
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 44);
node.one('.rotate-plugin').delegate('click', clickTrigger, '.button-left, .button-right');


    };/*}}}*/

    _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 49);
api.calculateRotate = function (startX, startY, endX, endY) {
        _yuitest_coverfunc("build/gallery-rotate-plugin/gallery-rotate-plugin.js", "calculateRotate", 49);
_yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 50);
var tan, x1 = 0, y1 = 0,y2, x2, z2;
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 51);
y2 = Math.round((endY - startY)) * -1;
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 52);
x2 = Math.round(endX - startX);
       
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 54);
if (x2 == 0) {
            _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 55);
return false;
        } else {
            _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 57);
tan = y2/x2;
        }
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 59);
angle = Math.atan(tan);
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 60);
angle = Math.round((180 * angle)/3.14159);
        //angle = angle % 360;
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 62);
if ((x2 < 0 && y2 < 0) || (x2 < 0 && y2 > 0)) {
            _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 63);
angle += 180;
        } 

        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 66);
angle *= -1
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 67);
return angle;

    };

    _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 71);
api.rotate = function (rotate) {
        _yuitest_coverfunc("build/gallery-rotate-plugin/gallery-rotate-plugin.js", "rotate", 71);
_yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 72);
var node, style;
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 73);
node = this.get('host');
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 74);
style = this.transform.getStyle({rotate: rotate});
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 75);
node.setStyles(style);
    };

    /****************
        render
    ******************/

    _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 82);
api.renderRotateButton = function () {/*{{{*/
        _yuitest_coverfunc("build/gallery-rotate-plugin/gallery-rotate-plugin.js", "renderRotateButton", 82);
_yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 83);
var html = "", node;
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 84);
html = '<div class="rotate-plugin">';
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 85);
html += '<div class="rotate-x"><div class="button-left"></div><div class="button-right"></div></div>';
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 86);
html += '<div class="rotate-y"><div class="button-left"></div><div class="button-right"></div></div>';
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 87);
html += '</div>';
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 88);
node = Y.Node.create(html);

/*        node.setStyles({
            width: "100%",
            height: "100%",
            padding: "5px",
            margin: "-5px 0 0 -5px",
        });
*/
/*        node.one('.rotate-x').setStyles({
            position: "absolute",
            top: "50%",
            left: "-10px",
            width: "100%",
            height: "10px",
            padding: "0 10px",
            margin: "-16px 0 0 0"
        });

        node.one('.rotate-y').setStyles({
            "position": "absolute",
            "top": "-16px",
            "left": "50%",
            width: "10px",
            height: "100%",
            padding: "10px",
            margin: "0 0 0 -16px"
        });
        var buttonStyle = {
            width: "16px",
            height: "16px"
        };
        node.one('.rotate-x').all('.button-left, .button-right').setStyles(buttonStyle);
//        node.one('.rotate-y').all('.button-left, .button-right').setStyles(buttonStyle);

        node.one('.rotate-x').all('.button-left').setStyles({
            margin: "0px 0 0 -10px"
        });
        node.one('.rotate-x').all('.button-right').setStyles({
            margin: "-16px 0 0 100%"
        });
*/
  /*      node.one('.rotate-y').all('.button-left').setStyles({
            margin: "-12px 0 0 -10px"
        });
        node.one('.rotate-y').all('.button-right').setStyles({
            margin: "310% 0 0 -10px"
        });
*/
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 137);
return node;

    };/*}}}*/

    _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 141);
api.destroy = function () {
        _yuitest_coverfunc("build/gallery-rotate-plugin/gallery-rotate-plugin.js", "destroy", 141);
_yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 142);
var node;
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 143);
node = this.get('host');
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 144);
node.one('.rotate-plugin').remove();
    };

    /****************
        event handle
    ******************/

    _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 151);
api.handleClick = function (E) {
        _yuitest_coverfunc("build/gallery-rotate-plugin/gallery-rotate-plugin.js", "handleClick", 151);
_yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 152);
E.preventDefault();
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 153);
E.stopPropagation();
    };

    _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 156);
api.handleMouseUp = function (E) {
        _yuitest_coverfunc("build/gallery-rotate-plugin/gallery-rotate-plugin.js", "handleMouseUp", 156);
_yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 157);
this.rotating = false;
        //E.preventDefault();
        //E.stopPropagation();
    };

    _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 162);
api.handleMouseDown = function (E) {
        _yuitest_coverfunc("build/gallery-rotate-plugin/gallery-rotate-plugin.js", "handleMouseDown", 162);
_yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 163);
var bodyMouseMoveTrigger, bodyMouseUpTrigger;
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 164);
var node, pos;
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 165);
if (E.button != 1) {
            _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 166);
return false;
        }
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 168);
node = this.get('host');
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 169);
pos = node.getXY();
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 170);
this.startX = pos[0] + parseInt(node.get('offsetWidth')/2, 10); //E.pageX;
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 171);
this.startY = pos[1] + parseInt(node.get('offsetHeight')/2, 10);//E.pageY;
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 172);
this.rotating = true;
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 173);
bodyMouseMoveTrigger = Y.bind(this.handleBodyMouseMove, this);
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 174);
bodyMouseUpTrigger = Y.bind(this.handleBodyMouseUp, this);

        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 176);
this.bodyBindMove = Y.one(document).on("mousemove", bodyMouseMoveTrigger);
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 177);
this.bodyBindUp = Y.one(document).on("mouseup", bodyMouseUpTrigger);

        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 179);
E.preventDefault();
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 180);
E.stopPropagation();
    };

    _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 183);
api.handleMouseMove = function (E) {
        //E.preventDefault();
        //E.stopPropagation();
    };

    _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 188);
api.handleBodyMouseMove = function (E) {
        _yuitest_coverfunc("build/gallery-rotate-plugin/gallery-rotate-plugin.js", "handleBodyMouseMove", 188);
_yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 189);
var angle, endX, endY;
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 190);
if (!this.rotating) {
            _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 191);
return false;
        }
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 193);
endX = E.pageX;
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 194);
endY = E.pageY;
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 195);
angle = this.calculateRotate(this.startX, this.startY, endX, endY);
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 196);
if (angle === false) {
            _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 197);
return false;
        }
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 199);
this.rotate(angle);  
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 200);
E.preventDefault();
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 201);
E.stopPropagation();

    };

    _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 205);
api.handleBodyMouseUp = function (E) {
        _yuitest_coverfunc("build/gallery-rotate-plugin/gallery-rotate-plugin.js", "handleBodyMouseUp", 205);
_yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 206);
this.rotating = false;

        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 208);
this.bodyBindMove.detach();
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 209);
this.bodyBindUp.detach();
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 210);
E.preventDefault();
        _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 211);
E.stopPropagation();

    };

    _yuitest_coverline("build/gallery-rotate-plugin/gallery-rotate-plugin.js", 215);
Y.Plugin.Rotate = Y.extend(plugin, Y.Plugin.Base, api);




}, '@VERSION@', {"requires": ["gallery-transform", "plugin", "node"]});
