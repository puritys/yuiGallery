

    var api = {},
        attrs = {};

    /**
    * get Transform style 
    * 
    * @param data rotate,scale
    */
    api.getStyle = function (data) {
        var style, value = "";
        if (data.rotate) {
            value += " rotate(" + data.rotate + "deg)";
        }
        style = {
            "-webkit-transform": value,
            "-moz-transform": value,
            "-ms-transform": value,
            "-o-transform": value,
            "transform": value
        }
        return style;
    };

    /**
    * get rotate,scale... styles
    */
    api.getNodeStyle = function (node) {/*{{{*/
        var style, rotate;
        if (node.getStyle('transform') !== "none") {
            style = node.getStyle('transform');
        } else if (node.getStyle('WebkitTransform') !== "none") {
            style = node.getStyle('WebkitTransform');
        } else if (node.getStyle('MozTransform') !== "none") {
            style = node.getStyle('MozTransform');
        } else if (node.getStyle('MsTransform') !== "none") {
            style = node.getStyle('MsTransform');
        } else if (node.getStyle('OTransform') !== "none") {
            style = node.getStyle('OTransform');
        }
Y.log("transform" + style);

        if (!style || style === "none") {
            Y.log("this node do not have transform");
            return "";
        }

        rotate = this.getNodeRotate(style);
        return {
            "rotate": rotate
        };
    };/*}}}*/

    api.getNodeRotate = function (style) {
        var values = style.split('(')[1];
        values = values.split(')')[0];
        values = values.split(',');
        var a = values[0];
        var b = values[1];
        var c = values[2];
        var d = values[3];

        var scale = Math.sqrt(a*a + b*b);

        // arc sin, convert from radians to degrees, round
        // DO NOT USE: see update below
        var sin = b/scale;
        //var angle = Math.round(Math.asin(sin) * (180/Math.PI));
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
//        var angle = Math.round(Math.asin(values[1]) * (180/Math.PI));
//Y.log("angle = "+ angle);
        return angle;
    };

    Y.namespace('util').transform = Y.Base.create("utilTransform", Y.Base, [], api, {
        ATTRS: attrs
    });



