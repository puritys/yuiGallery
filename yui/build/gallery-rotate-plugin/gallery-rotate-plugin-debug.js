YUI.add('gallery-rotate-plugin', function (Y, NAME) {

/**
* YUI rotate plugin
* Node plugin , rotate a plugin
*/

    var api = {};

    function plugin () {
        plugin.superclass.constructor.apply(this, arguments);
    }

    plugin.NAME = "rotate-plugin";
    plugin.NS = "rotate-plugin";

    api.startX = 0;
    api.startY = 0;
    api.rotating = false;

    api.initializer = function () {
        var node, hmtl;

        node = this.get('host');
        html = this.renderRotateButton();
        node.append(html);
        this.initBindEvent();
        this.transform = new Y.util.transform();
    };

    api.initBindEvent = function () {/*{{{*/
        var node;
        var mouseUpTrigger, mouseDownTrigger, mouseMoveTrigger, clickTrigger;

        node = this.get('host');
        mouseUpTrigger = Y.bind(this.handleMouseUp ,this);
        mouseDownTrigger = Y.bind(this.handleMouseDown, this);
        mouseMoveTrigger = Y.bind(this.handleMouseMove, this);
        clickTrigger = Y.bind(this.handleClick, this);

        node.one('.rotate-plugin').delegate('mouseup', mouseUpTrigger, '.button-left, .button-right');
        node.one('.rotate-plugin').delegate('mousedown', mouseDownTrigger, '.button-left, .button-right');
        node.one('.rotate-plugin').delegate('mousemove', mouseMoveTrigger, '.button-left, .button-right');
        node.one('.rotate-plugin').delegate('click', clickTrigger, '.button-left, .button-right');


    };/*}}}*/

    api.calculateRotate = function (startX, startY, endX, endY) {
        var tan, x1 = 0, y1 = 0,y2, x2, z2;
        y2 = Math.round((endY - startY)) * -1;
        x2 = Math.round(endX - startX);
       
//Y.log(x1 + " " + y1 + " " + x2 + " " + y2);
        if (x2 == 0) {
            return false;
        } else {
            tan = y2/x2;
        }
        angle = Math.atan(tan);
        angle = Math.round((180 * angle)/3.14159);
        //angle = angle % 360;
        if ((x2 < 0 && y2 < 0) || (x2 < 0 && y2 > 0)) {
            angle += 180;
        } 

        angle *= -1
        return angle;

    };

    api.rotate = function (rotate) {
        var node, style;
        node = this.get('host');
        style = this.transform.getStyle({rotate: rotate});
        node.setStyles(style);
    };

    /****************
        render
    ******************/

    api.renderRotateButton = function () {/*{{{*/
        var html = "", node;
        html = '<div class="rotate-plugin">';
        html += '<div class="rotate-x"><div class="button-left"></div><div class="button-right"></div></div>';
        html += '<div class="rotate-y"><div class="button-left"></div><div class="button-right"></div></div>';
        html += '</div>';
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
        return node;

    };/*}}}*/

    api.destroy = function () {
        var node;
        node = this.get('host');
        node.one('.rotate-plugin').remove();
    };

    /****************
        event handle
    ******************/

    api.handleClick = function (E) {
        E.preventDefault();
        E.stopPropagation();
    };

    api.handleMouseUp = function (E) {
        this.rotating = false;
        //E.preventDefault();
        //E.stopPropagation();
    };

    api.handleMouseDown = function (E) {
        var bodyMouseMoveTrigger, bodyMouseUpTrigger;
        var node, pos;
        if (E.button != 1) {
            return false;
        }
        node = this.get('host');
        pos = node.getXY();
        this.startX = pos[0] + parseInt(node.get('offsetWidth')/2, 10); //E.pageX;
        this.startY = pos[1] + parseInt(node.get('offsetHeight')/2, 10);//E.pageY;
        this.rotating = true;
//        Y.log("startXY = " + this.startX + ","+this.startY);
        bodyMouseMoveTrigger = Y.bind(this.handleBodyMouseMove, this);
        bodyMouseUpTrigger = Y.bind(this.handleBodyMouseUp, this);

        this.bodyBindMove = Y.one(document).on("mousemove", bodyMouseMoveTrigger);
        this.bodyBindUp = Y.one(document).on("mouseup", bodyMouseUpTrigger);

        E.preventDefault();
        E.stopPropagation();
    };

    api.handleMouseMove = function (E) {
        //E.preventDefault();
        //E.stopPropagation();
    };

    api.handleBodyMouseMove = function (E) {
        var angle, endX, endY;
        if (!this.rotating) {
            return false;
        }
        endX = E.pageX;
        endY = E.pageY;
        angle = this.calculateRotate(this.startX, this.startY, endX, endY);
        if (angle === false) {
            return false;
        }
        //Y.log("angle = " + angle);
        this.rotate(angle);  
        E.preventDefault();
        E.stopPropagation();

    };

    api.handleBodyMouseUp = function (E) {
        this.rotating = false;

        this.bodyBindMove.detach();
        this.bodyBindUp.detach();
        E.preventDefault();
        E.stopPropagation();

    };

    Y.Plugin.Rotate = Y.extend(plugin, Y.Plugin.Base, api);




}, '@VERSION@', {"requires": ["gallery-transform", "plugin", "node"]});
