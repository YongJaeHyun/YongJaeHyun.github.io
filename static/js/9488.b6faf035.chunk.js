"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9488],{4726:(t,i,o)=>{o.d(i,{EmittersPlugin:()=>n});var e=o(4864),s=o(1848);class n{constructor(t){this._engine=t,this.id="emitters"}async getPlugin(t){const{Emitters:i}=await o.e(5571).then(o.bind(o,5571));return new i(this._engine,t)}loadOptions(t,i){var o;if(!this.needsPlugin(t)&&!this.needsPlugin(i))return;null!==i&&void 0!==i&&i.emitters&&(t.emitters=(0,e.yW)(i.emitters,(t=>{const i=new s.Emitter;return i.load(t),i})));const n=null===i||void 0===i||null===(o=i.interactivity)||void 0===o||null===(o=o.modes)||void 0===o?void 0:o.emitters;if(n)if((0,e.c7)(n))t.interactivity.modes.emitters={random:{count:1,enable:!0},value:n.map((t=>{const i=new s.Emitter;return i.load(t),i}))};else{const i=n;if(void 0!==i.value){const o=1;if((0,e.c7)(i.value)){var a,l;t.interactivity.modes.emitters={random:{count:null!==(a=i.random.count)&&void 0!==a?a:o,enable:null!==(l=i.random.enable)&&void 0!==l&&l},value:i.value.map((t=>{const i=new s.Emitter;return i.load(t),i}))}}else{var d,r;const e=new s.Emitter;e.load(i.value),t.interactivity.modes.emitters={random:{count:null!==(d=i.random.count)&&void 0!==d?d:o,enable:null!==(r=i.random.enable)&&void 0!==r&&r},value:e}}}else{(t.interactivity.modes.emitters={random:{count:1,enable:!1},value:new s.Emitter}).value.load(n)}}}needsPlugin(t){var i;if(!t)return!1;const o=t.emitters;return(0,e.c7)(o)&&!!o.length||void 0!==o||!(null===(i=t.interactivity)||void 0===i||null===(i=i.events)||void 0===i||null===(i=i.onClick)||void 0===i||!i.mode)&&(0,e.Sc)("emitter",t.interactivity.events.onClick.mode)}}},1848:(t,i,o)=>{o.d(i,{Emitter:()=>r});var e=o(4864);class s{constructor(){this.wait=!1}load(t){t&&(void 0!==t.count&&(this.count=t.count),void 0!==t.delay&&(this.delay=(0,e.Ws)(t.delay)),void 0!==t.duration&&(this.duration=(0,e.Ws)(t.duration)),void 0!==t.wait&&(this.wait=t.wait))}}class n{constructor(){this.quantity=1,this.delay=.1}load(t){void 0!==t&&(void 0!==t.quantity&&(this.quantity=(0,e.Ws)(t.quantity)),void 0!==t.delay&&(this.delay=(0,e.Ws)(t.delay)))}}class a{constructor(){this.color=!1,this.opacity=!1}load(t){t&&(void 0!==t.color&&(this.color=t.color),void 0!==t.opacity&&(this.opacity=t.opacity))}}class l{constructor(){this.options={},this.replace=new a,this.type="square"}load(t){if(t){var i;if(void 0!==t.options)this.options=(0,e.Ww)({},null!==(i=t.options)&&void 0!==i?i:{});this.replace.load(t.replace),void 0!==t.type&&(this.type=t.type)}}}var d=o(736);class r{constructor(){this.autoPlay=!0,this.fill=!0,this.life=new s,this.rate=new n,this.shape=new l,this.startCount=0}load(t){t&&(void 0!==t.autoPlay&&(this.autoPlay=t.autoPlay),void 0!==t.size&&(this.size||(this.size=new d.G),this.size.load(t.size)),void 0!==t.direction&&(this.direction=t.direction),this.domId=t.domId,void 0!==t.fill&&(this.fill=t.fill),this.life.load(t.life),this.name=t.name,this.particles=(0,e.yW)(t.particles,(t=>(0,e.Ww)({},t))),this.rate.load(t.rate),this.shape.load(t.shape),void 0!==t.position&&(this.position={},void 0!==t.position.x&&(this.position.x=(0,e.Ws)(t.position.x)),void 0!==t.position.y&&(this.position.y=(0,e.Ws)(t.position.y))),void 0!==t.spawnColor&&(void 0===this.spawnColor&&(this.spawnColor=new e.uC),this.spawnColor.load(t.spawnColor)),void 0!==t.startCount&&(this.startCount=t.startCount))}}},736:(t,i,o)=>{o.d(i,{G:()=>e});class e{constructor(){this.mode="percent",this.height=0,this.width=0}load(t){void 0!==t&&(void 0!==t.mode&&(this.mode=t.mode),void 0!==t.height&&(this.height=t.height),void 0!==t.width&&(this.width=t.width))}}}}]);
//# sourceMappingURL=9488.b6faf035.chunk.js.map