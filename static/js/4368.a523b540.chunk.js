"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[4368],{4368:(t,i,a)=>{a.d(i,{TrailDrawer:()=>n});var l=a(4864);const o=.5;class n{async draw(t){var i;const{context:a,radius:l,particle:n}=t,r=2*l,e=n.container.retina.pixelRatio,s=n.getPosition();if(!n.trail||!n.trailLength)return;const h=n.trailLength+l;if(n.trail.push({color:null!==(i=a.fillStyle)&&void 0!==i?i:a.strokeStyle,position:{x:s.x,y:s.y}}),n.trail.length<2)return;for(;n.trail.length>h;)n.trail.shift();const d=Math.min(n.trail.length,h),c=s.x,x=s.y,v=n.container.canvas.size.width+r,y=n.container.canvas.size.height+r;let p=n.trail[d-1].position;const f=1,u=0,g=0,m=1;a.setTransform(f,u,g,m,s.x,s.y);for(let W=d;W>0;W--){var M;const t=n.trail[W-1],i=t.position;a.beginPath(),a.moveTo(p.x-c,p.y-x);const l={x:(p.x+v)%v,y:(p.y+y)%y};if(Math.abs(p.x-i.x)>v*o||Math.abs(p.y-i.y)>y*o){p=i;continue}a.lineTo((Math.abs(p.x-i.x)>v*o?l.x:i.x)-c,(Math.abs(p.y-i.y)>y*o?l.y:i.y)-x);const s=Math.max(W/d*r,e,null!==(M=n.trailMinWidth)&&void 0!==M?M:-1),h=a.globalAlpha;a.globalAlpha=n.trailFade?W/d:1,a.lineWidth=n.trailMaxWidth?Math.min(s,n.trailMaxWidth):s,a.strokeStyle=t.color,a.stroke(),a.globalAlpha=h,p=i}const{transformData:b}=t;a.setTransform(b.a,b.b,b.c,b.d,s.x,s.y),await Promise.resolve()}async particleInit(t,i){var a,o;i.trail=[];const n=i.effectData;i.trailFade=null===(a=null===n||void 0===n?void 0:n.fade)||void 0===a||a,i.trailLength=(0,l.qS)(null!==(o=null===n||void 0===n?void 0:n.length)&&void 0!==o?o:10)*t.retina.pixelRatio,i.trailMaxWidth=null!==n&&void 0!==n&&n.maxWidth?(0,l.qS)(n.maxWidth)*t.retina.pixelRatio:void 0,i.trailMinWidth=null!==n&&void 0!==n&&n.minWidth?(0,l.qS)(n.minWidth)*t.retina.pixelRatio:void 0,await Promise.resolve()}}}}]);
//# sourceMappingURL=4368.a523b540.chunk.js.map