"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[989],{9247:function(e,n,t){var r=t(5361)["Buffer"];t(7658);var o=t(3517),i=5;function c(e){var n=r.alloc(2);return n.writeUInt16BE(e,0),n}var u={data:r.alloc(0),dataLength:0,sequence:0},s=function(e,n){return{makeBlocks:function(t){var o=r.concat([c(t.length),t]),u=n-5,s=Math.ceil(o.length/u);o=r.concat([o,r.alloc(s*u-o.length+1).fill(0)]);for(var a=[],l=0;l<s;l++){var d=r.alloc(5);d.writeUInt16BE(e,0),d.writeUInt8(i,2),d.writeUInt16BE(l,3);var f=o.slice(l*u,(l+1)*u);a.push(r.concat([d,f]))}return a},reduceResponse:function(n,t){var c=n||u,s=c.data,a=c.dataLength,l=c.sequence;if(t.readUInt16BE(0)!==e)throw new o.TransportError("Invalid channel","InvalidChannel");if(t.readUInt8(2)!==i)throw new o.TransportError("Invalid tag","InvalidTag");if(t.readUInt16BE(3)!==l)throw new o.TransportError("Invalid sequence","InvalidSequence");n||(a=t.readUInt16BE(5)),l++;var d=t.slice(n?5:7);return s=r.concat([s,d]),s.length>a&&(s=s.slice(0,a)),{data:s,dataLength:a,sequence:l}},getReducedResult:function(e){if(e&&e.dataLength===e.data.length)return e.data}}};n.Z=s},989:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});t(7658);var r=t(3793),o=t.n(r),i=t(3517),c=t(5361)["Buffer"],u=t(5941),s=function(e,n,t,r){function o(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,i){function c(e){try{s(r.next(e))}catch(n){i(n)}}function u(e){try{s(r["throw"](e))}catch(n){i(n)}}function s(e){e.done?t(e.value):o(e.value).then(c,u)}s((r=r.apply(e,n||[])).next())}))};class a{constructor(){this.exchangeTimeout=3e4,this.unresponsiveTimeout=15e3,this.deviceModel=null,this._events=new(o()),this.send=(e,n,t,r,o=c.alloc(0),u=[i.StatusCodes.OK])=>s(this,void 0,void 0,(function*(){if(o.length>=256)throw new i.TransportError("data.length exceed 256 bytes limit. Got: "+o.length,"DataLengthTooBig");const s=yield this.exchange(c.concat([c.from([e,n,t,r]),c.from([o.length]),o])),a=s.readUInt16BE(s.length-2);if(!u.some((e=>e===a)))throw new i.TransportStatusError(a);return s})),this.exchangeAtomicImpl=e=>s(this,void 0,void 0,(function*(){if(this.exchangeBusyPromise)throw new i.TransportRaceCondition("An action was already pending on the Ledger device. Please deny or reconnect.");let n;const t=new Promise((e=>{n=e}));this.exchangeBusyPromise=t;let r=!1;const o=setTimeout((()=>{r=!0,this.emit("unresponsive")}),this.unresponsiveTimeout);try{const n=yield e();return r&&this.emit("responsive"),n}finally{clearTimeout(o),n&&n(),this.exchangeBusyPromise=null}})),this._appAPIlock=null}exchange(e){throw new Error("exchange not implemented")}exchangeBulk(e,n){let t=!1;const r=()=>{t=!0},o=()=>s(this,void 0,void 0,(function*(){if(!t)for(const r of e){const e=yield this.exchange(r);if(t)return;const o=e.readUInt16BE(e.length-2);if(o!==i.StatusCodes.OK)throw new i.TransportStatusError(o);n.next(e)}}));return o().then((()=>!t&&n.complete()),(e=>!t&&n.error(e))),{unsubscribe:r}}setScrambleKey(e){}close(){return Promise.resolve()}on(e,n){this._events.on(e,n)}off(e,n){this._events.removeListener(e,n)}emit(e,...n){this._events.emit(e,...n)}setDebugMode(){u.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.")}setExchangeTimeout(e){this.exchangeTimeout=e}setExchangeUnresponsiveTimeout(e){this.unresponsiveTimeout=e}static create(e=3e3,n){return new Promise(((t,r)=>{let o=!1;const c=this.listen({next:n=>{o=!0,c&&c.unsubscribe(),u&&clearTimeout(u),this.open(n.descriptor,e).then(t,r)},error:e=>{u&&clearTimeout(u),r(e)},complete:()=>{u&&clearTimeout(u),o||r(new i.TransportError(this.ErrorMessage_NoDeviceFound,"NoDeviceFound"))}}),u=n?setTimeout((()=>{c.unsubscribe(),r(new i.TransportError(this.ErrorMessage_ListenTimeout,"ListenTimeout"))}),n):null}))}decorateAppAPIMethods(e,n,t){for(const r of n)e[r]=this.decorateAppAPIMethod(r,e[r],e,t)}decorateAppAPIMethod(e,n,t,r){return(...o)=>s(this,void 0,void 0,(function*(){const{_appAPIlock:c}=this;if(c)return Promise.reject(new i.TransportError("Ledger Device is busy (lock "+c+")","TransportLocked"));try{return this._appAPIlock=e,this.setScrambleKey(r),yield n.apply(t,o)}finally{this._appAPIlock=null}}))}}a.ErrorMessage_ListenTimeout="No Ledger device found (timeout)",a.ErrorMessage_NoDeviceFound="No Ledger device found";var l,d,f=a,h=t(9247),p=t(2253),v=t.n(p),m=function(){return m=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t],n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},m.apply(this,arguments)};(function(e){e["blue"]="blue",e["nanoS"]="nanoS",e["nanoSP"]="nanoSP",e["nanoX"]="nanoX",e["nanoFTS"]="nanoFTS"})(d||(d={}));var g=(l={},l[d.blue]={id:d.blue,productName:"Ledger Blue",productIdMM:0,legacyUsbProductId:0,usbOnly:!0,memorySize:491520,masks:[822083584,822149120],getBlockSize:function(e){return 4096}},l[d.nanoS]={id:d.nanoS,productName:"Ledger Nano S",productIdMM:16,legacyUsbProductId:1,usbOnly:!0,memorySize:327680,masks:[823132160],getBlockSize:function(e){var n;return v().lt(null!==(n=v().coerce(e))&&void 0!==n?n:"","2.0.0")?4096:2048}},l[d.nanoSP]={id:d.nanoSP,productName:"Ledger Nano S Plus",productIdMM:80,legacyUsbProductId:5,usbOnly:!0,memorySize:1572864,masks:[856686592],getBlockSize:function(e){return 32}},l[d.nanoX]={id:d.nanoX,productName:"Ledger Nano X",productIdMM:64,legacyUsbProductId:4,usbOnly:!1,memorySize:2097152,masks:[855638016],getBlockSize:function(e){return 4096},bluetoothSpec:[{serviceUuid:"13d63400-2c97-0004-0000-4c6564676572",notifyUuid:"13d63400-2c97-0004-0001-4c6564676572",writeUuid:"13d63400-2c97-0004-0002-4c6564676572",writeCmdUuid:"13d63400-2c97-0004-0003-4c6564676572"}]},l[d.nanoFTS]={id:d.nanoFTS,productName:"Ledger Nano FTS",productIdMM:96,legacyUsbProductId:6,usbOnly:!1,memorySize:2097152,masks:[857735168],getBlockSize:function(e){return 4096},bluetoothSpec:[{serviceUuid:"13d63400-2c97-6004-0000-4c6564676572",notifyUuid:"13d63400-2c97-6004-0001-4c6564676572",writeUuid:"13d63400-2c97-6004-0002-4c6564676572",writeCmdUuid:"13d63400-2c97-6004-0003-4c6564676572"}]},l),y=(d.blue,d.nanoS,d.nanoSP,d.nanoX,d.nanoFTS,Object.values(g)),w=11415,b=function(e){var n=y.find((function(n){return n.legacyUsbProductId===e}));if(n)return n;var t=e>>8,r=y.find((function(e){return e.productIdMM===t}));return r},S=[],I={};for(var T in g){var P=g[T],k=P.bluetoothSpec;if(k)for(var E=0;E<k.length;E++){var x=k[E];S.push(x.serviceUuid),I[x.serviceUuid]=I[x.serviceUuid.replace(/-/g,"")]=m({deviceModel:P},x)}}var U=t(5941),M=0,_=[],L=function(e,n,t){var r={type:e,id:String(++M),date:new Date};n&&(r.message=n),t&&(r.data=t),O(r)},B=function(e){return _.push(e),function(){var n=_.indexOf(e);-1!==n&&(_[n]=_[_.length-1],_.pop())}};function O(e){for(var n=0;n<_.length;n++)try{_[n](e)}catch(t){U.error(t)}}"undefined"!==typeof window&&(window.__ledgerLogsListen=B);var D=t(5361)["Buffer"],A=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),C=function(e,n,t,r){function o(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,i){function c(e){try{s(r.next(e))}catch(n){i(n)}}function u(e){try{s(r["throw"](e))}catch(n){i(n)}}function s(e){e.done?t(e.value):o(e.value).then(c,u)}s((r=r.apply(e,n||[])).next())}))},N=function(e,n){var t,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(e){return function(n){return s([e,n])}}function s(i){if(t)throw new TypeError("Generator is already executing.");while(c)try{if(t=1,r&&(o=2&i[0]?r["return"]:i[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(o=c.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(e,c)}catch(u){i=[6,u],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},z=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),c=[];try{while((void 0===n||n-- >0)&&!(r=i.next()).done)c.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(t=i["return"])&&t.call(i)}finally{if(o)throw o.error}}return c},R=[{vendorId:w}],F=function(){return Promise.resolve(!(!window.navigator||!window.navigator.hid))},q=function(){var e=navigator.hid;if(!e)throw new i.TransportError("navigator.hid is not supported","HIDNotSupported");return e};function j(){return C(this,void 0,void 0,(function(){var e;return N(this,(function(n){switch(n.label){case 0:return[4,q().requestDevice({filters:R})];case 1:return e=n.sent(),Array.isArray(e)?[2,e]:[2,[e]]}}))}))}function X(){return C(this,void 0,void 0,(function(){var e;return N(this,(function(n){switch(n.label){case 0:return[4,q().getDevices()];case 1:return e=n.sent(),[2,e.filter((function(e){return e.vendorId===w}))]}}))}))}function K(){return C(this,void 0,void 0,(function(){var e,n;return N(this,(function(t){switch(t.label){case 0:return[4,X()];case 1:return e=t.sent(),e.length>0?[2,e[0]]:[4,j()];case 2:return n=t.sent(),[2,n[0]]}}))}))}var G=function(e){function n(n){var t=e.call(this)||this;return t.channel=Math.floor(65535*Math.random()),t.packetSize=64,t.inputs=[],t.read=function(){return t.inputs.length?Promise.resolve(t.inputs.shift()):new Promise((function(e){t.inputCallback=e}))},t.onInputReport=function(e){var n=D.from(e.data.buffer);t.inputCallback?(t.inputCallback(n),t.inputCallback=null):t.inputs.push(n)},t._disconnectEmitted=!1,t._emitDisconnect=function(e){t._disconnectEmitted||(t._disconnectEmitted=!0,t.emit("disconnect",e))},t.exchange=function(e){return C(t,void 0,void 0,(function(){var n,t=this;return N(this,(function(r){switch(r.label){case 0:return[4,this.exchangeAtomicImpl((function(){return C(t,void 0,void 0,(function(){var n,t,r,o,i,c,u,s,a;return N(this,(function(l){switch(l.label){case 0:n=this,t=n.channel,r=n.packetSize,L("apdu","=> "+e.toString("hex")),o=(0,h.Z)(t,r),i=o.makeBlocks(e),c=0,l.label=1;case 1:return c<i.length?[4,this.device.sendReport(0,i[c])]:[3,4];case 2:l.sent(),l.label=3;case 3:return c++,[3,1];case 4:return(u=o.getReducedResult(s))?[3,6]:[4,this.read()];case 5:return a=l.sent(),s=o.reduceResponse(s,a),[3,4];case 6:return L("apdu","<= "+u.toString("hex")),[2,u]}}))}))}))["catch"]((function(e){if(e&&e.message&&e.message.includes("write"))throw t._emitDisconnect(e),new i.DisconnectedDeviceDuringOperation(e.message);throw e}))];case 1:return n=r.sent(),[2,n]}}))}))},t.device=n,t.deviceModel="number"===typeof n.productId?b(n.productId):void 0,n.addEventListener("inputreport",t.onInputReport),t}return A(n,e),n.request=function(){return C(this,void 0,void 0,(function(){var e,t;return N(this,(function(r){switch(r.label){case 0:return[4,j()];case 1:return e=z.apply(void 0,[r.sent(),1]),t=e[0],[2,n.open(t)]}}))}))},n.openConnected=function(){return C(this,void 0,void 0,(function(){var e;return N(this,(function(t){switch(t.label){case 0:return[4,X()];case 1:return e=t.sent(),0===e.length?[2,null]:[2,n.open(e[0])]}}))}))},n.open=function(e){return C(this,void 0,void 0,(function(){var t,r;return N(this,(function(o){switch(o.label){case 0:return[4,e.open()];case 1:return o.sent(),t=new n(e),r=function(n){e===n.device&&(q().removeEventListener("disconnect",r),t._emitDisconnect(new i.DisconnectedDevice))},q().addEventListener("disconnect",r),[2,t]}}))}))},n.prototype.close=function(){return C(this,void 0,void 0,(function(){return N(this,(function(e){switch(e.label){case 0:return[4,this.exchangeBusyPromise];case 1:return e.sent(),this.device.removeEventListener("inputreport",this.onInputReport),[4,this.device.close()];case 2:return e.sent(),[2]}}))}))},n.prototype.setScrambleKey=function(){},n.isSupported=F,n.list=X,n.listen=function(e){var n=!1;function t(){n=!0}return K().then((function(t){if(t){if(!n){var r="number"===typeof t.productId?b(t.productId):void 0;e.next({type:"add",descriptor:t,deviceModel:r}),e.complete()}}else e.error(new i.TransportOpenUserCancelled("Access denied to use Ledger device"))}),(function(n){e.error(new i.TransportOpenUserCancelled(n.message))})),{unsubscribe:t}},n}(f),Z=G}}]);
//# sourceMappingURL=989.f32c9605.js.map