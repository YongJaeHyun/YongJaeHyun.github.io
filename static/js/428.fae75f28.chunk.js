"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[428],{428:(e,t,o)=>{o.d(t,{ExportVideoInstance:()=>n});var s=o(4864);const a=["webm","ogg","mp4","x-matroska"],p=["vp9","vp9.0","vp8","vp8.0","avc1","av1","h265","h.265","h264","h.264","opus","pcm","aac","mpeg","mp4a"];class n{constructor(e,t){this._supportedTypes=[],this._exportVideo=async e=>{const t=this._container.canvas.element;if(t)return new Promise((o=>{var a,p,n;const c=t.captureStream(null!==(a=e.fps)&&void 0!==a?a:this._container.actualOptions.fpsLimit),i=null!==(p=e.mimeType)&&void 0!==p?p:this._supportedTypes[0],r=new MediaRecorder(c,{mimeType:i}),d=[];r.addEventListener("dataavailable",(e=>{d.push(e.data)})),r.addEventListener("stop",(()=>{o(new Blob(d,{type:i}))})),r.start(),setTimeout((()=>{r.stop()}),null!==(n=e.duration)&&void 0!==n?n:5*s.Ub)}))},this._container=e,this._engine=t,this._supportedTypes=function(){const e=e=>MediaRecorder.isTypeSupported(e),t=[];return a.forEach((o=>{const s="video/".concat(o);p.forEach((o=>["".concat(s,";codecs=").concat(o),"".concat(s,";codecs=").concat(o.toUpperCase())].forEach((o=>{e(o)&&t.push(o)})))),e(s)&&t.push(s)})),t}()}async export(e,t){const o={supported:!1};if("video"===e)o.supported=!0,o.blob=await this._exportVideo(t);return o}}}}]);
//# sourceMappingURL=428.fae75f28.chunk.js.map