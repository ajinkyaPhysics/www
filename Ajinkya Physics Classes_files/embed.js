(function(g){var window=this;'use strict';var kXa=function(a,b){var c=(b-a.j)/(a.u-a.j);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,h=0;8>h;h++){f=g.fp(a,c);var l=(g.fp(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(l))break;else f<b?d=c:e=c,c-=(f-b)/l}for(h=0;1E-6<Math.abs(f-b)&&8>h;h++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=g.fp(a,c);return c},A2=function(){return{F:"svg",
T:{height:"100%",version:"1.1",viewBox:"0 0 110 26",width:"100%"},R:[{F:"path",Jb:!0,L:"ytp-svg-fill",T:{d:"M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"}}]}},
B2=function(a){g.G.call(this);
this.callback=a;this.u=new g.ep(0,0,.4,0,.2,1,1,1);this.delay=new g.Go(this.next,window,this);this.startTime=this.duration=this.j=this.from=NaN;g.I(this,this.delay)},C2=function(a){g.V.call(this,{F:"div",
L:"ytp-related-on-error-overlay"});var b=this;this.api=a;this.D=this.j=0;this.C=new g.wz(this);this.B=[];this.suggestionData=[];this.containerWidth=0;this.title=new g.V({F:"h2",L:"ytp-related-title",Z:"{{title}}"});this.previous=new g.V({F:"button",Ba:["ytp-button","ytp-previous"],T:{"aria-label":"Show previous suggested videos"},R:[g.rG()]});this.N=new B2(function(f){b.suggestions.element.scrollLeft=-f});
this.tileWidth=this.u=0;this.I=!0;this.next=new g.V({F:"button",Ba:["ytp-button","ytp-next"],T:{"aria-label":"Show more suggested videos"},R:[g.sG()]});g.I(this,this.C);a=a.S();this.J=a.j;g.I(this,this.title);this.title.xa(this.element);this.suggestions=new g.V({F:"div",L:"ytp-suggestions"});g.I(this,this.suggestions);this.suggestions.xa(this.element);g.I(this,this.previous);this.previous.xa(this.element);this.previous.La("click",this.vU,this);g.I(this,this.N);for(var c={vt:0};16>c.vt;c={vt:c.vt},
c.vt++){var d=new g.V({F:"a",L:"ytp-suggestion-link",T:{href:"{{link}}",target:a.J,"aria-label":"{{aria_label}}"},R:[{F:"div",L:"ytp-suggestion-image",R:[{F:"div",T:{"data-is-live":"{{is_live}}"},L:"ytp-suggestion-duration",Z:"{{duration}}"}]},{F:"div",L:"ytp-suggestion-title",T:{title:"{{hover_title}}"},Z:"{{title}}"},{F:"div",L:"ytp-suggestion-author",Z:"{{views_or_author}}"}]});g.I(this,d);d.xa(this.suggestions.element);var e=d.ya("ytp-suggestion-link");g.Il(e,"transitionDelay",c.vt/20+"s");this.C.P(e,
"click",function(f){return function(h){var l=b.suggestionData[f.vt],m=l.sessionData;g.FJ(h,b.api,b.J,m||void 0)&&b.api.ul(l.videoId,m,l.playlistId)}}(c));
this.B.push(d)}g.I(this,this.next);this.next.xa(this.element);this.next.La("click",this.uU,this);this.C.P(this.api,"videodatachange",this.onVideoDataChange);this.resize(this.api.Wa().getPlayerSize());this.onVideoDataChange();this.show()},D2=function(a){a.next.element.style.bottom=a.D+"px";
a.previous.element.style.bottom=a.D+"px";var b=a.u,c=a.containerWidth-a.suggestionData.length*(a.tileWidth+a.j);g.N(a.element,"ytp-scroll-min",0<=b);g.N(a.element,"ytp-scroll-max",b<=c)},lXa=function(a){for(var b=0;b<a.suggestionData.length;b++){var c=a.suggestionData[b],d=a.B[b],e=c.shortViewCount?c.shortViewCount:c.author,f=c.im(),h=a.api.S();
if(g.DB(h)){var l={};h.oa&&g.dI(l,h.loaderUrl);f=g.yi(f,g.cI(l,"emb_rel_err"))}d.element.style.display="";h=d.ya("ytp-suggestion-title");g.cp.test(c.title)?h.dir="rtl":g.DSa.test(c.title)&&(h.dir="ltr");h=d.ya("ytp-suggestion-author");g.cp.test(e)?h.dir="rtl":g.DSa.test(e)&&(h.dir="ltr");d.update({views_or_author:e,duration:c.isLivePlayback?"Live":c.lengthSeconds?g.lH(c.lengthSeconds):"",link:f,hover_title:c.title,title:c.title,aria_label:c.ariaLabel||null,is_live:c.isLivePlayback});d=d.ya("ytp-suggestion-image");
c=c.zf();d.style.backgroundImage=c?"url("+c+")":""}for(;b<a.B.length;b++)a.B[b].element.style.display="none";D2(a)},E2=function(a){g.KJ.call(this,a);
var b=this;this.j=null;var c=a.S(),d={F:"svg",T:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},R:[{F:"path",T:{d:"M0 0h24v24H0V0z",fill:"none"}},{F:"path",T:{d:"M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"}}]};g.OB(c)&&(d={F:"svg",T:{fill:"none",height:"100%",
viewBox:"0 0 25 25",width:"100%"},R:[{F:"g",T:{"clip-path":"url(#clip0)",fill:"#fff"},R:[{F:"path",T:{d:"M12.57.98C6.21.98 1.05 6.14 1.05 12.5c0 6.36 5.16 11.52 11.52 11.52 6.36 0 11.52-5.16 11.52-11.52C24.09 6.14 18.93.98 12.57.98zm0 18.34c-3.77 0-6.82-3.05-6.82-6.82 0-3.77 3.05-6.82 6.82-6.82 3.77 0 6.82 3.05 6.82 6.82 0 3.77-3.05 6.82-6.82 6.82z"}},{F:"path",T:{d:"M12.57 6.52c-3.29 0-5.98 2.68-5.98 5.98 0 3.3 2.68 5.98 5.98 5.98 3.3 0 5.98-2.68 5.98-5.98 0-3.3-2.69-5.98-5.98-5.98zm-2.25 9.38V9.1l5.88 3.4-5.88 3.4z"}}]},
{F:"defs",R:[{F:"clipPath",T:{id:"clip0"},R:[{F:"path",T:{d:"M0 0h24v24H0z",fill:"#fff",transform:"translate(.57 .5)"}}]}]}]});var e={target:c.J},f=["ytp-small-redirect"];if(c.C)f.push("no-link");else{var h=g.nC(c);c.oa&&(h=mXa(h,c.loaderUrl));e.href=h;e["aria-label"]="Visit YouTube to search for more videos"}c=new g.V({F:"a",Ba:f,T:e,R:[d]});c.xa(this.element);g.I(this,c);a.S().C||(this.j=new C2(a),this.j.xa(this.element),g.I(this,this.j));this.P(a,"videodatachange",function(){b.show()});
this.resize(this.api.Wa().getPlayerSize())},nXa=function(a,b){a.ya("ytp-error-content").style.paddingTop="0px";
var c=a.ya("ytp-error-content"),d=c.clientHeight;a.j.resize(b,b.height-d);c.style.paddingTop=(b.height-a.j.element.clientHeight)/2-d/2+"px"},oXa=function(a,b){var c;
b.reason&&(F2(b.reason)?c=g.cw(b.reason):c=g.LJ(g.bw(b.reason)),a.Ld(c,"content"));var d;b.subreason&&(F2(b.subreason)?d=g.cw(b.subreason):d=g.LJ(g.bw(b.subreason)),a.Ld(d,"subreason"));if(b.proceedButton&&b.proceedButton.buttonRenderer&&(c=a.ya("ytp-error-content-wrap-subreason"),d=b.proceedButton.buttonRenderer,b=g.qh("A"),d.text&&d.text.simpleText)){var e=d.text.simpleText;b.textContent=e;a:{for(var f=g.ah("A",c),h=0;h<f.length;h++)if(f[h].textContent===e){e=!0;break a}e=!1}if(!e){var l,m;e=null==
d?void 0:null==(l=d.navigationEndpoint)?void 0:null==(m=l.urlEndpoint)?void 0:m.url;var n,p;l=null==d?void 0:null==(n=d.navigationEndpoint)?void 0:null==(p=n.urlEndpoint)?void 0:p.target;e&&(a=a.api.S(),a.oa&&(e=mXa(e,a.loaderUrl)),b.setAttribute("href",e));l&&b.setAttribute("target",l);a=g.qh("DIV");a.appendChild(b);c.appendChild(a)}}},F2=function(a){if(a.runs)for(var b=0;b<a.runs.length;b++)if(a.runs[b].navigationEndpoint)return!0;
return!1},mXa=function(a,b){var c={};
g.dI(c,b);return g.yi(a,c)},G2=function(a,b){g.V.call(this,{F:"a",
Ba:["ytp-impression-link"],T:{target:"{{target}}",href:"{{url}}","aria-label":"Watch on YouTube"},R:[{F:"div",L:"ytp-impression-link-content",T:{"aria-hidden":"true"},R:[{F:"div",L:"ytp-impression-link-text",Z:"Watch on"},{F:"div",L:"ytp-impression-link-logo",R:[A2()]}]}]});this.api=a;this.u=b;this.Ia("target",a.S().J);this.api.yb(this.element,this,96714);this.P(this.api,"presentingplayerstatechange",this.dh);this.P(this.api,"videoplayerreset",this.j);this.P(this.element,"click",this.onClick);this.j()},
pXa=function(a){var b={};
a.api.S().oa&&g.dI(b,a.api.S().loaderUrl);return g.yi(a.api.getVideoUrl(),g.cI(b,"emb_imp_woyt"))},H2=function(a){g.V.call(this,{F:"div",
Ba:["ytp-mobile-a11y-hidden-seek-button"],R:[{F:"button",Ba:["ytp-mobile-a11y-hidden-seek-button-rewind","ytp-button"],T:{"aria-label":"Rewind 10 seconds","aria-hidden":"false"}},{F:"button",Ba:["ytp-mobile-a11y-hidden-seek-button-forward","ytp-button"],T:{"aria-label":"Fast forward 10 seconds","aria-hidden":"false"}}]});this.api=a;this.j=this.ya("ytp-mobile-a11y-hidden-seek-button-rewind");this.forwardButton=this.ya("ytp-mobile-a11y-hidden-seek-button-forward");this.api.yb(this.j,this,141902);this.api.yb(this.forwardButton,
this,141903);this.P(this.api,"presentingplayerstatechange",this.dh);this.P(this.j,"click",this.u);this.P(this.forwardButton,"click",this.B);this.dh()},I2=function(a){g.V.call(this,{F:"div",
L:"ytp-muted-autoplay-endscreen-overlay",R:[{F:"div",L:"ytp-muted-autoplay-end-panel",R:[{F:"div",L:"ytp-muted-autoplay-end-text",Z:"{{text}}"}]}]});this.api=a;this.B=this.ya("ytp-muted-autoplay-end-panel");this.j=new g.DJ(this.api);g.I(this,this.j);this.j.xa(this.B,0);this.api.yb(this.element,this,52428);this.P(this.api,"presentingplayerstatechange",this.u);this.La("click",this.onClick);this.hide()},J2=function(a){g.V.call(this,{F:"div",
L:"ytp-muted-autoplay-overlay",R:[{F:"div",L:"ytp-muted-autoplay-bottom-buttons",R:[{F:"button",Ba:["ytp-muted-autoplay-equalizer","ytp-button"],R:[{F:"div",Ba:["ytp-muted-autoplay-equalizer-icon"],R:[{F:"svg",T:{height:"100%",version:"1.1",viewBox:"-4 -4 24 24",width:"100%"},R:[{F:"g",T:{fill:"#fff"},R:[{F:"rect",L:"ytp-equalizer-bar-left",T:{height:"9",width:"4",x:"1",y:"7"}},{F:"rect",L:"ytp-equalizer-bar-middle",T:{height:"14",width:"4",x:"6",y:"2"}},{F:"rect",L:"ytp-equalizer-bar-right",T:{height:"12",
width:"4",x:"11",y:"4"}}]}]}]}]}]}]});this.api=a;this.bottomButtons=this.ya("ytp-muted-autoplay-bottom-buttons");this.ya("ytp-muted-autoplay-equalizer");this.B=new g.K(this.u,4E3,this);a.yb(this.element,this,39306);this.P(a,"presentingplayerstatechange",this.j);this.P(a,"onMutedAutoplayStarts",this.j);this.La("click",this.onClick);this.hide()},K2=function(a,b){g.V.call(this,{F:"div",
L:"ytp-pause-overlay",T:{tabIndex:"-1"}});var c=this;this.api=a;this.I=b;this.j=new g.wz(this);this.C=new g.YG(this,1E3,!1,100);this.B=[];this.suggestionData=[];this.containerWidth=0;this.D=!1;this.W=0;this.title=new g.V({F:"h2",L:"ytp-related-title",Z:"{{title}}"});this.previous=new g.V({F:"button",Ba:["ytp-button","ytp-previous"],T:{"aria-label":"Show previous suggested videos"},R:[g.rG()]});this.N=new B2(function(f){c.suggestions.element.scrollLeft=-f});
this.V=this.tileWidth=this.u=0;this.next=new g.V({F:"button",Ba:["ytp-button","ytp-next"],T:{"aria-label":"Show more suggested videos"},R:[g.sG()]});this.expandButton=new g.V({F:"button",Ba:["ytp-button","ytp-expand"],Z:"More videos"});g.I(this,this.j);g.I(this,this.C);b=a.S();"0"===b.controlsType&&g.Po(a.getRootNode(),"ytp-pause-overlay-controls-hidden");this.J=b.j;g.I(this,this.title);this.title.xa(this.element);this.suggestions=new g.V({F:"div",L:"ytp-suggestions"});g.I(this,this.suggestions);
this.suggestions.xa(this.element);g.I(this,this.previous);this.previous.xa(this.element);this.previous.La("click",this.xU,this);g.I(this,this.N);for(a={wt:0};16>a.wt;a={wt:a.wt},a.wt++){var d=new g.V({F:"a",L:"ytp-suggestion-link",T:{href:"{{link}}",target:b.J,"aria-label":"{{aria_label}}"},R:[{F:"div",L:"ytp-suggestion-image"},{F:"div",L:"ytp-suggestion-overlay",T:{style:"{{blink_rendering_hack}}","aria-hidden":"{{aria_hidden}}"},R:[{F:"div",L:"ytp-suggestion-title",Z:"{{title}}"},{F:"div",L:"ytp-suggestion-author",
Z:"{{author_and_views}}"},{F:"div",T:{"data-is-live":"{{is_live}}"},L:"ytp-suggestion-duration",Z:"{{duration}}"}]}]});g.I(this,d);d.xa(this.suggestions.element);var e=d.ya("ytp-suggestion-link");g.Il(e,"transitionDelay",a.wt/20+"s");this.j.P(e,"click",function(f){return function(h){var l=f.wt;if(1E3>(0,g.Q)()-c.W)g.It(h),document.activeElement.blur();else{l=c.suggestionData[l];var m=l.sessionData;g.FJ(h,c.api,c.J,m||void 0)&&c.api.ul(l.videoId,m,l.playlistId)}}}(a));
this.B.push(d)}g.I(this,this.next);this.next.xa(this.element);this.next.La("click",this.wU,this);b=new g.V({F:"button",Ba:["ytp-button","ytp-collapse"],T:{"aria-label":"Hide more videos"},R:[g.rAa()]});g.I(this,b);b.xa(this.element);b.La("click",this.DY,this);g.I(this,this.expandButton);this.expandButton.xa(this.element);this.expandButton.La("click",this.EY,this);this.j.P(this.api,"appresize",this.vb);this.j.P(this.api,"fullscreentoggled",this.Un);this.j.P(this.api,"presentingplayerstatechange",this.Wc);
this.j.P(this.api,"videodatachange",this.onVideoDataChange);this.vb(this.api.Wa().getPlayerSize());this.onVideoDataChange()},L2=function(a){var b=a.I.Hf()?32:16;
b=a.V/2+b;a.next.element.style.bottom=b+"px";a.previous.element.style.bottom=b+"px";b=a.u;var c=a.containerWidth-a.suggestionData.length*(a.tileWidth+8);g.N(a.element,"ytp-scroll-min",0<=b);g.N(a.element,"ytp-scroll-max",b<=c)},qXa=function(a){for(var b=0;b<a.suggestionData.length;b++){var c=a.suggestionData[b],d=a.B[b],e=c.shortViewCount?c.author+" \u2022 "+c.shortViewCount:c.author;
d.element.style.display="";g.CSa.test(c.title)&&(d.ya("ytp-suggestion-title").dir="rtl");g.CSa.test(e)&&(d.ya("ytp-suggestion-author").dir="rtl");var f=c.isLivePlayback?"Live":c.lengthSeconds?g.lH(c.lengthSeconds):"";var h=c.im();if(g.DB(a.api.S())){var l={};a.api.S().oa&&g.dI(l,a.api.S().loaderUrl);h=g.yi(h,g.cI(l,"emb_rel_pause"))}d.update({author_and_views:e,duration:f,link:h,title:c.title,aria_label:c.ariaLabel||null,is_live:c.isLivePlayback,aria_hidden:!(!c.ariaLabel||a.api.S().K("embeds_rv_aria_hidden_killswitch")),
blink_rendering_hack:g.Az||g.BB?"will-change: opacity":void 0});d=d.ya("ytp-suggestion-image");c=c.zf();d.style.backgroundImage=c?"url("+c+")":""}for(;b<a.B.length;b++)a.B[b].element.style.display="none";L2(a)},M2=function(a){var b=a.S();
g.V.call(this,{F:"a",Ba:["ytp-watermark","yt-uix-sessionlink"],T:{target:b.J,href:"{{url}}","aria-label":g.XE("Watch on $WEBSITE",{WEBSITE:g.ZB(b)}),"data-sessionlink":"feature=player-watermark"},R:[A2()]});this.api=a;this.j=null;this.u=!1;this.state=a.wb();a.yb(this.element,this,76758);this.P(a,"videodatachange",this.dK);this.P(a,"videodatachange",this.onVideoDataChange);this.P(a,"presentingplayerstatechange",this.onStateChange);this.P(a,"appresize",this.vb);b=this.state;this.state!==b&&(this.state=
b);this.dK();this.onVideoDataChange();this.vb(a.Wa().getPlayerSize())},N2=function(a){g.fJ.call(this,a);
this.G=a;this.j=new g.wz(this);g.I(this,this.j);this.load()},O2=function(a,b){a={adSource:"EMBEDS_AD_SOURCE_YOUTUBE",
breakType:0===a.G.getCurrentTime()?"EMBEDS_AD_BREAK_TYPE_PRE_ROLL":0===a.G.getPlayerState()?"EMBEDS_AD_BREAK_TYPE_POST_ROLL":"EMBEDS_AD_BREAK_TYPE_MID_ROLL",embedUrl:g.gda(a.G.S().loaderUrl),eventType:b,youtubeHost:g.si(a.G.S().Y)||""};g.Pr("embedsAdEvent",a)};
g.w(B2,g.G);B2.prototype.start=function(a,b,c){this.from=a;this.j=b;this.duration=c;this.startTime=(0,g.Q)();this.next()};
B2.prototype.next=function(){var a=(0,g.Q)()-this.startTime;var b=this.u;a=kXa(b,a/this.duration);if(0==a)b=b.J;else if(1==a)b=b.N;else{var c=g.Lg(b.J,b.D,a),d=g.Lg(b.D,b.I,a);b=g.Lg(b.I,b.N,a);c=g.Lg(c,d,a);d=g.Lg(d,b,a);b=g.Lg(c,d,a)}b=g.Jg(b,0,1);this.callback((this.j-this.from)*b+this.from);1>b&&this.delay.start()};g.w(C2,g.V);g.k=C2.prototype;g.k.hide=function(){this.I=!0;g.V.prototype.hide.call(this)};
g.k.show=function(){this.I=!1;g.V.prototype.show.call(this)};
g.k.isHidden=function(){return this.I};
g.k.uU=function(){this.scrollTo(this.u-this.containerWidth)};
g.k.vU=function(){this.scrollTo(this.u+this.containerWidth)};
g.k.resize=function(a,b){var c=this.api.S(),d=16/9,e=650<=a.width,f=480>a.width||290>a.height,h=Math.min(this.suggestionData.length,this.B.length);if(150>=Math.min(a.width,a.height)||0===h||!c.Kc)this.hide();else{var l;if(e){var m=l=28;this.j=16}else this.j=m=l=8;if(f){var n=6;e=14;var p=12;f=24;c=12}else n=8,e=18,p=16,f=36,c=16;a=a.width-(48+l+m);l=Math.ceil(a/150);l=Math.min(3,l);l=a/l-this.j;m=Math.floor(l/d);b&&m+100>b&&50<l&&(m=Math.max(b,50/d),l=Math.ceil(a/(d*(m-100)+this.j)),l=a/l-this.j,
m=Math.floor(l/d));50>l||g.PI(this.api)?this.hide():this.show();for(b=0;b<h;b++){d=this.B[b];var q=d.ya("ytp-suggestion-image");q.style.width=l+"px";q.style.height=m+"px";d.ya("ytp-suggestion-title").style.width=l+"px";d.ya("ytp-suggestion-author").style.width=l+"px";d=d.ya("ytp-suggestion-duration");d.style.display=d&&100>l?"none":""}h=e+n+p+4;this.D=h+c+(m-f)/2;this.suggestions.element.style.height=m+h+"px";this.tileWidth=l;this.containerWidth=a;this.u=0;this.suggestions.element.scrollLeft=-0;D2(this)}};
g.k.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.S();this.J=a.D?!1:b.j;a.suggestions?this.suggestionData=g.Qm(a.suggestions,function(c){return c&&!c.playlistId}):this.suggestionData.length=0;
lXa(this);a.D?this.title.update({title:g.XE("More videos from $DNI_RELATED_CHANNEL",{DNI_RELATED_CHANNEL:a.author})}):this.title.update({title:"More videos on YouTube"})};
g.k.scrollTo=function(a){a=g.Jg(a,this.containerWidth-this.suggestionData.length*(this.tileWidth+this.j),0);this.N.start(this.u,a,1E3);this.u=a;D2(this)};g.w(E2,g.KJ);E2.prototype.show=function(){g.KJ.prototype.show.call(this);nXa(this,this.api.Wa().getPlayerSize())};
E2.prototype.resize=function(a){g.KJ.prototype.resize.call(this,a);this.j&&(nXa(this,a),g.N(this.element,"related-on-error-overlay-visible",!this.j.isHidden()))};
E2.prototype.u=function(a){g.KJ.prototype.u.call(this,a);var b=this.api.getVideoData();if(b.fF||b.playerErrorMessageRenderer)(a=b.fF)?oXa(this,a):b.playerErrorMessageRenderer&&oXa(this,b.playerErrorMessageRenderer);else{var c;a.Bk&&(b.Jr?F2(b.Jr)?c=g.cw(b.Jr):c=g.LJ(g.bw(b.Jr)):c=g.LJ(a.Bk),this.Ld(c,"subreason"))}};g.w(G2,g.V);G2.prototype.dh=function(){this.api.wb().isCued()||(this.hide(),this.api.Va(this.element,!1))};
G2.prototype.j=function(){var a=this.api.getVideoData(),b=this.api.S(),c=this.api.getVideoData().D,d=b.Mc,e=!b.Kc,f=this.u.hg(),h=g.OB(b);b=b.C;d||f||c||e||h||b||!a.videoId?(this.hide(),this.api.Va(this.element,!1)):(a=pXa(this),this.Ia("url",a),this.show())};
G2.prototype.onClick=function(a){var b=pXa(this);g.GJ(b,this.api,a);this.api.rb(this.element)};
G2.prototype.show=function(){this.api.wb().isCued()&&(g.V.prototype.show.call(this),this.api.Dp(this.element)&&this.api.Va(this.element,!0))};g.w(H2,g.V);H2.prototype.dh=function(){var a=this.api.wb();!this.api.Rf()||g.U(a,2)&&g.MI(this.api)||g.U(a,64)?(this.api.Va(this.j,!1),this.api.Va(this.forwardButton,!1),this.hide()):(this.show(),this.api.Va(this.j,!0),this.api.Va(this.forwardButton,!0))};
H2.prototype.u=function(){this.api.seekBy(-10*this.api.getPlaybackRate());this.api.rb(this.j)};
H2.prototype.B=function(){this.api.seekBy(10*this.api.getPlaybackRate());this.api.rb(this.forwardButton)};g.w(I2,g.V);I2.prototype.u=function(){var a=this.api.wb(),b=this.api.getVideoData();this.api.S().K("embeds_enable_muted_autoplay")&&b.mutedAutoplay&&(g.U(a,2)&&!this.ob?(this.show(),this.j.show(),a=this.api.getVideoData(),this.Ia("text",a.HL),g.N(this.element,"ytp-muted-autoplay-show-end-panel",!0),this.api.Va(this.element,this.ob),this.api.Ma("onMutedAutoplayEnds")):this.hide())};
I2.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;g.hD(a);this.api.loadVideoById(a.videoId,b);this.api.rb(this.element);this.hide()};g.w(J2,g.V);J2.prototype.j=function(){var a=this.api.wb(),b=this.api.getVideoData();this.api.S().K("embeds_enable_muted_autoplay")&&b.mutedAutoplay&&!g.U(a,2)?this.ob||(g.V.prototype.show.call(this),this.B.start(),this.api.Va(this.element,this.ob)):this.hide()};
J2.prototype.u=function(){g.N(this.element,"ytp-muted-autoplay-hide-watermark",!0)};
J2.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;g.hD(a);this.api.loadVideoById(a.videoId,b);this.api.rb(this.element)};g.w(K2,g.V);g.k=K2.prototype;g.k.hide=function(){g.Ro(this.api.getRootNode(),"ytp-expand-pause-overlay");g.V.prototype.hide.call(this)};
g.k.DY=function(){this.D=!0;g.Ro(this.api.getRootNode(),"ytp-expand-pause-overlay");this.expandButton.focus()};
g.k.EY=function(){this.D=!1;g.Po(this.api.getRootNode(),"ytp-expand-pause-overlay");this.focus()};
g.k.wU=function(){this.scrollTo(this.u-this.containerWidth)};
g.k.xU=function(){this.scrollTo(this.u+this.containerWidth)};
g.k.Un=function(){this.vb(this.api.Wa().getPlayerSize())};
g.k.Wc=function(a){if(!(g.U(a.state,1)||g.U(a.state,16)||g.U(a.state,32))){var b=!this.api.S().K("embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch")&&g.U(a.state,1024);!g.U(a.state,4)||g.U(a.state,2)||b?this.C.hide():this.suggestionData.length&&(this.D||(g.Po(this.api.getRootNode(),"ytp-expand-pause-overlay"),L2(this)),this.C.show(),this.W=(0,g.Q)())}};
g.k.vb=function(a){var b=16/9,c=this.I.Hf();a=a.width-(c?112:58);c=Math.ceil(a/(c?320:192));c=(a-8*c)/c;b=Math.floor(c/b);for(var d=0;d<this.B.length;d++){var e=this.B[d].ya("ytp-suggestion-image");e.style.width=c+"px";e.style.height=b+"px"}this.suggestions.element.style.height=b+"px";this.tileWidth=c;this.V=b;this.containerWidth=a;this.u=0;this.suggestions.element.scrollLeft=-0;L2(this)};
g.k.onVideoDataChange=function(){var a=this.api.S(),b=this.api.getVideoData();this.J=b.D?!1:a.j;b.suggestions?this.suggestionData=g.Qm(b.suggestions,function(c){return c&&!c.playlistId}):this.suggestionData.length=0;
qXa(this);b.D?this.title.update({title:g.XE("More videos from $DNI_RELATED_CHANNEL",{DNI_RELATED_CHANNEL:b.author})}):this.title.update({title:"More videos"})};
g.k.scrollTo=function(a){a=g.Jg(a,this.containerWidth-this.suggestionData.length*(this.tileWidth+8),0);this.N.start(this.u,a,1E3);this.u=a;L2(this)};g.w(M2,g.V);g.k=M2.prototype;g.k.dK=function(){var a=this.api.getVideoData(),b=this.api.getVideoData(1).D,c=this.api.S();a=(a.mutedAutoplay||c.Mc&&!g.U(this.state,2))&&!(b&&c.pfpChazalUi);g.mG(this,a);this.api.Va(this.element,a)};
g.k.onStateChange=function(a){a=a.state;this.state!==a&&(this.state=a);this.dK()};
g.k.onVideoDataChange=function(){if(this.api.getVideoData().videoId){var a=this.api.getVideoUrl(!0,!1,!1,!0);this.Ia("url",a);this.j||(this.j=this.La("click",this.onClick))}else this.j&&(this.Ia("url",null),this.wc(this.j),this.j=null)};
g.k.onClick=function(a){var b=this.api.getVideoUrl(!g.mH(a),!1,!0,!0);g.GJ(b,this.api,a);this.api.rb(this.element)};
g.k.vb=function(a){if((a=480>a.width)&&!this.u||!a&&this.u){var b=new g.V(A2()),c=this.ya("ytp-watermark");g.N(c,"ytp-watermark-small",a);g.sh(c);b.xa(c);this.u=a}};g.w(N2,g.fJ);g.k=N2.prototype;g.k.cj=function(){return!1};
g.k.create=function(){var a=this.G.S(),b=g.II(this.G),c,d=null==(c=this.G.getVideoData())?void 0:c.clientPlaybackNonce;d&&g.Cw("cpn",d);a.Kc&&!a.C&&(this.I=new K2(this.G,b),g.I(this,this.I),g.SI(this.G,this.I.element,4));a.K("embeds_enable_muted_autoplay")&&(this.u=new J2(this.G),g.I(this,this.u),g.SI(this.G,this.u.element,4),this.D=new I2(this.G),g.I(this,this.D),g.SI(this.G,this.D.element,4));if(a.Mc||this.u)this.watermark=new M2(this.G),g.I(this,this.watermark),g.SI(this.G,this.watermark.element,
8);this.B=new G2(this.G,b);g.I(this,this.B);g.SI(this.G,this.B.element,8);a.isMobile&&(this.C=new H2(this.G),g.I(this,this.C),g.SI(this.G,this.C.element,4));this.j.P(this.G,"appresize",this.vb);this.j.P(this.G,"presentingplayerstatechange",this.dh);this.j.P(this.G,"videodatachange",this.F1);this.j.P(this.G,"onMutedAutoplayStarts",this.onMutedAutoplayStarts);this.j.P(this.G,"onAdStart",this.onAdStart);this.j.P(this.G,"onAdComplete",this.onAdComplete);this.j.P(this.G,"onAdSkip",this.onAdSkip);this.j.P(this.G,
"onAdStateChange",this.onAdStateChange);this.Sb(this.G.wb());this.player.lf("embed")};
g.k.vb=function(){var a=this.G.Wa().getPlayerSize();this.rf&&this.rf.resize(a)};
g.k.dh=function(a){this.Sb(a.state)};
g.k.Sb=function(a){g.U(a,128)?(this.rf||(this.rf=new E2(this.G),g.I(this,this.rf),g.SI(this.G,this.rf.element,4)),this.rf.u(a.getData()),this.rf.show(),g.Po(this.G.getRootNode(),"ytp-embed-error")):this.rf&&(this.rf.dispose(),this.rf=null,g.Ro(this.G.getRootNode(),"ytp-embed-error"))};
g.k.onMutedAutoplayStarts=function(){this.G.getVideoData().mutedAutoplay&&this.u&&this.watermark&&this.watermark.xa(this.u.bottomButtons,0)};
g.k.F1=function(){var a=this.G.getVideoData();this.watermark&&this.u&&!a.mutedAutoplay&&g.xh(this.u.element,this.watermark.element)&&g.SI(this.G,this.watermark.element,8)};
g.k.onAdStart=function(){O2(this,"EMBEDS_AD_EVENT_TYPE_AD_STARTED")};
g.k.onAdComplete=function(){O2(this,"EMBEDS_AD_EVENT_TYPE_AD_COMPLETED")};
g.k.onAdSkip=function(){O2(this,"EMBEDS_AD_EVENT_TYPE_AD_SKIPPED")};
g.k.onAdStateChange=function(a){2===a&&O2(this,"EMBEDS_AD_EVENT_TYPE_AD_PAUSED")};g.eJ("embed",N2);})(_yt_player);
