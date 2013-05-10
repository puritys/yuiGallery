YUI.add("gallery-rotate-plugin",function(e,t){function r(){r.superclass.constructor.apply(this,arguments)}var n={};r.NAME="rotate-plugin",r.NS="rotate-plugin",n.startX=0,n.startY=0,n.rotating=!1,n.initializer=function(){var t,n;t=this.get("host"),html=this.renderRotateButton(),t.append(html),this.initBindEvent(),this.transform=new e.util.transform},n.initBindEvent=function(){var t,n,r,i,s;t=this.get("host"),n=e.bind(this.handleMouseUp,this),r=e.bind(this.handleMouseDown,this),i=e.bind(this.handleMouseMove,this),s=e.bind(this.handleClick,this),t.one(".rotate-plugin").delegate("mouseup",n,".button-left, .button-right"),t.one(".rotate-plugin").delegate("mousedown",r,".button-left, .button-right"),t.one(".rotate-plugin").delegate("mousemove",i,".button-left, .button-right"),t.one(".rotate-plugin").delegate("click",s,".button-left, .button-right")},n.calculateRotate=function(e,t,n,r){var i,s=0,o=0,u,a,f;u=Math.round(r-t)*-1,a=Math.round(n-e);if(a==0)return!1;i=u/a,angle=Math.atan(i),angle=Math.round(180*angle/3.14159);if(a<0&&u<0||a<0&&u>0)angle+=180;return angle*=-1,angle},n.rotate=function(e){var t,n;t=this.get("host"),n=this.transform.getStyle({rotate:e}),t.setStyles(n)},n.renderRotateButton=function(){var t="",n;return t='<div class="rotate-plugin">',t+='<div class="rotate-x"><div class="button-left"></div><div class="button-right"></div></div>',t+='<div class="rotate-y"><div class="button-left"></div><div class="button-right"></div></div>',t+="</div>",n=e.Node.create(t),n},n.destroy=function(){var e;e=this.get("host"),e.one(".rotate-plugin").remove()},n.handleClick=function(e){e.preventDefault(),e.stopPropagation()},n.handleMouseUp=function(e){this.rotating=!1},n.handleMouseDown=function(t){var n,r,i,s;if(t.button!=1)return!1;i=this.get("host"),s=i.getXY(),this.startX=s[0]+parseInt(i.get("offsetWidth")/2,10),this.startY=s[1]+parseInt(i.get("offsetHeight")/2,10),this.rotating=!0,n=e.bind(this.handleBodyMouseMove,this),r=e.bind(this.handleBodyMouseUp,this),this.bodyBindMove=e.one(document).on("mousemove",n),this.bodyBindUp=e.one(document).on("mouseup",r),t.preventDefault(),t.stopPropagation()},n.handleMouseMove=function(e){},n.handleBodyMouseMove=function(e){var t,n,r;if(!this.rotating)return!1;n=e.pageX,r=e.pageY,t=this.calculateRotate(this.startX,this.startY,n,r);if(t===!1)return!1;this.rotate(t),e.preventDefault(),e.stopPropagation()},n.handleBodyMouseUp=function(e){this.rotating=!1,this.bodyBindMove.detach(),this.bodyBindUp.detach(),e.preventDefault(),e.stopPropagation()},e.Plugin.Rotate=e.extend(r,e.Plugin.Base,n)},"@VERSION@",{requires:["gallery-transform","plugin","node"]});
