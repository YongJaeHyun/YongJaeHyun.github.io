"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9900],{9900:(t,e,i)=>{i.d(e,{EmittersCanvasShapeGenerator:()=>g});var s=i(7608),o=i(4864);const n={x:0,y:0};function a(t,e,i){let s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const o=t.getImageData(n.x,n.y,e.width,e.height).data;s&&t.clearRect(n.x,n.y,e.width,e.height);const a=[];for(let n=0;n<o.length;n+=i){const t=n/i,s={x:t%e.width,y:Math.floor(t/e.width)};a[s.y]||(a[s.y]=[]);const c={r:0,g:1,b:2,a:3},l=255;a[s.y][s.x]={r:o[n+c.r],g:o[n+c.g],b:o[n+c.b],a:o[n+c.a]/l}}return{pixels:a,width:Math.min(...a.map((t=>t.length))),height:a.length}}class c extends s.A{constructor(t,e,i,s){super(t,e,i,s);const n=s.filter;let a=t=>t.a>0;if(void 0!==n)if((0,o.ct)(n)){if(Object.hasOwn(window,n)){const t=window[n];(0,o.mg)(t)&&(a=t)}}else a=n;this.filter=a,this.scale=s.scale,this.pixelData={pixels:[],height:0,width:0}}async init(){let t;const e=this.options,i=e.selector,s=e.pixels,c=e.image,l=e.element,r=e.text,h=s.offset;if(c){const e=c.src;if(!e)return;t=await function(t,e){const i=new Image;i.crossOrigin="Anonymous";const s=new Promise(((t,s)=>{i.onerror=s,i.onload=()=>{const c=document.createElement("canvas");c.width=i.width,c.height=i.height;const l=c.getContext("2d");if(!l)return s(new Error("".concat(o.iQ," Could not get canvas context")));l.drawImage(i,n.x,n.y,i.width,i.height,n.x,n.y,c.width,c.height),t(a(l,c,e))}}));return i.src=t,s}(e,h)}else if(r){const e=function(t,e,i){const s=document.createElement("canvas"),c=s.getContext("2d"),{font:l,text:r,lines:h,color:d}=t;if(!r||!c)return;const f=r.split(h.separator),g=(0,o.Ib)(l.size)?"".concat(l.size,"px"):l.size,x=[];let u=0,p=0;for(const o of f){c.font="".concat(l.style||""," ").concat(l.variant||""," ").concat(l.weight||""," ").concat(g," ").concat(l.family);const t=c.measureText(o),e={measure:t,text:o,height:t.actualBoundingBoxAscent+t.actualBoundingBoxDescent,width:t.width};u=Math.max(u||0,e.width),p+=e.height+h.spacing,x.push(e)}s.width=u,s.height=p;let w=0;for(const o of x)c.font="".concat(l.style||""," ").concat(l.variant||""," ").concat(l.weight||""," ").concat(g," ").concat(l.family),i?(c.fillStyle=d,c.fillText(o.text,n.x,w+o.measure.actualBoundingBoxAscent)):(c.strokeStyle=d,c.strokeText(o.text,n.x,w+o.measure.actualBoundingBoxAscent)),w+=o.height+h.spacing;return a(c,s,e)}(r,h,this.fill);if(!e)return;t=e}else if(null!==l&&void 0!==l?l:i){const e=null!==l&&void 0!==l?l:i&&document.querySelector(i);if(!e)return;const s=e.getContext("2d");if(!s)return;t=a(s,e,h)}t&&(this.pixelData=t)}async randomPosition(){const{height:t,width:e}=this.pixelData,i=this.pixelData,s=this.position,n=this.scale,a=s.x-e*n*.5,c=s.y-t*n*.5;for(let l=0;l<100;l++){const s=Math.floor((0,o.CE)()*e*t),l={x:s%e,y:Math.floor(s/e)},r=i.pixels[l.y][l.x];if(this.filter(r))return Promise.resolve({position:{x:l.x*n+a,y:l.y*n+c},color:{...r},opacity:r.a})}return Promise.resolve(null)}resize(t,e){super.resize(t,e)}}class l{constructor(){this.offset=4}load(t){t&&void 0!==t.offset&&(this.offset=t.offset)}}class r{constructor(){this.family="Verdana",this.size=32,this.style="",this.variant="",this.weight=""}load(t){t&&(void 0!==t.family&&(this.family=t.family),void 0!==t.size&&(this.size=t.size),void 0!==t.style&&(this.style=t.style),void 0!==t.variant&&(this.variant=t.variant),void 0!==t.weight&&(this.weight=t.weight))}}class h{constructor(){this.separator="\n",this.spacing=0}load(t){t&&(void 0!==t.separator&&(this.separator=t.separator),void 0!==t.spacing&&(this.spacing=t.spacing))}}class d{constructor(){this.color="#000000",this.font=new r,this.lines=new h,this.text=""}load(t){t&&(void 0!==t.color&&(this.color=t.color),this.font.load(t.font),this.lines.load(t.lines),void 0!==t.text&&(this.text=t.text))}}class f{constructor(){this.filter=t=>t.a>0,this.pixels=new l,this.scale=1,this.selector="",this.text=new d}load(t){t&&(void 0!==t.element&&(this.element=t.element),void 0!==t.filter&&(this.filter=t.filter),this.pixels.load(t.pixels),void 0!==t.scale&&(this.scale=t.scale),void 0!==t.selector&&(this.selector=t.selector),void 0!==t.image&&(this.image=t.image),this.text.load(t.text))}}class g{generate(t,e,i,s){const o=new f;return o.load(s),new c(t,e,i,o)}}},7608:(t,e,i)=>{i.d(e,{A:()=>s});class s{constructor(t,e,i,s){this.position=t,this.size=e,this.fill=i,this.options=s}resize(t,e){this.position=t,this.size=e}}}}]);
//# sourceMappingURL=9900.4ba7a284.chunk.js.map