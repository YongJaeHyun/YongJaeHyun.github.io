"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[5044],{5044:(o,e,t)=>{t.d(e,{drawCog:()=>l,drawCogHole:()=>d});var i=t(4864);const c=2,n=Math.PI*c,a=0,s={x:0,y:0},r=.005;function d(o){const{context:e,particle:t,radius:c}=o;if(void 0===t.cogHoleRadius||void 0===t.cogInnerRadius||void 0===t.cogInnerTaper||void 0===t.cogNotches||void 0===t.cogOuterTaper)return;const r=c*t.cogHoleRadius/i.sc;e.globalCompositeOperation="destination-out",e.beginPath(),e.moveTo(r,s.y),e.arc(s.x,s.y,r,a,n),e.closePath(),e.fill(),e.globalCompositeOperation="source-over"}function l(o){const{context:e,particle:t,radius:a}=o;if(void 0===t.cogHoleRadius||void 0===t.cogInnerRadius||void 0===t.cogInnerTaper||void 0===t.cogNotches||void 0===t.cogOuterTaper)return;const s=n/(t.cogNotches*c),d=s*t.cogInnerTaper*r,l=s*t.cogOuterTaper*r,u=a*t.cogInnerRadius/i.sc;let g=s,h=!1;for(e.moveTo(a*Math.cos(l),a*Math.sin(l));g<=n;g+=s)h?(e.lineTo(u*Math.cos(g-d),u*Math.sin(g-d)),e.lineTo(a*Math.cos(g+l),a*Math.sin(g+l))):(e.lineTo(a*Math.cos(g-l),a*Math.sin(g-l)),e.lineTo(u*Math.cos(g+d),u*Math.sin(g+d))),h=!h}}}]);
//# sourceMappingURL=5044.ce919576.chunk.js.map