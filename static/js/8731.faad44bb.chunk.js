"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[8731],{8731:(e,t,s)=>{s.d(t,{PolygonPathGenerator:()=>o});var i=s(4864);class o{constructor(){this._createDirs=()=>{this.dirsList=[];for(let e=0;e<360;e+=360/this.options.sides){const t=this.options.angle+e;this.dirsList.push(i.Cg.create(Math.cos(t*Math.PI/180),Math.sin(t*Math.PI/180)))}},this.dirsList=[],this.options={sides:6,turnSteps:20,angle:30}}generate(e){const{sides:t}=this.options;void 0===e.hexStep&&(e.hexStep=0),void 0===e.hexDirection&&(e.hexDirection=6===t?2*(3*(0,i.CE)()|0):(0,i.CE)()*t|0),void 0===e.hexSpeed&&(e.hexSpeed=e.velocity.length),e.hexStep%this.options.turnSteps===0&&(e.hexDirection=(0,i.CE)()>.5?(e.hexDirection+1)%t:(e.hexDirection+t-1)%t),e.velocity.x=0,e.velocity.y=0,e.hexStep++;const s=this.dirsList[e.hexDirection];return Promise.resolve(i.Cg.create(s.x*e.hexSpeed,s.y*e.hexSpeed))}async init(e){var t;const s=e.actualOptions.particles.move.path.options;this.options.sides=s.sides>0?s.sides:6,this.options.angle=null!==(t=s.angle)&&void 0!==t?t:30,this.options.turnSteps=s.turnSteps>=0?s.turnSteps:20,this._createDirs(),await Promise.resolve()}reset(e){delete e.hexStep,delete e.hexDirection,delete e.hexSpeed}update(){}}}}]);
//# sourceMappingURL=8731.faad44bb.chunk.js.map