"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3672],{3672:(i,t,e)=>{e.d(t,{InfectionPlugin:()=>a});var n=e(4864);class o{constructor(){this.color=new n.wD,this.color.value="#ff0000",this.radius=0,this.rate=1}load(i){void 0!==i&&(void 0!==i.color&&(this.color=n.wD.create(this.color,i.color)),this.duration=i.duration,this.infectedStage=i.infectedStage,void 0!==i.radius&&(this.radius=i.radius),void 0!==i.rate&&(this.rate=i.rate))}}class s{constructor(){this.cure=!1,this.delay=0,this.enable=!1,this.infections=0,this.stages=[]}load(i){void 0!==i&&(void 0!==i.cure&&(this.cure=i.cure),void 0!==i.delay&&(this.delay=i.delay),void 0!==i.enable&&(this.enable=i.enable),void 0!==i.infections&&(this.infections=i.infections),void 0!==i.stages&&(this.stages=i.stages.map((i=>{const t=new o;return t.load(i),t}))))}}class a{constructor(){this.id="infection"}async getPlugin(i){const{InfectionInstance:t}=await e.e(5776).then(e.bind(e,5776));return new t(i)}loadOptions(i,t){var e;if(!this.needsPlugin(i)&&!this.needsPlugin(t))return;let n=i.infection;void 0===(null===(e=n)||void 0===e?void 0:e.load)&&(i.infection=n=new s),n.load(null===t||void 0===t?void 0:t.infection)}needsPlugin(i){var t,e;return null!==(t=null===i||void 0===i||null===(e=i.infection)||void 0===e?void 0:e.enable)&&void 0!==t&&t}}}}]);
//# sourceMappingURL=3672.5f53712d.chunk.js.map