"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[5008],{5008:(t,s,i)=>{i.d(s,{EmittersCircleShapeGenerator:()=>r});var o=i(7608),e=i(4864);const n=.25,a=2*Math.PI;class h extends o.A{constructor(t,s,i,o){super(t,s,i,o)}async init(){}async randomPosition(){const t=this.size,s=this.fill,i=this.position,[o,h]=[.5*t.width,.5*t.height],r=((t,s)=>{const i=(0,e.CE)()*n,o=Math.atan(s/t*Math.tan(a*i)),h=(0,e.CE)();return h<n?o:h<.5?Math.PI-o:h<.75?Math.PI+o:-o})(o,h),c=(u=r,(p=o)*(M=h)/Math.sqrt((M*Math.cos(u))**2+(p*Math.sin(u))**2)),l=s?c*Math.sqrt((0,e.CE)()):c;var p,M,u;return Promise.resolve({position:{x:i.x+l*Math.cos(r),y:i.y+l*Math.sin(r)}})}}class r{generate(t,s,i,o){return new h(t,s,i,o)}}},7608:(t,s,i)=>{i.d(s,{A:()=>o});class o{constructor(t,s,i,o){this.position=t,this.size=s,this.fill=i,this.options=o}resize(t,s){this.position=t,this.size=s}}}}]);
//# sourceMappingURL=5008.98607935.chunk.js.map