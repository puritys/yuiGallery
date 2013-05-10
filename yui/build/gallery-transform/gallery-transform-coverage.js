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
_yuitest_coverage["build/gallery-transform/gallery-transform.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/gallery-transform/gallery-transform.js",
    code: []
};
_yuitest_coverage["build/gallery-transform/gallery-transform.js"].code=["YUI.add('gallery-transform', function (Y, NAME) {","","","","    var api = {},","        attrs = {};","","    /**","    * get Transform style ","    * ","    * @param data rotate,scale","    */","    api.getStyle = function (data) {","        var style, value = \"\";","        if (data.rotate) {","            value += \" rotate(\" + data.rotate + \"deg)\";","        }","        style = {","            \"-webkit-transform\": value,","            \"-moz-transform\": value,","            \"-ms-transform\": value,","            \"-o-transform\": value,","            \"transform\": value","        }","        return style;","    };","","    /**","    * get rotate,scale... styles","    */","    api.getNodeStyle = function (node) {/*{{{*/","        var style, rotate;","        if (node.getStyle('transform') !== \"none\") {","            style = node.getStyle('transform');","        } else if (node.getStyle('WebkitTransform') !== \"none\") {","            style = node.getStyle('WebkitTransform');","        } else if (node.getStyle('MozTransform') !== \"none\") {","            style = node.getStyle('MozTransform');","        } else if (node.getStyle('MsTransform') !== \"none\") {","            style = node.getStyle('MsTransform');","        } else if (node.getStyle('OTransform') !== \"none\") {","            style = node.getStyle('OTransform');","        }","","        if (!style || style === \"none\") {","            return \"\";","        }","","        rotate = this.getNodeRotate(style);","        return {","            \"rotate\": rotate","        };","    };/*}}}*/","","    api.getNodeRotate = function (style) {","        var values = style.split('(')[1];","        values = values.split(')')[0];","        values = values.split(',');","        var a = values[0];","        var b = values[1];","        var c = values[2];","        var d = values[3];","","        var scale = Math.sqrt(a*a + b*b);","","        // arc sin, convert from radians to degrees, round","        // DO NOT USE: see update below","        var sin = b/scale;","        //var angle = Math.round(Math.asin(sin) * (180/Math.PI));","        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));","//        var angle = Math.round(Math.asin(values[1]) * (180/Math.PI));","        return angle;","    };","","    Y.namespace('util').transform = Y.Base.create(\"utilTransform\", Y.Base, [], api, {","        ATTRS: attrs","    });","","","","","","}, '@VERSION@', {\"requires\": [\"node\"]});"];
_yuitest_coverage["build/gallery-transform/gallery-transform.js"].lines = {"1":0,"5":0,"13":0,"14":0,"15":0,"16":0,"18":0,"25":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"45":0,"46":0,"49":0,"50":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"64":0,"68":0,"70":0,"72":0,"75":0};
_yuitest_coverage["build/gallery-transform/gallery-transform.js"].functions = {"getStyle:13":0,"getNodeStyle:31":0,"getNodeRotate:55":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-transform/gallery-transform.js"].coveredLines = 37;
_yuitest_coverage["build/gallery-transform/gallery-transform.js"].coveredFunctions = 4;
_yuitest_coverline("build/gallery-transform/gallery-transform.js", 1);
YUI.add('gallery-transform', function (Y, NAME) {



    _yuitest_coverfunc("build/gallery-transform/gallery-transform.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-transform/gallery-transform.js", 5);
var api = {},
        attrs = {};

    /**
    * get Transform style 
    * 
    * @param data rotate,scale
    */
    _yuitest_coverline("build/gallery-transform/gallery-transform.js", 13);
api.getStyle = function (data) {
        _yuitest_coverfunc("build/gallery-transform/gallery-transform.js", "getStyle", 13);
_yuitest_coverline("build/gallery-transform/gallery-transform.js", 14);
var style, value = "";
        _yuitest_coverline("build/gallery-transform/gallery-transform.js", 15);
if (data.rotate) {
            _yuitest_coverline("build/gallery-transform/gallery-transform.js", 16);
value += " rotate(" + data.rotate + "deg)";
        }
        _yuitest_coverline("build/gallery-transform/gallery-transform.js", 18);
style = {
            "-webkit-transform": value,
            "-moz-transform": value,
            "-ms-transform": value,
            "-o-transform": value,
            "transform": value
        }
        _yuitest_coverline("build/gallery-transform/gallery-transform.js", 25);
return style;
    };

    /**
    * get rotate,scale... styles
    */
    _yuitest_coverline("build/gallery-transform/gallery-transform.js", 31);
api.getNodeStyle = function (node) {/*{{{*/
        _yuitest_coverfunc("build/gallery-transform/gallery-transform.js", "getNodeStyle", 31);
_yuitest_coverline("build/gallery-transform/gallery-transform.js", 32);
var style, rotate;
        _yuitest_coverline("build/gallery-transform/gallery-transform.js", 33);
if (node.getStyle('transform') !== "none") {
            _yuitest_coverline("build/gallery-transform/gallery-transform.js", 34);
style = node.getStyle('transform');
        } else {_yuitest_coverline("build/gallery-transform/gallery-transform.js", 35);
if (node.getStyle('WebkitTransform') !== "none") {
            _yuitest_coverline("build/gallery-transform/gallery-transform.js", 36);
style = node.getStyle('WebkitTransform');
        } else {_yuitest_coverline("build/gallery-transform/gallery-transform.js", 37);
if (node.getStyle('MozTransform') !== "none") {
            _yuitest_coverline("build/gallery-transform/gallery-transform.js", 38);
style = node.getStyle('MozTransform');
        } else {_yuitest_coverline("build/gallery-transform/gallery-transform.js", 39);
if (node.getStyle('MsTransform') !== "none") {
            _yuitest_coverline("build/gallery-transform/gallery-transform.js", 40);
style = node.getStyle('MsTransform');
        } else {_yuitest_coverline("build/gallery-transform/gallery-transform.js", 41);
if (node.getStyle('OTransform') !== "none") {
            _yuitest_coverline("build/gallery-transform/gallery-transform.js", 42);
style = node.getStyle('OTransform');
        }}}}}

        _yuitest_coverline("build/gallery-transform/gallery-transform.js", 45);
if (!style || style === "none") {
            _yuitest_coverline("build/gallery-transform/gallery-transform.js", 46);
return "";
        }

        _yuitest_coverline("build/gallery-transform/gallery-transform.js", 49);
rotate = this.getNodeRotate(style);
        _yuitest_coverline("build/gallery-transform/gallery-transform.js", 50);
return {
            "rotate": rotate
        };
    };/*}}}*/

    _yuitest_coverline("build/gallery-transform/gallery-transform.js", 55);
api.getNodeRotate = function (style) {
        _yuitest_coverfunc("build/gallery-transform/gallery-transform.js", "getNodeRotate", 55);
_yuitest_coverline("build/gallery-transform/gallery-transform.js", 56);
var values = style.split('(')[1];
        _yuitest_coverline("build/gallery-transform/gallery-transform.js", 57);
values = values.split(')')[0];
        _yuitest_coverline("build/gallery-transform/gallery-transform.js", 58);
values = values.split(',');
        _yuitest_coverline("build/gallery-transform/gallery-transform.js", 59);
var a = values[0];
        _yuitest_coverline("build/gallery-transform/gallery-transform.js", 60);
var b = values[1];
        _yuitest_coverline("build/gallery-transform/gallery-transform.js", 61);
var c = values[2];
        _yuitest_coverline("build/gallery-transform/gallery-transform.js", 62);
var d = values[3];

        _yuitest_coverline("build/gallery-transform/gallery-transform.js", 64);
var scale = Math.sqrt(a*a + b*b);

        // arc sin, convert from radians to degrees, round
        // DO NOT USE: see update below
        _yuitest_coverline("build/gallery-transform/gallery-transform.js", 68);
var sin = b/scale;
        //var angle = Math.round(Math.asin(sin) * (180/Math.PI));
        _yuitest_coverline("build/gallery-transform/gallery-transform.js", 70);
var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
//        var angle = Math.round(Math.asin(values[1]) * (180/Math.PI));
        _yuitest_coverline("build/gallery-transform/gallery-transform.js", 72);
return angle;
    };

    _yuitest_coverline("build/gallery-transform/gallery-transform.js", 75);
Y.namespace('util').transform = Y.Base.create("utilTransform", Y.Base, [], api, {
        ATTRS: attrs
    });





}, '@VERSION@', {"requires": ["node"]});
