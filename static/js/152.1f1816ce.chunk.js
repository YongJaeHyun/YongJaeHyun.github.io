"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[152],{152:(a,e,t)=>{t.d(e,{GradientUpdater:()=>u});var i=t(4864);class o{constructor(){this.count=0,this.enable=!1,this.speed=0,this.decay=0,this.delay=0,this.sync=!1,this.startValue="random"}load(a){a&&(void 0!==a.count&&(this.count=(0,i.Ws)(a.count)),void 0!==a.enable&&(this.enable=a.enable),void 0!==a.speed&&(this.speed=(0,i.Ws)(a.speed)),void 0!==a.sync&&(this.sync=a.sync),void 0!==a.startValue&&(this.startValue=a.startValue),void 0!==a.decay&&(this.decay=(0,i.Ws)(a.decay)),void 0!==a.delay&&(this.delay=(0,i.Ws)(a.delay)))}}class s{constructor(){this.value=0,this.animation=new o}load(a){a&&(this.animation.load(a.animation),void 0!==a.value&&(this.value=(0,i.Ws)(a.value)))}}class n{constructor(){this.stop=0,this.value=new i.uC}load(a){a&&(void 0!==a.stop&&(this.stop=a.stop),this.value=i.uC.create(this.value,a.value),void 0!==a.opacity&&(this.opacity=new s,(0,i.Ib)(a.opacity)?this.opacity.value=a.opacity:this.opacity.load(a.opacity)))}}class c{constructor(){this.count=0,this.enable=!1,this.speed=0,this.decay=0,this.delay=0,this.sync=!1}load(a){a&&(void 0!==a.count&&(this.count=(0,i.Ws)(a.count)),void 0!==a.enable&&(this.enable=a.enable),void 0!==a.speed&&(this.speed=(0,i.Ws)(a.speed)),void 0!==a.decay&&(this.decay=(0,i.Ws)(a.decay)),void 0!==a.delay&&(this.delay=(0,i.Ws)(a.delay)),void 0!==a.sync&&(this.sync=a.sync))}}class l{constructor(){this.value=0,this.animation=new c,this.direction="clockwise"}load(a){a&&(this.animation.load(a.animation),void 0!==a.value&&(this.value=(0,i.Ws)(a.value)),void 0!==a.direction&&(this.direction=a.direction))}}class d{constructor(){this.angle=new l,this.colors=[],this.type="random"}load(a){a&&(this.angle.load(a.angle),void 0!==a.colors&&(this.colors=a.colors.map((a=>{const e=new n;return e.load(a),e}))),void 0!==a.type&&(this.type=a.type))}}const r=2*Math.PI;class u{getColorStyles(a,e,t,o){const s=a.gradient;if(!s)return{};const n=s.angle.value,c=0,l=0,d="radial"===s.type?e.createRadialGradient(c,l,0,c,l,t):e.createLinearGradient(Math.cos(n)*-t,Math.sin(n)*-t,Math.cos(n)*t,Math.sin(n)*t);for(const{stop:u,value:v,opacity:y}of s.colors){var r;d.addColorStop(u,(0,i.CK)({h:v.h.value,s:v.s.value,l:v.l.value},null!==(r=null===y||void 0===y?void 0:y.value)&&void 0!==r?r:o))}return{fill:d}}async init(a){const e=(0,i.pd)(a.options.gradient);if(!e)return;const{angle:t}=e;a.gradient={angle:{value:(0,i.qS)(t.value),enable:t.animation.enable,velocity:(0,i.qS)(t.animation.speed)/360*a.container.retina.reduceFactor,decay:1-(0,i.qS)(t.animation.decay),delayTime:(0,i.qS)(t.animation.delay)*i.Ub,max:r,min:0,time:0},type:e.type,colors:[]};let o=e.angle.direction;switch("random"===o&&(o=(0,i.CE)()>i.oz?"counter-clockwise":"clockwise"),o){case"counter-clockwise":case"counterClockwise":a.gradient.angle.status="decreasing";break;case"clockwise":a.gradient.angle.status="increasing"}const s=a.options.reduceDuplicates;for(const n of e.colors){const e=(0,i.cl)(n.value,a.id,s);if(!e)continue;const t=(0,i._o)(e,n.value.animation,a.container.retina.reduceFactor),o={stop:n.stop,value:t,opacity:n.opacity?{enable:n.opacity.animation.enable,max:(0,i.GO)(n.opacity.value),min:(0,i.KM)(n.opacity.value),status:"increasing",value:(0,i.qS)(n.opacity.value),velocity:(0,i.qS)(n.opacity.animation.speed)/i.sc*a.container.retina.reduceFactor,decay:1-(0,i.qS)(n.opacity.animation.decay),delayTime:(0,i.qS)(n.opacity.animation.delay)*i.Ub,time:0}:void 0},{opacity:c}=o;if(n.opacity&&c){const a=n.opacity.value;c.min=(0,i.KM)(a),c.max=(0,i.GO)(a);switch(n.opacity.animation.startValue){case"min":c.value=c.min,c.status="increasing";break;case"max":c.value=c.max,c.status="decreasing";break;default:c.value=(0,i.jy)(c),c.status=(0,i.CE)()>=i.oz?"increasing":"decreasing"}}a.gradient.colors.push(o)}await Promise.resolve()}isEnabled(a){var e,t,i;return!a.destroyed&&!a.spawning&&(!(null===(e=a.gradient)||void 0===e||!e.angle.enable)||null!==(t=null===(i=a.gradient)||void 0===i?void 0:i.colors.some((a=>a.value.h.enable||a.value.s.enable||a.value.l.enable)))&&void 0!==t&&t)}loadOptions(a){for(var e=arguments.length,t=new Array(e>1?e-1:0),o=1;o<e;o++)t[o-1]=arguments[o];for(const s of t){if(null===s||void 0===s||!s.gradient)continue;const e=s.gradient;e&&(a.gradient=(0,i.yW)(e,(a=>{const e=new d;return e.load(a),e})))}}async update(a,e){const{updateGradient:i}=await t.e(55).then(t.bind(t,55));i(a,e)}}}}]);
//# sourceMappingURL=152.1f1816ce.chunk.js.map